# Brainstorm Chat Action Buttons Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move message action buttons inside message bubbles as a hover top-bar, add assistant message editing, relocate regenerate to last assistant message, and enable empty-send-as-resend.

**Architecture:** All changes are in two files — `BrainstormChat.tsx` (JSX + handlers) and `main.scss` (positioning + hover). Actions move from siblings of `.message-bubble` to children inside it, absolutely positioned top-right. Initial context messages are unchanged.

**Tech Stack:** React 19, TypeScript, SCSS, Vite build

---

### Task 1: Update handleSaveEdit to support assistant in-place edit

**Files:**
- Modify: `src/components/BrainstormChat.tsx:120-144`

**Step 1: Modify handleSaveEdit to branch on role**

Replace lines 120-144 with:

```tsx
const handleSaveEdit = async () => {
  if (!editingMessageId) return;

  const messageIndex = messages.findIndex((m) => m.id === editingMessageId);
  if (messageIndex === -1) return;

  const editedMessage = messages[messageIndex];

  if (editedMessage.role === 'assistant') {
    const updatedMessages = messages.map((m) =>
      m.id === editingMessageId ? { ...m, content: editingContent } : m,
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
  const editedMsg = { ...messages[messageIndex], content: editingContent };
  const messagesForRequest = [...truncatedMessages, editedMsg];

  handleCancelEdit();

  sendRequest(
    messagesForRequest,
    () => setMessages(messagesForRequest),
    () => setMessages(previousMessages),
  );
};
```

**Step 2: Build to verify**

Run: `cd public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: support in-place edit for assistant messages"
```

---

### Task 2: Update handleSendMessage for empty-send resend

**Files:**
- Modify: `src/components/BrainstormChat.tsx:78-90`

**Step 1: Modify handleSendMessage to support resend**

Replace lines 78-90 with:

```tsx
const handleSendMessage = useCallback(async () => {
  if (isLoading) return;

  const chatMsgsLocal = messages.filter((m) => !m.isInitial);
  const lastChatMsg = chatMsgsLocal[chatMsgsLocal.length - 1];
  const canResend = lastChatMsg?.role === 'user';

  if (!userInput.trim() && !canResend) return;

  if (!userInput.trim() && canResend) {
    const previousMessages = messages;
    await sendRequest(
      messages,
      () => {},
      () => setMessages(previousMessages),
    );
    return;
  }

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
```

**Step 2: Build to verify**

Run: `cd public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`

**Step 3: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: enable empty send as resend when last message is user"
```

---

### Task 3: Restructure chat message JSX — move actions inside bubble

**Files:**
- Modify: `src/components/BrainstormChat.tsx:237-284` (chatMsgs rendering + regenerate button)

**Step 1: Compute lastAssistantMsgId and canResend before the return statement**

Add after line 178 (`const chatMsgs = ...`):

```tsx
const lastAssistantMsgId = chatMsgs.filter((m) => m.role === 'assistant').at(-1)?.id;
const lastChatMsg = chatMsgs[chatMsgs.length - 1];
const canResend = !!(lastChatMsg && lastChatMsg.role === 'user');
```

**Step 2: Replace the chatMsgs.map block (lines 237-284)**

Replace lines 237-284 (from `{chatMsgs.map((msg) =>` through the regenerate button wrapper closing `)}`) with:

```tsx
{chatMsgs.map((msg) => {
  const isLastAssistant = msg.role === 'assistant' && msg.id === lastAssistantMsgId;
  const editingThis = editingMessageId === msg.id;

  return editingThis ? (
    <div key={msg.id} className="message-editor">
      <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={3} />
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
        <div className="message-content">{msg.content}</div>
      </div>
    </div>
  );
})}
```

This removes the standalone regenerate button wrapper entirely.

**Step 3: Update send button disabled condition (line 311)**

Replace:
```tsx
<STButton onClick={handleSendMessage} disabled={isLoading || !userInput.trim() || !!editingMessageId}>
```

With:
```tsx
<STButton onClick={handleSendMessage} disabled={isLoading || !!editingMessageId || (!userInput.trim() && !canResend)}>
```

**Step 4: Build to verify**

Run: `cd public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`

**Step 5: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: move action buttons inside message bubbles, add regenerate to last assistant msg"
```

---

### Task 4: Update SCSS — position actions inside bubbles

**Files:**
- Modify: `src/styles/main.scss:452-543`

**Step 1: Update `.message-bubble-wrapper` styles (lines 452-495)**

Replace lines 452-495 with:

```scss
.message-bubble-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  &.user {
    justify-content: flex-end;
  }

  &.assistant {
    justify-content: flex-start;
  }

  &.initial-context {
    justify-content: space-between;
    align-items: flex-start;

    .message-actions {
      display: flex;
      gap: 5px;
      flex-shrink: 0;
    }

    .message-action-button {
      padding: 5px;
      height: 28px;
      width: 28px;
      flex-shrink: 0;
      opacity: 0;
      transition: opacity 0.2s;
      background: var(--black30a);
    }

    &:hover .message-action-button {
      opacity: 1;
    }
  }
}
```

**Step 2: Add `position: relative` and action styles to `.message-bubble` (lines 497-537)**

Replace lines 497-537 with:

```scss
.message-bubble {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 18px;
  word-wrap: break-word;
  white-space: pre-wrap;
  position: relative;

  .message-actions {
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .message-actions {
    opacity: 1;
  }

  .message-action-button {
    padding: 4px;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
    background: var(--black30a);
    border-radius: 4px;
  }

  &.user {
    background-color: var(--SmartThemeUserMesBlurTintColor);
    color: var(--white100);
    border-bottom-right-radius: 4px;
  }

  &.assistant {
    background-color: var(--SmartThemeBotMesBlurTintColor);
    color: var(--SmartThemeBodyColor);
    border-bottom-left-radius: 4px;
  }

  &.initial {
    font-size: 0.9em;
    border-radius: 8px;
    max-width: 100%;
    flex-grow: 1;

    &.system {
      background-color: var(--SmartThemeBotMesBlurTintColor);
      color: var(--SmartThemeEmColor);
    }

    &.user {
      background-color: var(--SmartThemeUserMesBlurTintColor);
      color: var(--SmartThemeBodyColor);
    }
  }

  &.loading {
    text-align: center;
    padding: 15px;
  }
}
```

**Step 3: Remove `.regenerate-button-wrapper` styles (lines 539-543)**

Delete:
```scss
.regenerate-button-wrapper {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}
```

**Step 4: Build to verify**

Run: `cd public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`

**Step 5: Commit**

```bash
git add src/styles/main.scss
git commit -m "style: position action buttons inside message bubbles"
```

---

### Task 5: Manual testing

**Checklist:**
- [ ] Hover over a user message — edit and delete buttons appear top-right inside bubble
- [ ] Hover over an assistant message — edit and delete buttons appear (regenerate on last one only)
- [ ] Click edit on user message — editor shows "Save & Fork" button, truncates on save
- [ ] Click edit on assistant message — editor shows "Save" button, saves in-place without truncation
- [ ] Click regenerate on last assistant message — regenerates response
- [ ] Delete the last assistant message, then press send with empty input — resends and gets new response
- [ ] Delete assistant message, type new text, send — sends new user message normally
- [ ] Initial context messages still show edit/delete to the right of bubble on hover (unchanged)
- [ ] Buttons hidden when loading (spinner visible)
