# Brainstorm Chat Feature Design

## Overview

Add a first-class brainstorming chat feature to the Character Creator extension. This is a freeform conversation board for character design ideation — fully independent from the existing Revise Sessions feature. No structured parsing, no automatic field updates. Users manually apply ideas they develop in the brainstorm to character fields.

## Data Model

### BrainstormMessage

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique ID (e.g., `bm-${Date.now()}`) |
| `role` | `'user' \| 'assistant' \| 'system'` | Message role |
| `content` | `string` | Message text |
| `isInitial` | `boolean?` | Whether this is part of the initial context |

### BrainstormSession

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique ID (e.g., `bs-${Date.now()}`) |
| `name` | `string` | User-provided session name |
| `createdAt` | `string` | ISO timestamp |
| `messages` | `BrainstormMessage[]` | Full conversation history |
| `contextConfig` | `object` | Snapshot of which context sources were included |

`contextConfig` mirrors the shape of `ContextToSend`: `stDescription`, `charCard`, `existingFields`, `worldInfo`, `persona`, `messages`.

## Components

### BrainstormSessionManager.tsx

- **Session list view**: All brainstorm sessions sorted by creation date (newest first)
- **Actions**: Create new session, delete session (with confirmation)
- **Create flow**: Prompt for session name, capture current `contextToSend` config, build initial context messages using existing Handlebars infrastructure, open chat
- **Active session**: When selected, renders `BrainstormChat`
- **Persistence**: `localStorage` key `charCreator_brainstormSessions`

### BrainstormChat.tsx

- **Header**: Session name, "Back" button
- **Initial context**: Collapsible section showing system messages
- **Message list**: User and assistant messages
- **Input area**: Textarea + Send button
- **Message actions**:
  - Edit user messages (forks conversation — truncates and resends)
  - Regenerate last AI response
  - Delete messages from the end
- **Request flow**: Full message history sent via `makePlainRequest()` using extension's default `profileId`
- **Loading state**: Spinner while waiting for response
- **AbortController**: Cancel button for in-flight requests

## Context Building

At session creation, context is assembled based on the extension's current `contextToSend` settings:

1. Brainstorm system prompt (always — configurable Handlebars template)
2. ST description (if `stDescription` enabled)
3. Character card definitions (if `charCard` enabled)
4. Existing field values (if `existingFields` enabled)
5. World info/lorebooks (if `worldInfo` enabled)
6. Persona description (if `persona` enabled)
7. Chat history (if messages config is not `none`)

These become `isInitial: true` messages in the session.

At send time, the full message array (initial context + conversation) is sent to `makePlainRequest()`.

## UI Integration

New "Brainstorm" tab in the main popup, alongside "Core Fields" and "Draft Fields".

```
+--------------+-------------+-------------+
| Core Fields  | Draft Fields| Brainstorm  |
+--------------+-------------+-------------+
```

- `activeTab` type changes from `'core' | 'draft'` to `'core' | 'draft' | 'brainstorm'`
- Brainstorm tab renders `BrainstormSessionManager` inline (not as a popup overlay)
- No new state needed in `MainPopup` beyond the tab change

## Settings Changes

### New prompt template

- Key: `brainstormSystemPrompt`
- Added to `ExtensionSettings.prompts`
- Added to `SystemPromptKey` union and `SYSTEM_PROMPT_KEYS` array
- Default in `constants.ts`:

```
You are a creative writing assistant helping brainstorm and design a character.
Engage in freeform discussion about character concepts, personality traits,
backstory ideas, world-building, and narrative design. Be collaborative,
offer suggestions, and help refine ideas through conversation.
```

### Migration

- Bump format version from `F_1.9` to `F_1.10`
- Migration adds `brainstormSystemPrompt` with `isDefault: true`

### No other settings changes

- Uses extension-level `contextToSend` for context configuration
- Uses extension-level `profileId` for connection profile

## Persistence

- `localStorage` key: `charCreator_brainstormSessions`
- Stores: `BrainstormSession[]`
- Same pattern as `charCreator_reviseSessions`

## Decisions

- **Fully independent from Revise Sessions**: No structured parsing, no Zod schemas, no state snapshots, no auto-apply
- **Independent component (Approach 1)**: New standalone components, no refactoring of existing ReviseSessionChat
- **Inline tab**: Lives in the main popup as a tab, not a separate popup overlay
- **Extension default profile**: Uses `settings.profileId`, no per-session profile selection
- **Configurable system prompt**: Handlebars template in settings, not hardcoded
- **Multiple sessions**: Users can create, name, switch between, and delete sessions
- **Full editing**: Edit/fork, regenerate, delete — same capabilities as revise chat
