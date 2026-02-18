# Brainstorm Chat Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a first-class brainstorming chat to the Character Creator extension — a freeform conversation board for character design ideation, fully independent from revise sessions.

**Architecture:** Two new React components (`BrainstormSessionManager` + `BrainstormChat`) rendered inline as a new tab in `MainPopup`. Freeform plain-text responses via `makePlainRequest()`. Sessions persisted in localStorage. Configurable Handlebars system prompt in settings with migration.

**Tech Stack:** TypeScript, React 19, Handlebars, sillytavern-utils-lib (STButton, STTextarea, Popup, ConnectionManagerRequestService)

---

### Task 1: Types — Add BrainstormMessage and BrainstormSession

**Files:**
- Create: `src/brainstorm-types.ts`

**Step 1: Create the types file**

```typescript
import { ContextToSend } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export interface BrainstormMessage extends Message {
  id: string;
  isInitial?: boolean;
}

export interface BrainstormSession {
  id: string;
  name: string;
  createdAt: string;
  messages: BrainstormMessage[];
  contextConfig: Pick<ContextToSend, 'stDescription' | 'charCard' | 'existingFields' | 'worldInfo' | 'persona' | 'messages'>;
}
```

**Step 2: Verify build compiles**

Run: `npm run build` from the extension directory
Expected: No errors

**Step 3: Commit**

```bash
git add src/brainstorm-types.ts
git commit -m "feat: add brainstorm session and message types"
```

---

### Task 2: Settings — Add brainstormSystemPrompt and migration

**Files:**
- Modify: `src/constants.ts` (add default prompt constant)
- Modify: `src/settings.ts:22-23` (bump FORMAT_VERSION)
- Modify: `src/settings.ts:84-100` (add brainstormSystemPrompt to prompts interface)
- Modify: `src/settings.ts:115-146` (add to SystemPromptKey union and SYSTEM_PROMPT_KEYS array)
- Modify: `src/settings.ts:149-164` (add to DEFAULT_PROMPT_CONTENTS)
- Modify: `src/settings.ts:166-180` (add to DEFAULT_SETTINGS.prompts)
- Modify: `src/settings.ts:664-677` (add new migration F_1.9 → F_1.10)

**Step 1: Add default constant to `src/constants.ts`**

Append at the end of the file:

```typescript
export const DEFAULT_BRAINSTORM_SYSTEM_PROMPT = `You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.`;
```

**Step 2: Update `src/settings.ts` — bump FORMAT_VERSION**

Change line 23:
```typescript
export const FORMAT_VERSION = 'F_1.10';
```

**Step 3: Update `src/settings.ts` — add import**

Add `DEFAULT_BRAINSTORM_SYSTEM_PROMPT` to the imports from `'./constants.js'` (line 18).

**Step 4: Update `src/settings.ts` — add to ExtensionSettings.prompts interface**

In the `prompts` object type inside `ExtensionSettings` (around line 84-100), add before the index signature `[key: string]: PromptSetting`:

```typescript
brainstormSystemPrompt: PromptSetting;
```

**Step 5: Update `src/settings.ts` — add to SystemPromptKey union**

Add `'brainstormSystemPrompt'` to the `SystemPromptKey` union type (around line 115-129).

**Step 6: Update `src/settings.ts` — add to SYSTEM_PROMPT_KEYS array**

Add `'brainstormSystemPrompt'` to the `SYSTEM_PROMPT_KEYS` array (around line 131-146).

**Step 7: Update `src/settings.ts` — add to DEFAULT_PROMPT_CONTENTS**

Add to the `DEFAULT_PROMPT_CONTENTS` record (around line 149-164):

```typescript
brainstormSystemPrompt: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
```

**Step 8: Update `src/settings.ts` — add to DEFAULT_SETTINGS.prompts**

In the `DEFAULT_SETTINGS` object's `prompts` field, add:

```typescript
brainstormSystemPrompt: {
  content: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
  isDefault: true,
  label: 'Brainstorm System Prompt',
},
```

**Step 9: Add migration from F_1.9 to F_1.10**

After the F_1.8 → F_1.9 migration block (around line 677), before the closing `]` of the strategy array, add:

```typescript
{
  from: 'F_1.9',
  to: 'F_1.10',
  action(previous: ExtensionSettings): ExtensionSettings {
    const response = {
      ...previous,
    } as ExtensionSettings;

    // Add brainstormSystemPrompt if it doesn't exist
    if (!response.prompts.brainstormSystemPrompt) {
      response.prompts.brainstormSystemPrompt = {
        content: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
        isDefault: true,
        label: 'Brainstorm System Prompt',
      };
    }

    return response;
  },
},
```

**Step 10: Verify build compiles**

Run: `npm run build`
Expected: No errors

**Step 11: Commit**

```bash
git add src/constants.ts src/settings.ts
git commit -m "feat: add brainstormSystemPrompt setting with migration"
```

---

### Task 3: Context Builder — Create brainstorm prompt builder

**Files:**
- Create: `src/brainstorm-prompt-builder.ts`

This function builds the initial system messages for a brainstorm session. It reuses the same Handlebars template compilation and context assembly pattern from `revise-prompt-builder.ts`, but is simpler — no revise-specific task description, no chat history placeholder ID, and always injects the brainstorm system prompt first.

**Step 1: Create `src/brainstorm-prompt-builder.ts`**

```typescript
import * as Handlebars from 'handlebars';
import { BrainstormMessage } from './brainstorm-types.js';
import { ExtensionSettings, settingsManager } from './settings.js';
import { Session, globalContext } from './generate.js';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { selected_group, this_chid } from 'sillytavern-utils-lib/config';

export async function buildInitialBrainstormMessages(
  fields: Session['fields'],
  draftFields: Session['draftFields'],
  mainContextTemplatePreset: string,
  contextToSend: ExtensionSettings['contextToSend'],
  sessionForContext: Pick<Session, 'selectedCharacterIndexes' | 'selectedWorldNames'>,
): Promise<BrainstormMessage[]> {
  const settings = settingsManager.getSettings();
  const preset = settings.mainContextTemplatePresets[mainContextTemplatePreset];
  if (!preset) {
    throw new Error(`Main context template preset "${mainContextTemplatePreset}" not found.`);
  }

  const initialMessages: BrainstormMessage[] = [];

  const resolvedContext = {
    user: globalContext.name1 || 'You',
    char: fields.name?.value || 'Character',
    persona: globalContext.powerUserSettings.persona_description,
  };

  const templateData: Record<string, any> = {
    ...resolvedContext,
    fields: {
      core: Object.fromEntries(
        Object.entries(fields)
          .filter(([k]) => !k.startsWith('alternate_greetings_'))
          .map(([, v]) => [v.label, v.value]),
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(fields)
          .filter(([k]) => k.startsWith('alternate_greetings_'))
          .map(([, v]) => [v.label, v.value]),
      ),
      draft: Object.fromEntries(Object.entries(draftFields).map(([, v]) => [v.label, v.value])),
    },
  };

  if (contextToSend.charCard) {
    const charactersData: Character[] = [];
    sessionForContext.selectedCharacterIndexes.forEach((charIndex) => {
      const char = globalContext.characters[parseInt(charIndex)];
      if (char) {
        charactersData.push(char);
      }
    });
    templateData['characters'] = charactersData;
  }

  if (contextToSend.worldInfo) {
    const lorebooksData: Record<string, WIEntry[]> = {};
    await Promise.all(
      sessionForContext.selectedWorldNames.map(async (name) => {
        const worldInfo = await globalContext.loadWorldInfo(name);
        if (worldInfo) {
          lorebooksData[name] = Object.values(worldInfo.entries).filter((entry) => !entry.disable);
        }
      }),
    );
    templateData['lorebooks'] = lorebooksData;
  }

  // Always inject the brainstorm system prompt first
  const brainstormPrompt = settings.prompts.brainstormSystemPrompt;
  if (brainstormPrompt?.content) {
    let content = Handlebars.compile(brainstormPrompt.content, { noEscape: true })(templateData);
    content = globalContext.substituteParams(content);
    if (content.trim()) {
      initialMessages.push({
        id: `im-${initialMessages.length}`,
        role: 'system',
        content: content.trim(),
        isInitial: true,
      });
    }
  }

  // Then iterate through the preset's prompts for context
  for (const block of preset.prompts) {
    if (!block.enabled) continue;

    // Respect contextToSend settings
    if (block.promptName === 'stDescription' && !contextToSend.stDescription) continue;
    if (block.promptName === 'charDefinitions' && !contextToSend.charCard) continue;
    if (block.promptName === 'lorebookDefinitions' && !contextToSend.worldInfo) continue;
    if (block.promptName === 'existingFieldDefinitions' && !contextToSend.existingFields) continue;
    if (block.promptName === 'personaDescription' && !contextToSend.persona) continue;
    if (block.promptName === 'chatHistory' && contextToSend.messages.type === 'none') continue;
    if (this_chid === undefined && !selected_group && block.promptName === 'chatHistory') continue;

    // Skip chat history for brainstorm sessions (no placeholder mechanism needed)
    if (block.promptName === 'chatHistory') continue;

    // Skip generation-specific prompts that don't apply to brainstorming
    const irrelevantPrompts = ['taskDescription', 'outputFormatInstructions', 'reviseTaskDescription', 'reviseJsonPrompt', 'reviseXmlPrompt', 'brainstormSystemPrompt'];
    if (irrelevantPrompts.includes(block.promptName)) continue;

    const promptSetting = settings.prompts[block.promptName];
    if (!promptSetting || promptSetting.content.includes('{{activeFormatInstructions}}')) continue;

    let content = Handlebars.compile(promptSetting.content, { noEscape: true })(templateData);
    content = globalContext.substituteParams(content);

    if (content.trim()) {
      initialMessages.push({
        id: `im-${initialMessages.length}`,
        role: block.role,
        content: content.trim(),
        isInitial: true,
      });
    }
  }

  return initialMessages;
}
```

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: No errors

**Step 3: Commit**

```bash
git add src/brainstorm-prompt-builder.ts
git commit -m "feat: add brainstorm prompt builder for initial context"
```

---

### Task 4: Component — BrainstormChat

**Files:**
- Create: `src/components/BrainstormChat.tsx`

This is the main chat UI component. It renders messages, handles sending, editing/forking, regenerating, and deleting messages. All requests go through `makePlainRequest()`.

**Step 1: Create `src/components/BrainstormChat.tsx`**

```tsx
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
                        <i className="fa-solid fa-check"></i> Save & Fork
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
                  <i className="fa-solid fa-check"></i> Save & Fork
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
```

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: add BrainstormChat component"
```

---

### Task 5: Component — BrainstormSessionManager

**Files:**
- Create: `src/components/BrainstormSessionManager.tsx`

**Step 1: Create `src/components/BrainstormSessionManager.tsx`**

```tsx
import { FC, useState, useEffect, useMemo } from 'react';
import { BrainstormSession } from '../brainstorm-types.js';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { BrainstormChat } from './BrainstormChat.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { buildInitialBrainstormMessages } from '../brainstorm-prompt-builder.js';
import { st_echo } from 'sillytavern-utils-lib/config';
import { Session } from '../generate.js';

const globalContext = SillyTavern.getContext();
const BRAINSTORM_SESSIONS_KEY = 'charCreator_brainstormSessions';

interface BrainstormSessionManagerProps {
  contextToSend: ExtensionSettings['contextToSend'];
  sessionForContext: Pick<Session, 'fields' | 'draftFields' | 'selectedCharacterIndexes' | 'selectedWorldNames'>;
}

export const BrainstormSessionManager: FC<BrainstormSessionManagerProps> = ({
  contextToSend,
  sessionForContext,
}) => {
  const [allSessions, setAllSessions] = useState<BrainstormSession[]>([]);
  const [activeSession, setActiveSession] = useState<BrainstormSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionsFromStorage: BrainstormSession[] = JSON.parse(
      localStorage.getItem(BRAINSTORM_SESSIONS_KEY) || '[]',
    );
    setAllSessions(sessionsFromStorage);
    setIsLoading(false);
  }, []);

  const sortedSessions = useMemo(() => {
    return [...allSessions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [allSessions]);

  const saveAllSessions = (updatedSessions: BrainstormSession[]) => {
    localStorage.setItem(BRAINSTORM_SESSIONS_KEY, JSON.stringify(updatedSessions));
    setAllSessions(updatedSessions);
  };

  const handleCreateNewSession = async () => {
    const name = await globalContext.Popup.show.input(
      'New Brainstorm Session',
      `Brainstorm - ${new Date().toLocaleDateString()}`,
    );
    if (!name) return;

    try {
      const currentSettings = settingsManager.getSettings();
      if (!currentSettings.profileId) {
        st_echo('warning', 'Please select a connection profile in the extension settings.');
        return;
      }

      const newSession: BrainstormSession = {
        id: `bs-${Date.now()}`,
        name,
        createdAt: new Date().toISOString(),
        messages: [],
        contextConfig: {
          stDescription: contextToSend.stDescription,
          charCard: contextToSend.charCard,
          existingFields: contextToSend.existingFields,
          worldInfo: contextToSend.worldInfo,
          persona: contextToSend.persona,
          messages: contextToSend.messages,
        },
      };

      const initialMsgs = await buildInitialBrainstormMessages(
        sessionForContext.fields,
        sessionForContext.draftFields,
        currentSettings.mainContextTemplatePreset,
        contextToSend,
        sessionForContext,
      );
      newSession.messages = initialMsgs;

      setActiveSession(newSession);
    } catch (error: any) {
      console.error('Failed to create brainstorm session:', error);
      st_echo('error', `Failed to create session: ${error.message}`);
    }
  };

  const handleSelectSession = (session: BrainstormSession) => {
    setActiveSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      const updatedSessions = allSessions.filter((s) => s.id !== sessionId);
      saveAllSessions(updatedSessions);
    }
  };

  const handleSessionUpdate = (updatedSession: BrainstormSession) => {
    const index = allSessions.findIndex((s) => s.id === updatedSession.id);
    const newAllSessions = [...allSessions];
    if (index !== -1) {
      newAllSessions[index] = updatedSession;
    } else {
      newAllSessions.push(updatedSession);
    }
    saveAllSessions(newAllSessions);
    setActiveSession(updatedSession);
  };

  if (activeSession) {
    return (
      <BrainstormChat
        session={activeSession}
        onBack={() => setActiveSession(null)}
        onSessionUpdate={handleSessionUpdate}
      />
    );
  }

  return (
    <div className="brainstorm-session-manager">
      <div className="popup_header">
        <h3>Brainstorm Sessions</h3>
      </div>
      <div className="session-list">
        {isLoading ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            Loading sessions...
          </p>
        ) : sortedSessions.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No sessions found. Create a new one to get started.
          </p>
        ) : (
          sortedSessions.map((session) => (
            <div key={session.id} className="session-item">
              <div className="session-info" onClick={() => handleSelectSession(session)}>
                <span className="session-name">{session.name}</span>
                <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
              </div>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </STButton>
            </div>
          ))
        )}
      </div>
      <div className="session-actions">
        <STButton onClick={handleCreateNewSession} className="menu_button">
          <i className="fa-solid fa-plus"></i> New Session
        </STButton>
      </div>
    </div>
  );
};
```

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/BrainstormSessionManager.tsx
git commit -m "feat: add BrainstormSessionManager component"
```

---

### Task 6: Styles — Add brainstorm CSS

**Files:**
- Modify: `src/styles/main.scss` (append brainstorm-specific styles)

The brainstorm chat reuses most of the same CSS class names as the revise session chat (`chat-messages`, `message-bubble-wrapper`, `message-bubble`, `chat-input-area`, `initial-messages-container`, `message-editor`, `regenerate-button-wrapper`, etc.). These are already scoped under `.revise-session-chat`.

We need parallel styles for `.brainstorm-chat` and `.brainstorm-session-manager`. Since they're visually identical to the revise equivalents, we can extend the existing selectors.

**Step 1: Update `src/styles/main.scss`**

After the `.revise-session-manager` block (around line 379), add the brainstorm manager to share the same styles:

```scss
.brainstorm-session-manager {
    @extend .revise-session-manager;
}
```

After the `.revise-session-chat` block (around line 541), add the brainstorm chat to share the same styles:

```scss
.brainstorm-chat {
    @extend .revise-session-chat;
}
```

> **Note:** If `@extend` isn't available or causes issues with the SCSS compiler, instead change the selectors to comma-separated: `.revise-session-manager, .brainstorm-session-manager { ... }` and `.revise-session-chat, .brainstorm-chat { ... }`.

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: No errors, `dist/style.css` includes brainstorm styles

**Step 3: Commit**

```bash
git add src/styles/main.scss
git commit -m "feat: add brainstorm chat styles"
```

---

### Task 7: Integration — Add Brainstorm tab to MainPopup

**Files:**
- Modify: `src/components/MainPopup.tsx`

**Step 1: Add import for BrainstormSessionManager**

At the top of `MainPopup.tsx`, add to the imports (around line 26):

```typescript
import { BrainstormSessionManager } from './BrainstormSessionManager.js';
```

**Step 2: Update activeTab type**

Change line 95 from:
```typescript
const [activeTab, setActiveTab] = useState<'core' | 'draft'>('core');
```
to:
```typescript
const [activeTab, setActiveTab] = useState<'core' | 'draft' | 'brainstorm'>('core');
```

**Step 3: Add "Brainstorm" tab button**

In the `.tab-buttons` div (around line 899-922), after the "Draft Fields" button and before the `.right-aligned` div, add:

```tsx
<STButton
  onClick={() => setActiveTab('brainstorm')}
  className={`menu_button tab-button ${activeTab === 'brainstorm' ? 'active' : ''}`}
>
  Brainstorm
</STButton>
```

**Step 4: Add brainstorm tab content**

In the `.tab-content-area` div (around line 924-985), after the `{activeTab === 'draft' && (...)}` block and before the closing `</div>` of `tab-content-area`, add:

```tsx
{activeTab === 'brainstorm' && (
  <div className="card tab-content active">
    <BrainstormSessionManager
      contextToSend={settings.contextToSend}
      sessionForContext={{
        fields: session.fields,
        draftFields: session.draftFields,
        selectedCharacterIndexes: session.selectedCharacterIndexes,
        selectedWorldNames: session.selectedWorldNames,
      }}
    />
  </div>
)}
```

**Step 5: Verify build compiles**

Run: `npm run build`
Expected: No errors

**Step 6: Commit**

```bash
git add src/components/MainPopup.tsx
git commit -m "feat: integrate Brainstorm tab into MainPopup"
```

---

### Task 8: Build and Manual Testing

**Files:** None new — this is a verification task.

**Step 1: Run full production build**

Run: `npm run build`
Expected: Clean build, no errors, no warnings

**Step 2: Manual test checklist**

Start SillyTavern (`npm start` from ST root) and verify:

1. Open Character Creator popup
2. Verify "Brainstorm" tab appears alongside "Core Fields" and "Draft Fields"
3. Click "Brainstorm" tab — should show empty session list with "New Session" button
4. Click "New Session" — should prompt for name
5. After naming, session should open with initial context messages (collapsible)
6. Type a message and send — should get a freeform AI response
7. Edit a user message — should fork the conversation
8. Click "Regenerate" — should regenerate the last AI response
9. Delete a message — should truncate conversation
10. Click "Back" — should return to session list with the session saved
11. Click the session to reopen — should show the saved conversation
12. Delete a session — should remove it with confirmation
13. Check extension settings — "Brainstorm System Prompt" should appear in the prompts section

**Step 3: Commit build artifacts**

```bash
git add dist/
git commit -m "build: compile brainstorm chat feature"
```
