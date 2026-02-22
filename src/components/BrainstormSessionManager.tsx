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
const MAX_UNSAVED_SESSIONS = 5;

interface BrainstormSessionManagerProps {
  contextToSend: ExtensionSettings['contextToSend'];
  sessionForContext: Pick<Session, 'fields' | 'draftFields' | 'selectedCharacterIndexes' | 'selectedWorldNames'>;
}

export const BrainstormSessionManager: FC<BrainstormSessionManagerProps> = ({ contextToSend, sessionForContext }) => {
  const [allSessions, setAllSessions] = useState<BrainstormSession[]>([]);
  const [activeSession, setActiveSession] = useState<BrainstormSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionsFromStorage: BrainstormSession[] = JSON.parse(localStorage.getItem(BRAINSTORM_SESSIONS_KEY) || '[]');
    const needsMigration = sessionsFromStorage.some((s) => s.saved === undefined);
    const migratedSessions = sessionsFromStorage.map((s) => ({
      ...s,
      saved: s.saved ?? true,
    }));
    if (needsMigration) {
      localStorage.setItem(BRAINSTORM_SESSIONS_KEY, JSON.stringify(migratedSessions));
    }
    setAllSessions(migratedSessions);
    setIsLoading(false);
  }, []);

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

  const saveAllSessions = (updatedSessions: BrainstormSession[]) => {
    localStorage.setItem(BRAINSTORM_SESSIONS_KEY, JSON.stringify(updatedSessions));
    setAllSessions(updatedSessions);
  };

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

  const handleSelectSession = (session: BrainstormSession) => {
    setActiveSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      const updatedSessions = allSessions.filter((s) => s.id !== sessionId);
      saveAllSessions(updatedSessions);
      if (activeSession?.id === sessionId) {
        setActiveSession(null);
      }
    }
  };

  const handleSaveSession = async (sessionId: string) => {
    const session = allSessions.find((s) => s.id === sessionId);
    if (!session) return;

    const newName = await globalContext.Popup.show.input('Save Session', session.name);
    if (!newName) return;

    const updatedSessions = allSessions.map((s) => (s.id === sessionId ? { ...s, saved: true, name: newName } : s));
    saveAllSessions(updatedSessions);

    // Update active session if it's the one being saved
    if (activeSession?.id === sessionId) {
      setActiveSession({ ...session, saved: true, name: newName });
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
        contextToSend={contextToSend}
        sessionForContext={sessionForContext}
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
        ) : savedSessions.length === 0 && workspaceSessions.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No sessions found. Create a new one to get started.
          </p>
        ) : (
          <>
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
};
