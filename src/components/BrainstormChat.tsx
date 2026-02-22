import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { BrainstormMessage, BrainstormSession, ImageAttachment } from '../brainstorm-types.js';
import { makePlainRequest, buildApiMessages } from '../request.js';
import { uploadImage, fileToDataUrl, imageUrlToDataUrl } from '../image-utils.js';
import { settingsManager, ExtensionSettings } from '../settings.js';
import { Session } from '../generate.js';
import { buildInitialBrainstormMessages } from '../brainstorm-prompt-builder.js';
import { st_echo } from 'sillytavern-utils-lib/config';
import { MarkdownContent } from './MarkdownContent.js';

const globalContext = SillyTavern.getContext();

function isVideoInliningSupported(): boolean {
  const el = document.getElementById('openai_video_inlining_supported');
  return el?.dataset.ccToggle === 'true';
}

interface BrainstormChatProps {
  session: BrainstormSession;
  onBack: () => void;
  onSessionUpdate: (updatedSession: BrainstormSession) => void;
  contextToSend: ExtensionSettings['contextToSend'];
  sessionForContext: Pick<Session, 'fields' | 'draftFields' | 'selectedCharacterIndexes' | 'selectedWorldNames'>;
}

export const BrainstormChat: FC<BrainstormChatProps> = ({ session, onBack, onSessionUpdate, contextToSend, sessionForContext }) => {
  const [messages, setMessages] = useState<BrainstormMessage[]>(session.messages);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [editingImages, setEditingImages] = useState<ImageAttachment[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [pendingImages, setPendingImages] = useState<File[]>([]);
  const [pendingImagePreviews, setPendingImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageDataUrlCache = useRef<Map<string, string>>(new Map());

  const isVideoFile = (file: File) => file.type.startsWith('video/');
  const isVideoAttachment = (img: ImageAttachment) => img.mediaType === 'video';

  // Refs to avoid stale closures in the async rebuild effect
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const sessionRef = useRef(session);
  sessionRef.current = session;
  const onSessionUpdateRef = useRef(onSessionUpdate);
  onSessionUpdateRef.current = onSessionUpdate;
  const sessionForContextRef = useRef(sessionForContext);
  sessionForContextRef.current = sessionForContext;

  // Rebuild initial context when contextToSend changes
  const contextKey = JSON.stringify(contextToSend);
  const isFirstContextRender = useRef(true);

  useEffect(() => {
    if (isFirstContextRender.current) {
      isFirstContextRender.current = false;
      return;
    }

    let cancelled = false;
    const rebuild = async () => {
      const currentSettings = settingsManager.getSettings();
      try {
        const newInitialMsgs = await buildInitialBrainstormMessages(
          sessionForContextRef.current.fields,
          sessionForContextRef.current.draftFields,
          currentSettings.mainContextTemplatePreset,
          contextToSend,
          sessionForContextRef.current,
        );
        if (cancelled) return;

        const chatMsgs = messagesRef.current.filter((m) => !m.isInitial);
        const newMessages = [...newInitialMsgs, ...chatMsgs];

        setMessages(newMessages);
        onSessionUpdateRef.current({
          ...sessionRef.current,
          messages: newMessages,
          contextConfig: {
            stDescription: contextToSend.stDescription,
            charCard: contextToSend.charCard,
            existingFields: contextToSend.existingFields,
            worldInfo: contextToSend.worldInfo,
            persona: contextToSend.persona,
            messages: contextToSend.messages,
          },
        });
      } catch (error) {
        console.error('Failed to rebuild brainstorm context:', error);
      }
    };
    rebuild();
    return () => {
      cancelled = true;
    };
  }, [contextKey]);

  const addPendingImages = useCallback(async (files: File[]) => {
    const mediaFiles = files.filter((f) => f.type.startsWith('image/') || f.type.startsWith('video/'));
    if (mediaFiles.length === 0) return;

    const previews = await Promise.all(mediaFiles.map((f) => fileToDataUrl(f)));
    setPendingImages((prev) => [...prev, ...mediaFiles]);
    setPendingImagePreviews((prev) => [...prev, ...previews]);
  }, []);

  const removePendingImage = useCallback((index: number) => {
    setPendingImages((prev) => prev.filter((_, i) => i !== index));
    setPendingImagePreviews((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const files = Array.from(e.clipboardData.files);
      if (files.some((f) => f.type.startsWith('image/') || f.type.startsWith('video/'))) {
        e.preventDefault();
        addPendingImages(files);
      }
    },
    [addPendingImages],
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      addPendingImages(files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [addPendingImages],
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendRequest = useCallback(
    async (messagesToSend: BrainstormMessage[], optimisticUpdate: () => void, revertUpdate: () => void) => {
      const settings = settingsManager.getSettings();
      if (!settings.profileId) {
        st_echo('warning', 'Please select a connection profile in the extension settings.');
        return;
      }
      abortControllerRef.current = new AbortController();

      // Ensure all images in messages have cached data URLs
      for (const msg of messagesToSend) {
        if (msg.images) {
          for (const img of msg.images) {
            if (!imageDataUrlCache.current.has(img.url)) {
              try {
                const dataUrl = await imageUrlToDataUrl(img.url);
                imageDataUrlCache.current.set(img.url, dataUrl);
              } catch (error) {
                console.warn(`Failed to load image ${img.url}, skipping`, error);
              }
            }
          }
        }
      }

      optimisticUpdate();
      setIsLoading(true);

      try {
        // Build API messages with multimodal content for images
        const skipVideo = !isVideoInliningSupported();
        const apiMessages = buildApiMessages(messagesToSend, imageDataUrlCache.current, skipVideo);

        const responseContent = await makePlainRequest(
          settings.profileId,
          apiMessages,
          settings.maxResponseToken,
          abortControllerRef.current.signal,
        );

        const assistantMessage: BrainstormMessage = {
          id: `bm-${Date.now()}-ai`,
          role: 'assistant',
          content: responseContent,
        };

        const finalMessages = [...messagesToSend, assistantMessage];
        setMessages(finalMessages);
        onSessionUpdate({ ...session, messages: finalMessages });
      } catch (error: any) {
        if (error.name === 'AbortError') {
          st_echo('info', 'Request was cancelled.');
        } else {
          console.error('Brainstorm request failed:', error);
          st_echo('error', `Request failed: ${error.message}`);
        }
        revertUpdate();
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [session, onSessionUpdate],
  );

  const handleSendMessage = useCallback(async () => {
    if (isLoading) return;

    const chatMsgsLocal = messages.filter((m) => !m.isInitial);
    const lastChatMsg = chatMsgsLocal[chatMsgsLocal.length - 1];
    const canResend = lastChatMsg?.role === 'user';

    if (!userInput.trim() && pendingImages.length === 0 && !canResend) return;

    if (!userInput.trim() && pendingImages.length === 0 && canResend) {
      const previousMessages = messages;
      await sendRequest(
        messages,
        () => {},
        () => setMessages(previousMessages),
      );
      return;
    }

    // Upload pending images
    let uploadedImages: ImageAttachment[] = [];
    if (pendingImages.length > 0) {
      try {
        uploadedImages = await Promise.all(pendingImages.map((f) => uploadImage(f)));
        // Cache the data URLs for API requests
        for (let i = 0; i < uploadedImages.length; i++) {
          imageDataUrlCache.current.set(uploadedImages[i].url, pendingImagePreviews[i]);
        }
      } catch (error: any) {
        console.error('Image upload failed:', error);
        st_echo('error', `Image upload failed: ${error.message}`);
        return;
      }
    }

    const userMessage: BrainstormMessage = {
      id: `bm-${Date.now()}`,
      role: 'user',
      content: userInput.trim(),
      ...(uploadedImages.length > 0 ? { images: uploadedImages } : {}),
    };

    const messagesWithUser = [...messages, userMessage];
    sendRequest(
      messagesWithUser,
      () => {
        setMessages(messagesWithUser);
        setUserInput('');
        setPendingImages([]);
        setPendingImagePreviews([]);
      },
      () => {
        // On error, keep the user message instead of reverting it
        setMessages(messagesWithUser);
        onSessionUpdate({ ...session, messages: messagesWithUser });
      },
    );
  }, [userInput, isLoading, messages, sendRequest, pendingImages, pendingImagePreviews, session, onSessionUpdate]);

  const handleRegenerate = useCallback(async () => {
    if (isLoading || messages.length === 0) return;

    const previousMessages = messages;
    let messagesForRequest = [...messages];

    const lastMessageIndex = messages.length - 1;
    if (messages[lastMessageIndex].role === 'assistant') {
      messagesForRequest = messages.slice(0, lastMessageIndex);
    }

    await sendRequest(
      messagesForRequest,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  }, [isLoading, messages, sendRequest]);

  const handleStartEdit = (msg: BrainstormMessage) => {
    setEditingMessageId(msg.id);
    setEditingContent(msg.content);
    setEditingImages(msg.images ? [...msg.images] : []);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingContent('');
    setEditingImages([]);
  };

  const handleSaveEdit = async () => {
    if (!editingMessageId) return;

    const messageIndex = messages.findIndex((m) => m.id === editingMessageId);
    if (messageIndex === -1) return;

    const editedMessage = messages[messageIndex];

    if (editedMessage.role === 'assistant') {
      const updatedMessages = messages.map((m) =>
        m.id === editingMessageId
          ? { ...m, content: editingContent, images: editingImages.length > 0 ? editingImages : undefined }
          : m,
      );
      setMessages(updatedMessages);
      onSessionUpdate({ ...session, messages: updatedMessages });
      handleCancelEdit();
      return;
    }

    const confirm = await globalContext.Popup.show.confirm(
      'Edit Message',
      'This will fork the conversation from this point, removing all subsequent messages. Continue?',
    );
    if (!confirm) return;

    const previousMessages = messages;
    const truncatedMessages = messages.slice(0, messageIndex);
    const editedMsg = {
      ...messages[messageIndex],
      content: editingContent,
      images: editingImages.length > 0 ? editingImages : undefined,
    };
    const messagesForRequest = [...truncatedMessages, editedMsg];

    handleCancelEdit();

    sendRequest(
      messagesForRequest,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  };

  const handleDeleteMessage = async (messageId: string) => {
    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) return;

    const messageToDelete = messages[messageIndex];
    const isInitial = !!messageToDelete.isInitial;

    const confirm = await globalContext.Popup.show.confirm(
      'Delete Message',
      isInitial
        ? 'Deleting part of the initial context will clear the entire chat history. Are you sure?'
        : 'This will delete this message and all subsequent messages. Are you sure?',
    );
    if (!confirm) return;

    let newMessages: BrainstormMessage[];
    if (isInitial) {
      newMessages = messages.filter((m) => m.isInitial && m.id !== messageId);
    } else {
      newMessages = messages.slice(0, messageIndex);
    }

    setMessages(newMessages);
    onSessionUpdate({ ...session, messages: newMessages });
    st_echo('info', 'Message history has been updated.');
  };

  const handleCancelRequest = () => {
    abortControllerRef.current?.abort();
  };

  const initialMsgs = messages.filter((m) => m.isInitial);
  const chatMsgs = messages.filter((m) => !m.isInitial);
  const lastAssistantMsgId = chatMsgs.filter((m) => m.role === 'assistant').at(-1)?.id;
  const lastChatMsg = chatMsgs[chatMsgs.length - 1];
  const canResend = !!(lastChatMsg && lastChatMsg.role === 'user');

  return (
    <div className="brainstorm-chat">
      <div className="popup_header">
        <h3>{session.name}</h3>
        <div className="popup_header_buttons">
          <STButton onClick={onBack} title="Back to sessions">
            <i className="fa-solid fa-arrow-left"></i> Back
          </STButton>
        </div>
      </div>
      <div className="chat-messages">
        {initialMsgs.length > 0 && (
          <details className="initial-messages-container">
            <summary>View Initial Context</summary>
            <div className="initial-messages-content">
              {initialMsgs.map((msg) =>
                editingMessageId === msg.id ? (
                  <div key={msg.id} className="message-editor">
                    <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={5} />
                    {editingImages.length > 0 && (
                      <div className="pending-images-preview">
                        {editingImages.map((img, index) => (
                          <div key={index} className="pending-image-item">
                            {isVideoAttachment(img) ? (
                              <div className="video-thumbnail-wrapper">
                                <video src={img.url} muted preload="metadata" />
                                <i className="fa-solid fa-play video-play-icon"></i>
                              </div>
                            ) : (
                              <img src={img.url} alt={img.name} />
                            )}
                            <STButton
                              className="remove-image-button danger_button"
                              onClick={() => setEditingImages((prev) => prev.filter((_, i) => i !== index))}
                              title="Remove image"
                            >
                              <i className="fa-solid fa-times"></i>
                            </STButton>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="editor-buttons">
                      <STButton onClick={handleSaveEdit}>
                        <i className="fa-solid fa-check"></i> Save &amp; Fork
                      </STButton>
                      <STButton onClick={handleCancelEdit}>
                        <i className="fa-solid fa-times"></i> Cancel
                      </STButton>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className={`message-bubble-wrapper initial-context ${msg.role}`}>
                    <div className={`message-bubble ${msg.role} initial`}>
                      <div className="message-content">{msg.content}</div>
                    </div>
                    {!isLoading && (
                      <div className="message-actions">
                        <STButton
                          className="message-action-button"
                          onClick={() => handleStartEdit(msg)}
                          title="Edit Context"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </STButton>
                        <STButton
                          className="message-action-button danger_button"
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="Delete Context"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </STButton>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </details>
        )}
        {chatMsgs.map((msg) => {
          const isLastAssistant = msg.role === 'assistant' && msg.id === lastAssistantMsgId;
          const editingThis = editingMessageId === msg.id;

          return editingThis ? (
            <div key={msg.id} className="message-editor">
              <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={10} />
              {editingImages.length > 0 && (
                <div className="pending-images-preview">
                  {editingImages.map((img, index) => (
                    <div key={index} className="pending-image-item">
                      {isVideoAttachment(img) ? (
                        <div className="video-thumbnail-wrapper">
                          <video src={img.url} muted preload="metadata" />
                          <i className="fa-solid fa-play video-play-icon"></i>
                        </div>
                      ) : (
                        <img src={img.url} alt={img.name} />
                      )}
                      <STButton
                        className="remove-image-button danger_button"
                        onClick={() => setEditingImages((prev) => prev.filter((_, i) => i !== index))}
                        title="Remove image"
                      >
                        <i className="fa-solid fa-times"></i>
                      </STButton>
                    </div>
                  ))}
                </div>
              )}
              <div className="editor-buttons">
                <STButton onClick={handleSaveEdit}>
                  <i className="fa-solid fa-check"></i> {msg.role === 'assistant' ? 'Save' : 'Save & Fork'}
                </STButton>
                <STButton onClick={handleCancelEdit}>
                  <i className="fa-solid fa-times"></i> Cancel
                </STButton>
              </div>
            </div>
          ) : (
            <div key={msg.id} className={`message-bubble-wrapper ${msg.role}`}>
              <div className={`message-bubble ${msg.role}`}>
                {!isLoading && (
                  <div className="message-actions">
                    <STButton
                      className="message-action-button"
                      onClick={() => handleStartEdit(msg)}
                      title={msg.role === 'assistant' ? 'Edit Message' : 'Edit and Fork'}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </STButton>
                    {isLastAssistant && (
                      <STButton
                        className="message-action-button"
                        onClick={handleRegenerate}
                        title="Regenerate response"
                      >
                        <i className="fa-solid fa-rotate-right"></i>
                      </STButton>
                    )}
                    <STButton
                      className="message-action-button danger_button"
                      onClick={() => handleDeleteMessage(msg.id)}
                      title="Delete Message"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </STButton>
                  </div>
                )}
                {msg.role === 'assistant' ? (
                  <MarkdownContent content={msg.content} />
                ) : (
                  <>
                    <div className="message-content">{msg.content}</div>
                    {msg.images && msg.images.length > 0 && (
                      <div className="message-images">
                        {msg.images.map((img, idx) =>
                          isVideoAttachment(img) ? (
                            <div key={idx} className="video-thumbnail-wrapper" title={img.name} onClick={() => window.open(img.url, '_blank')}>
                              <video src={img.url} muted preload="metadata" />
                              <i className="fa-solid fa-play video-play-icon"></i>
                            </div>
                          ) : (
                            <img
                              key={idx}
                              src={img.url}
                              alt={img.name}
                              title={img.name}
                              onClick={() => window.open(img.url, '_blank')}
                            />
                          ),
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="message-bubble-wrapper assistant">
            <div className="message-bubble assistant loading">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
            <STButton onClick={handleCancelRequest} className="danger_button" title="Cancel Request">
              <i className="fa-solid fa-stop"></i>
            </STButton>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>
      {pendingImagePreviews.length > 0 && (
        <div className="pending-images-preview">
          {pendingImagePreviews.map((preview, index) => (
            <div key={index} className={`pending-image-item ${isVideoFile(pendingImages[index]) ? 'video-thumbnail-wrapper' : ''}`}>
              {isVideoFile(pendingImages[index]) ? (
                <>
                  <video src={preview} muted preload="metadata" />
                  <i className="fa-solid fa-play video-play-icon"></i>
                </>
              ) : (
                <img src={preview} alt={pendingImages[index]?.name || 'pending'} />
              )}
              <STButton
                className="remove-image-button danger_button"
                onClick={() => removePendingImage(index)}
                title="Remove image"
              >
                <i className="fa-solid fa-times"></i>
              </STButton>
            </div>
          ))}
        </div>
      )}
      <div className="chat-input-area">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <STTextarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Brainstorm ideas for your character..."
          rows={3}
          disabled={isLoading || !!editingMessageId}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          onPaste={handlePaste}
        />
        <STButton
          className="image-attach-button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading || !!editingMessageId}
          title="Attach image"
        >
          <i className="fa-solid fa-paperclip"></i>
        </STButton>
        <STButton
          onClick={handleSendMessage}
          disabled={isLoading || !!editingMessageId || (!userInput.trim() && pendingImages.length === 0 && !canResend)}
        >
          <i className="fa-solid fa-paper-plane"></i>
        </STButton>
      </div>
    </div>
  );
};
