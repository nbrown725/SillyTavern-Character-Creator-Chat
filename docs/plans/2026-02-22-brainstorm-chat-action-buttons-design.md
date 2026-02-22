# Brainstorm Chat Action Buttons Redesign

## Problem

Message action buttons (edit, delete, regenerate) are inconsistently placed:
- User messages: edit/delete buttons to the left in a row
- Assistant messages: delete to the left, regenerate centered below chat
- No edit button for assistant messages

## Design

### Layout: Inline Top Bar

Move action buttons from beside messages to **inside the message bubble**, absolutely positioned at the **top-right corner**. Buttons appear on hover with opacity transition (existing behavior, repositioned).

### Button Configuration

| Message Type | Buttons |
|---|---|
| User chat message | Edit, Delete |
| Assistant chat message (not last) | Edit, Delete |
| Assistant chat message (last) | Edit, Regenerate, Delete |
| Initial context message | Edit, Delete |

### Assistant Message Edit

- Uses same inline editor as user messages
- Save replaces text in-place (no truncation, no regeneration)
- Simpler than user edit which forks the conversation

### Regenerate Relocation

- Remove standalone `regenerate-button-wrapper` below chat
- Add regenerate icon button to last assistant message's action bar

### Empty Send = Resend

- When input is empty and last chat message is a user message, send button is enabled
- Pressing it calls `sendRequest` with current messages to get a new assistant response
- Only works when last message is user (not when no chat messages exist)

## Files Modified

- `src/components/BrainstormChat.tsx` - JSX structure, handlers, send logic
- `src/styles/main.scss` - Button positioning, hover behavior
