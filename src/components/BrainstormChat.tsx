import { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { STButton, STTextarea, Popup } from 'sillytavern-utils-lib/components/react';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { BrainstormMessage, BrainstormSession, ImageAttachment } from '../brainstorm-types.js';
import { makePlainRequest, makeStructuredRequest, buildApiMessages } from '../request.js';
import { uploadImage, fileToDataUrl, imageUrlToDataUrl } from '../image-utils.js';
import { settingsManager, ExtensionSettings } from '../settings.js';
import { Session, CHARACTER_FIELDS } from '../generate.js';
import { buildInitialBrainstormMessages } from '../brainstorm-prompt-builder.js';
import { st_echo } from 'sillytavern-utils-lib/config';
import { MarkdownContent } from './MarkdownContent.js';
import { ExtractReviewPopup } from './ExtractReviewPopup.js';
import { CharacterState } from '../revise-types.js';
import { calculateNewState, getGreetings } from '../character-state.js';
import {
  EXTRACTION_SCHEMA_NAME,
  ExtractionResponse,
  MIN_EXTRACTION_RESPONSE_TOKENS,
  ProposalItem,
  buildExtractionInstruction,
  buildProposalItems,
  createExtractionSchema,
  filterExtractionResponse,
} from '../brainstorm-extract.js';

const globalContext = SillyTavern.getContext();

interface BrainstormChatProps {
  session: BrainstormSession;
  onBack: () => void;
  onSessionUpdate: (updatedSession: BrainstormSession) => void;
  contextToSend: ExtensionSettings['contextToSend'];
  sessionForContext: Pick<Session, 'fields' | 'draftFields' | 'selectedCharacterIndexes' | 'selectedWorldNames'>;
  /** Applies extracted field values to the character card being edited in the main popup. */
  onApplyToCard: (newState: CharacterState) => void;
  /** False while the chat is mounted but hidden (another tab is showing). */
  isActive?: boolean;
}

export const BrainstormChat: FC<BrainstormChatProps> = ({
  session,
  onBack,
  onSessionUpdate,
  contextToSend,
  sessionForContext,
  onApplyToCard,
  isActive = true,
}) => {
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
  const skipVideoRef = useRef(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extraction, setExtraction] = useState<{ response: ExtractionResponse; items: ProposalItem[] } | null>(null);
  const extractAbortRef = useRef<AbortController | null>(null);

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
          currentSettings.brainstormContextTemplatePreset,
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

  // Hiding the tab with `display: none` drops the message list's scroll position, so jump straight
  // back to the latest message when the tab is shown again instead of animating from the top.
  const wasActiveRef = useRef(isActive);

  useEffect(() => {
    const justShown = isActive && !wasActiveRef.current;
    wasActiveRef.current = isActive;
    if (!isActive) return;
    chatEndRef.current?.scrollIntoView({ behavior: justShown ? 'auto' : 'smooth' });
  }, [messages, isActive]);

  /** Populates the data-URL cache for any attachment we have not converted yet. */
  const ensureImageDataUrls = useCallback(async (messagesToSend: BrainstormMessage[]) => {
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
  }, []);

  const sendRequest = useCallback(
    async (messagesToSend: BrainstormMessage[], optimisticUpdate: () => void, revertUpdate: () => void) => {
      const settings = settingsManager.getSettings();
      if (!settings.profileId) {
        st_echo('warning', 'Please select a connection profile in the extension settings.');
        return;
      }
      abortControllerRef.current = new AbortController();

      await ensureImageDataUrls(messagesToSend);

      optimisticUpdate();
      setIsLoading(true);

      try {
        const hasVideo = messagesToSend.some((m) => m.images?.some((img) => img.mediaType === 'video'));
        const apiMessages = buildApiMessages(
          messagesToSend,
          imageDataUrlCache.current,
          hasVideo && skipVideoRef.current,
        );

        let responseContent: string;
        try {
          responseContent = await makePlainRequest(
            settings.profileId,
            apiMessages,
            settings.maxResponseToken,
            abortControllerRef.current.signal,
          );
        } catch (firstError: any) {
          if (firstError.name === 'AbortError' || !hasVideo || skipVideoRef.current) {
            throw firstError;
          }
          // Retry without video — the model likely doesn't support it
          skipVideoRef.current = true;
          const fallbackMessages = buildApiMessages(messagesToSend, imageDataUrlCache.current, true);
          responseContent = await makePlainRequest(
            settings.profileId,
            fallbackMessages,
            settings.maxResponseToken,
            abortControllerRef.current.signal,
          );
          st_echo('warning', 'Video attachments were skipped because the current model does not support them.');
        }

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
    [session, onSessionUpdate, ensureImageDataUrls],
  );

  // --- Card Extraction ---

  const currentState = useMemo(
    (): CharacterState => ({ fields: sessionForContext.fields, draftFields: sessionForContext.draftFields }),
    [sessionForContext.fields, sessionForContext.draftFields],
  );

  const handleExtract = useCallback(
    async (hint?: string) => {
      const settings = settingsManager.getSettings();
      if (!settings.profileId) {
        st_echo('warning', 'Please select a connection profile in the extension settings.');
        return;
      }

      const template = settings.prompts.brainstormExtractPrompt?.content;
      if (!template) {
        st_echo('error', 'The brainstorm card extraction prompt is missing from settings.');
        return;
      }

      setIsExtracting(true);
      extractAbortRef.current = new AbortController();

      try {
        await ensureImageDataUrls(messages);

        const hasVideo = messages.some((m) => m.images?.some((img) => img.mediaType === 'video'));
        const apiMessages = buildApiMessages(messages, imageDataUrlCache.current, hasVideo && skipVideoRef.current);

        const fieldIds = [
          ...CHARACTER_FIELDS.filter((id) => currentState.fields[id]),
          ...Object.keys(currentState.draftFields),
        ];
        const schema = createExtractionSchema(fieldIds, getGreetings(currentState).length);

        const response = (await makeStructuredRequest(
          settings.profileId,
          [...apiMessages, { role: 'user', content: buildExtractionInstruction(template, currentState, hint) }],
          schema,
          EXTRACTION_SCHEMA_NAME,
          settings.defaultPromptEngineeringMode,
          Math.max(settings.maxResponseToken, MIN_EXTRACTION_RESPONSE_TOKENS),
          extractAbortRef.current.signal,
        )) as unknown as ExtractionResponse;

        setExtraction({ response, items: buildProposalItems(currentState, response) });
      } catch (error: any) {
        if (error?.name === 'AbortError') {
          st_echo('info', 'Extraction was cancelled.');
        } else {
          console.error('Card extraction failed:', error);
          st_echo('error', `Could not draft a card: ${error.message}`);
        }
      } finally {
        setIsExtracting(false);
        extractAbortRef.current = null;
      }
    },
    [messages, currentState, ensureImageDataUrls],
  );

  const handleApplyExtraction = useCallback(
    (selectedIds: Set<string>) => {
      if (!extraction) return;
      const filtered = filterExtractionResponse(extraction.response, selectedIds);
      onApplyToCard(calculateNewState(currentState, filtered, 'global'));
      setExtraction(null);
    },
    [extraction, currentState, onApplyToCard],
  );

  const handleCancelExtraction = useCallback(() => {
    extractAbortRef.current?.abort();
    setExtraction(null);
  }, []);

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
        console.error('Upload failed:', error);
        st_echo('error', `Upload failed: ${error.message}`);
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
  // Nothing to extract until the model has actually contributed something.
  const canExtract = chatMsgs.some((m) => m.role === 'assistant');

  return (
    <div className="brainstorm-chat">
      <div className="popup_header">
        <h3>{session.name}</h3>
        <div className="popup_header_buttons">
          <STButton
            onClick={() => handleExtract()}
            disabled={!canExtract || isLoading || isExtracting}
            title={
              canExtract
                ? 'Turn this conversation into character card fields'
                : 'Brainstorm a little first — there is nothing to draft from yet'
            }
          >
            {isExtracting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i> Drafting
              </>
            ) : (
              <>
                <i className="fa-solid fa-wand-magic-sparkles"></i> Draft Card
              </>
            )}
          </STButton>
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
                            <div
                              key={idx}
                              className="video-thumbnail-wrapper"
                              title={img.name}
                              onClick={() => window.open(img.url, '_blank')}
                            >
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
            <div
              key={index}
              className={`pending-image-item ${isVideoFile(pendingImages[index]) ? 'video-thumbnail-wrapper' : ''}`}
            >
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
          title="Attach image or video"
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

      {extraction && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ExtractReviewPopup
              justification={extraction.response.justification}
              items={extraction.items}
              isExtracting={isExtracting}
              onApply={handleApplyExtraction}
              onReExtract={(hint) => handleExtract(hint)}
              onCancel={handleCancelExtraction}
            />
          }
          onComplete={handleCancelExtraction}
          options={{ wide: true, large: true }}
        />
      )}
    </div>
  );
};
