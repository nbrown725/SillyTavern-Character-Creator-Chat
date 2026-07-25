import { describe, expect, test } from 'vitest';
import {
  BRAINSTORM_SESSIONS_KEY,
  CHARACTER_SESSION_KEY,
  loadBrainstormSessions,
  loadCharacterSession,
  loadReviseSessions,
  REVISE_SESSIONS_KEY,
  saveBrainstormSessions,
  saveCharacterSession,
  saveReviseSessions,
} from '../browser-storage.js';
import type { Session } from '../generate.js';
import type { ReviseSession } from '../revise-types.js';
import type { BrainstormSession } from '../brainstorm-types.js';

class MemoryLocalForage {
  private items = new Map<string, unknown>();

  constructor(private failOnSet = false) {}

  async getItem<T>(key: string): Promise<T | null> {
    return (this.items.get(key) as T | undefined) ?? null;
  }

  async setItem<T>(key: string, value: T): Promise<T> {
    if (this.failOnSet) {
      throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
    }
    this.items.set(key, value);
    return value;
  }

  async removeItem(key: string): Promise<void> {
    this.items.delete(key);
  }
}

class MemoryLegacyStorage {
  private items = new Map<string, string>();

  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.items.set(key, value);
  }

  removeItem(key: string): void {
    this.items.delete(key);
  }
}

const createSession = (): Session => ({
  selectedCharacterIndexes: ['0'],
  selectedWorldNames: ['Lore'],
  fields: { name: { label: 'Name', prompt: '', value: 'Test' } },
  draftFields: {},
  lastLoadedCharacterId: 'test.png',
});

const createReviseSession = (): ReviseSession => ({
  id: 'rs-1',
  name: 'Test session',
  type: 'global',
  createdAt: '2026-06-09T00:00:00.000Z',
  messages: [{ id: 'm-1', role: 'assistant', content: 'Done' }],
  context: { mainContextTemplatePreset: 'default' },
  profileId: 'profile-1',
  promptEngineeringMode: 'native',
});

const createBrainstormSession = (): BrainstormSession => ({
  id: 'bs-1',
  name: 'Test brainstorm',
  createdAt: '2026-06-09T00:00:00.000Z',
  saved: true,
  messages: [{ id: 'bm-1', role: 'assistant', content: 'Idea' }],
  contextConfig: {
    stDescription: true,
    charCard: true,
    existingFields: true,
    worldInfo: true,
    persona: true,
    messages: { type: 'last', last: 10 },
  },
});

describe('browser storage', () => {
  test('loads and saves Character Creator session through localforage', async () => {
    const storage = new MemoryLocalForage();
    const session = createSession();

    expect((await saveCharacterSession(session, storage)).persisted).toBe(true);
    expect((await loadCharacterSession(storage, new MemoryLegacyStorage())).value).toEqual(session);
  });

  test('migrates legacy Character Creator session from localStorage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const session = createSession();

    legacyStorage.setItem(CHARACTER_SESSION_KEY, JSON.stringify(session));

    const result = await loadCharacterSession(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.value).toEqual(session);
    expect(await storage.getItem(CHARACTER_SESSION_KEY)).toEqual(session);
    expect(legacyStorage.getItem(CHARACTER_SESSION_KEY)).toBeNull();
  });

  test('loads and saves revise sessions through localforage', async () => {
    const storage = new MemoryLocalForage();
    const sessions = [createReviseSession()];

    expect((await saveReviseSessions(sessions, storage)).persisted).toBe(true);
    expect((await loadReviseSessions(storage, new MemoryLegacyStorage())).value).toEqual(sessions);
  });

  test('migrates legacy revise sessions from localStorage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const sessions = [createReviseSession()];

    legacyStorage.setItem(REVISE_SESSIONS_KEY, JSON.stringify(sessions));

    const result = await loadReviseSessions(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.value).toEqual(sessions);
    expect(await storage.getItem(REVISE_SESSIONS_KEY)).toEqual(sessions);
    expect(legacyStorage.getItem(REVISE_SESSIONS_KEY)).toBeNull();
  });

  test('loads and saves brainstorm sessions through localforage', async () => {
    const storage = new MemoryLocalForage();
    const sessions = [createBrainstormSession()];

    expect((await saveBrainstormSessions(sessions, storage)).persisted).toBe(true);
    expect((await loadBrainstormSessions(storage, new MemoryLegacyStorage())).value).toEqual(sessions);
  });

  test('migrates legacy brainstorm sessions from localStorage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const sessions = [createBrainstormSession()];

    legacyStorage.setItem(BRAINSTORM_SESSIONS_KEY, JSON.stringify(sessions));

    const result = await loadBrainstormSessions(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.value).toEqual(sessions);
    expect(await storage.getItem(BRAINSTORM_SESSIONS_KEY)).toEqual(sessions);
    expect(legacyStorage.getItem(BRAINSTORM_SESSIONS_KEY)).toBeNull();
  });

  test('reports recovery when stored brainstorm sessions are corrupt', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();

    legacyStorage.setItem(BRAINSTORM_SESSIONS_KEY, '{not json');

    const result = await loadBrainstormSessions(storage, legacyStorage);

    expect(result.value).toBeNull();
    expect(result.recovered).toBe(true);
    expect(legacyStorage.getItem(BRAINSTORM_SESSIONS_KEY)).toBeNull();
  });

  test('does not throw when browser storage quota is exceeded', async () => {
    const storage = new MemoryLocalForage(true);

    const result = await saveReviseSessions([createReviseSession()], storage);

    expect(result.persisted).toBe(false);
    expect(result.error).toBeInstanceOf(DOMException);
  });
});
