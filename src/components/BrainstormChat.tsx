import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { BrainstormMessage, BrainstormSession } from '../brainstorm-types.js';
import { makePlainRequest } from '../request.js';
import { settingsManager } from '../settings.js';
import { st_echo } from 'sillytavern-utils-lib/config';

const globalContext = SillyTavern.getContext();

interface BrainstormChatProps {
  session: BrainstormSession;
  onBack: () => void;
  onSessionUpdate: (updatedSession: BrainstormSession) => void;
}

export const BrainstormChat: FC<BrainstormChatProps> = ({ session, onBack, onSessionUpdate }) => {
  const [messages, setMessages] = useState<BrainstormMessage[]>(session.messages);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendRequest = useCallback(
    async (
      messagesToSend: BrainstormMessage[],
      optimisticUpdate: () => void,
      revertUpdate: () => void,
    ) => {
      const settings = settingsManager.getSettings();
      if (!settings.profileId) {
        st_echo('warning', 'Please select a connection profile in the extension settings.');
        return;
      }
      abortControllerRef.current = new AbortController();

      optimisticUpdate();
      setIsLoading(true);

      try {
        const responseContent = await makePlainRequest(
          settings.profileId,
          messagesToSend,
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
    if (!userInput.trim() || isLoading) return;
    const userMessage: BrainstormMessage = { id: `bm-${Date.now()}`, role: 'user', content: userInput.trim() };
    const previousMessages = messages;
    sendRequest(
      [...messages, userMessage],
      () => {
        setMessages([...messages, userMessage]);
        setUserInput('');
      },
      () => setMessages(previousMessages),
    );
  }, [userInput, isLoading, messages, sendRequest]);

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
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingContent('');
  };

  const handleSaveEdit = async () => {
    if (!editingMessageId) return;

    const messageIndex = messages.findIndex((m) => m.id === editingMessageId);
    if (messageIndex === -1) return;

    const confirm = await globalContext.Popup.show.confirm(
      'Edit Message',
      'This will fork the conversation from this point, removing all subsequent messages. Continue?',
    );
    if (!confirm) return;

    const previousMessages = messages;
    const truncatedMessages = messages.slice(0, messageIndex);
    const editedMessage = { ...messages[messageIndex], content: editingContent };
    const messagesForRequest = [...truncatedMessages, editedMessage];

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
        {chatMsgs.map((msg) =>
          editingMessageId === msg.id ? (
            <div key={msg.id} className="message-editor">
              <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={3} />
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
            <div key={msg.id} className={`message-bubble-wrapper ${msg.role}`}>
              <div className="message-actions">
                {msg.role === 'user' && !isLoading && (
                  <STButton
                    className="message-action-button"
                    onClick={() => handleStartEdit(msg)}
                    title="Edit and Fork"
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </STButton>
                )}
                {!isLoading && (
                  <STButton
                    className="message-action-button danger_button"
                    onClick={() => handleDeleteMessage(msg.id)}
                    title="Delete Message"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </STButton>
                )}
              </div>
              <div className={`message-bubble ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            </div>
          ),
        )}
        {chatMsgs.length > 0 && !isLoading && (
          <div className="regenerate-button-wrapper">
            <STButton onClick={handleRegenerate} title="Regenerate response">
              <i className="fa-solid fa-rotate-right"></i> Regenerate
            </STButton>
          </div>
        )}
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
      <div className="chat-input-area">
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
        />
        <STButton onClick={handleSendMessage} disabled={isLoading || !userInput.trim() || !!editingMessageId}>
          <i className="fa-solid fa-paper-plane"></i>
        </STButton>
      </div>
    </div>
  );
};
