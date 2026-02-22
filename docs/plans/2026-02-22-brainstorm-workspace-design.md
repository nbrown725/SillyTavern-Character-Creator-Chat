# Brainstorm Session Workspace Design

## Problem

Brainstorm sessions are global, auto-named with creation dates, and all persist indefinitely. This leads to clutter as sessions accumulate, making it hard to find sessions you actually care about.

## Solution: Active Workspace + Save

Sessions are unsaved by default and live in a "Workspace." A cap of 5 unsaved sessions prevents unbounded growth — when exceeded, the oldest unsaved session is removed. Users can explicitly save sessions they want to keep permanently, at which point they provide a custom name. Saved sessions live in a separate section and are never auto-removed.

## Data Model

Add a `saved` boolean field to `BrainstormSession`:

```typescript
interface BrainstormSession {
  id: string;
  name: string;
  createdAt: string;
  messages: BrainstormMessage[];
  contextConfig: { ... };
  saved: boolean;  // NEW — false by default
}
```

- Unsaved sessions (`saved: false`): Auto-named with date format, subject to the 5-session cap.
- Saved sessions (`saved: true`): User-provided name, never auto-removed.

### Migration

Pre-existing sessions without the `saved` field are treated as saved (`saved: undefined` → `true`) to prevent surprise data loss on upgrade.

## UI Layout

The session list splits into two sections:

- **Saved section** (top): Only shown when saved sessions exist. Shows user-provided names. Each session has a delete button.
- **Workspace section** (below): Shows unsaved sessions, newest first, with auto-generated date names. Each session has a save button and a delete button.

The "New Session" button remains at the bottom. Click-to-open behavior is unchanged.

## Save Flow

1. User clicks save button on a workspace session.
2. A dialog prompts for a session name, pre-filled with the current auto-generated name.
3. User confirms — session's `saved` is set to `true`, `name` is updated.
4. Session moves from Workspace to Saved section.

No "unsave" action. To remove a saved session, delete it.

## Cap Enforcement

On `handleCreateNewSession()`:

1. Count sessions where `saved === false`.
2. If count >= 5, remove the oldest unsaved session (by `createdAt`).
3. Create the new session.

Edge case: if the removed session is the active session, clear the active view back to the session list.

## Files to Modify

- `src/brainstorm-types.ts` — Add `saved` field to `BrainstormSession`
- `src/components/BrainstormSessionManager.tsx` — Split list into sections, add save button, cap enforcement, save dialog, migration logic
- Extension CSS — Styling for the two sections and save button
