# Brainstorm Workspace Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add "Active Workspace + Save" session management to brainstorm chat so sessions are ephemeral by default with an explicit save action for persistence.

**Architecture:** Add a `saved` boolean to `BrainstormSession`. Split the session list UI into "Saved" and "Workspace" sections. Enforce a cap of 5 unsaved sessions, auto-removing the oldest when exceeded. Use `Popup.show.input` for the save-name dialog.

**Tech Stack:** TypeScript, React 19, SCSS, SillyTavern Popup API

---

### Task 1: Add `saved` field to BrainstormSession type

**Files:**
- Modify: `src/brainstorm-types.ts:9-15`

**Step 1: Add the field**

In `src/brainstorm-types.ts`, add `saved` to the `BrainstormSession` interface:

```typescript
export interface BrainstormSession {
  id: string;
  name: string;
  createdAt: string;
  messages: BrainstormMessage[];
  contextConfig: Pick<ContextToSend, 'stDescription' | 'charCard' | 'existingFields' | 'worldInfo' | 'persona' | 'messages'>;
  saved: boolean;
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds (will have errors in BrainstormSessionManager since we haven't updated it yet — that's fine, we'll fix in the next task).

**Step 3: Commit**

```bash
git add src/brainstorm-types.ts
git commit -m "feat: add saved field to BrainstormSession type"
```

---

### Task 2: Add migration logic and update session creation

**Files:**
- Modify: `src/components/BrainstormSessionManager.tsx:26-31` (loading/migration)
- Modify: `src/components/BrainstormSessionManager.tsx:43-83` (creation with cap enforcement)

**Step 1: Add migration on load**

In the `useEffect` that loads sessions from localStorage (lines 26-32), add migration logic. Sessions without a `saved` field (pre-existing) should be treated as saved:

```typescript
useEffect(() => {
  const sessionsFromStorage: BrainstormSession[] = JSON.parse(
    localStorage.getItem(BRAINSTORM_SESSIONS_KEY) || '[]',
  );
  const migratedSessions = sessionsFromStorage.map((s) => ({
    ...s,
    saved: s.saved ?? true,
  }));
  setAllSessions(migratedSessions);
  setIsLoading(false);
}, []);
```

**Step 2: Add cap enforcement constant**

Add at the top of the file, after the `BRAINSTORM_SESSIONS_KEY` constant:

```typescript
const MAX_UNSAVED_SESSIONS = 5;
```

**Step 3: Update `handleCreateNewSession` to set `saved: false` and enforce cap**

Update the session creation in `handleCreateNewSession` (lines 43-83). The new session should have `saved: false`. Before adding it, enforce the cap by removing the oldest unsaved session if needed:

```typescript
const handleCreateNewSession = async () => {
  const name = `Brainstorm - ${new Date().toLocaleString()}`;

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
      saved: false,
    };

    const initialMsgs = await buildInitialBrainstormMessages(
      sessionForContext.fields,
      sessionForContext.draftFields,
      currentSettings.mainContextTemplatePreset,
      contextToSend,
      sessionForContext,
    );
    newSession.messages = initialMsgs;

    let updatedSessions = [...allSessions];

    // Enforce cap: remove oldest unsaved session if at limit
    const unsavedSessions = updatedSessions
      .filter((s) => !s.saved)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    if (unsavedSessions.length >= MAX_UNSAVED_SESSIONS) {
      const oldestUnsaved = unsavedSessions[0];
      updatedSessions = updatedSessions.filter((s) => s.id !== oldestUnsaved.id);
      // If the removed session was the active session, clear active view
      if (activeSession?.id === oldestUnsaved.id) {
        setActiveSession(null);
      }
    }

    updatedSessions.push(newSession);
    saveAllSessions(updatedSessions);
    setActiveSession(newSession);
  } catch (error: any) {
    console.error('Failed to create brainstorm session:', error);
    st_echo('error', `Failed to create session: ${error.message}`);
  }
};
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/components/BrainstormSessionManager.tsx
git commit -m "feat: add migration logic and cap enforcement for brainstorm sessions"
```

---

### Task 3: Add save handler

**Files:**
- Modify: `src/components/BrainstormSessionManager.tsx`

**Step 1: Add `handleSaveSession` function**

Add after `handleDeleteSession` (around line 95):

```typescript
const handleSaveSession = async (sessionId: string) => {
  const session = allSessions.find((s) => s.id === sessionId);
  if (!session) return;

  const newName = await globalContext.Popup.show.input('Save Session', session.name);
  if (!newName) return;

  const updatedSessions = allSessions.map((s) =>
    s.id === sessionId ? { ...s, saved: true, name: newName } : s,
  );
  saveAllSessions(updatedSessions);

  // Update active session if it's the one being saved
  if (activeSession?.id === sessionId) {
    setActiveSession({ ...session, saved: true, name: newName });
  }
};
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/BrainstormSessionManager.tsx
git commit -m "feat: add save session handler with name input dialog"
```

---

### Task 4: Split session list into Saved and Workspace sections

**Files:**
- Modify: `src/components/BrainstormSessionManager.tsx:119-154` (render section)

**Step 1: Replace `sortedSessions` memo with two filtered memos**

Replace the existing `sortedSessions` memo (lines 34-36) with:

```typescript
const savedSessions = useMemo(() => {
  return allSessions
    .filter((s) => s.saved)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}, [allSessions]);

const workspaceSessions = useMemo(() => {
  return allSessions
    .filter((s) => !s.saved)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}, [allSessions]);
```

**Step 2: Update the render to show two sections**

Replace the session list rendering (lines 119-153) with:

```tsx
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
      ) : savedSessions.length === 0 && workspaceSessions.length === 0 ? (
        <p className="subtle" style={{ textAlign: 'center' }}>
          No sessions found. Create a new one to get started.
        </p>
      ) : (
        <>
          {savedSessions.length > 0 && (
            <div className="session-section">
              <h4 className="session-section-header">
                <i className="fa-solid fa-bookmark"></i> Saved
              </h4>
              {savedSessions.map((session) => (
                <div key={session.id} className="session-item">
                  <div className="session-info" onClick={() => handleSelectSession(session)}>
                    <span className="session-name">{session.name}</span>
                    <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
                  </div>
                  <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </STButton>
                </div>
              ))}
            </div>
          )}
          {workspaceSessions.length > 0 && (
            <div className="session-section">
              <h4 className="session-section-header">
                <i className="fa-solid fa-clock"></i> Workspace
              </h4>
              {workspaceSessions.map((session) => (
                <div key={session.id} className="session-item">
                  <div className="session-info" onClick={() => handleSelectSession(session)}>
                    <span className="session-name">{session.name}</span>
                    <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="session-item-actions">
                    <STButton className="menu_button" onClick={() => handleSaveSession(session.id)}>
                      <i className="fa-solid fa-floppy-disk"></i>
                    </STButton>
                    <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </STButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
    <div className="session-actions">
      <STButton onClick={handleCreateNewSession} className="menu_button">
        <i className="fa-solid fa-plus"></i> New Session
      </STButton>
    </div>
  </div>
);
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/BrainstormSessionManager.tsx
git commit -m "feat: split brainstorm session list into Saved and Workspace sections"
```

---

### Task 5: Add styling for the new sections

**Files:**
- Modify: `src/styles/main.scss:327-380` (session manager styles)

**Step 1: Add styles for section headers and item actions**

Inside the `.revise-session-manager, .brainstorm-session-manager` block (after the `.session-list` styles, around line 342), add:

```scss
    .session-section {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    .session-section-header {
        margin: 0;
        font-size: 0.85em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--SmartThemeEmColor);
        display: flex;
        align-items: center;
        gap: 6px;

        i {
            font-size: 0.9em;
        }
    }

    .session-item-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
    }
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds, styles compile.

**Step 3: Commit**

```bash
git add src/styles/main.scss
git commit -m "feat: add styles for brainstorm session sections"
```

---

### Task 6: Manual testing

**Step 1: Start the dev server**

Run: `npm run dev`

**Step 2: Test migration**

If you have existing brainstorm sessions, verify they appear in the "Saved" section after the update.

**Step 3: Test new session creation**

Create a new brainstorm session. Verify it appears in the "Workspace" section with the auto-generated date name.

**Step 4: Test save flow**

Click the save (floppy disk) button on a workspace session. Verify:
- Input dialog appears pre-filled with the current name
- After entering a name and confirming, the session moves to the "Saved" section
- The session name updates to what you entered

**Step 5: Test cap enforcement**

Create 6 unsaved sessions. Verify that when the 6th is created, the oldest unsaved session is automatically removed, keeping the workspace at 5 sessions max. Saved sessions should not be affected.

**Step 6: Test delete**

Delete sessions from both sections. Verify the confirmation dialog appears and the session is removed.

**Step 7: Commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: adjustments from manual testing"
```
