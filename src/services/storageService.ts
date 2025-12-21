import {
  WorkingSession,
  SavedChat,
  CreatorMessage,
  FieldValue,
  CreatorChatState,
} from '../types/models.js';
import { generateMessageId } from '../utils/uuid.js';

const DB_NAME = 'CharacterCreatorChat';
const DB_VERSION = 1;

const STORES = {
  WORKING_SESSION: 'workingSession',
  SAVED_CHATS: 'savedChats',
  IMAGES: 'imageThumbnails',
} as const;

export class StorageService {
  private db: IDBDatabase | null = null;
  private static instance: StorageService;

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  private constructor() {}

  async initialize(): Promise<void> {
    if (this.db) return;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains(STORES.WORKING_SESSION)) {
          db.createObjectStore(STORES.WORKING_SESSION, { keyPath: 'id' });
        }

        if (!db.objectStoreNames.contains(STORES.SAVED_CHATS)) {
          const savedChatsStore = db.createObjectStore(STORES.SAVED_CHATS, { keyPath: 'id' });
          savedChatsStore.createIndex('characterId', 'characterId', { unique: false });
          savedChatsStore.createIndex('updatedAt', 'updatedAt', { unique: false });
        }

        if (!db.objectStoreNames.contains(STORES.IMAGES)) {
          db.createObjectStore(STORES.IMAGES, { keyPath: 'id' });
        }
      };
    });
  }

  // Working Session
  async getSession(): Promise<WorkingSession | null> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.WORKING_SESSION, 'readonly');
      const store = transaction.objectStore(STORES.WORKING_SESSION);
      const request = store.get('current');

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async saveSession(session: WorkingSession): Promise<void> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.WORKING_SESSION, 'readwrite');
      const store = transaction.objectStore(STORES.WORKING_SESSION);
      const request = store.put({ ...session, id: 'current' });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  // Saved Chats
  async saveChat(chat: SavedChat): Promise<void> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.SAVED_CHATS, 'readwrite');
      const store = transaction.objectStore(STORES.SAVED_CHATS);
      const request = store.put(chat);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getChat(chatId: string): Promise<SavedChat | null> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.SAVED_CHATS, 'readonly');
      const store = transaction.objectStore(STORES.SAVED_CHATS);
      const request = store.get(chatId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async listChatsForCharacter(characterId: string): Promise<SavedChat[]> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.SAVED_CHATS, 'readonly');
      const store = transaction.objectStore(STORES.SAVED_CHATS);
      const index = store.index('characterId');
      const request = index.getAll(characterId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async deleteChat(chatId: string): Promise<void> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.SAVED_CHATS, 'readwrite');
      const store = transaction.objectStore(STORES.SAVED_CHATS);
      const request = store.delete(chatId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getAllSavedChats(): Promise<SavedChat[]> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.SAVED_CHATS, 'readonly');
      const store = transaction.objectStore(STORES.SAVED_CHATS);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  // Images
  async storeImage(id: string, thumbnailData: string): Promise<void> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.IMAGES, 'readwrite');
      const store = transaction.objectStore(STORES.IMAGES);
      const request = store.put({ id, thumbnailData, createdAt: Date.now() });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getImage(id: string): Promise<string | null> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.IMAGES, 'readonly');
      const store = transaction.objectStore(STORES.IMAGES);
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result?.thumbnailData || null);
    });
  }

  async deleteImage(id: string): Promise<void> {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(STORES.IMAGES, 'readwrite');
      const store = transaction.objectStore(STORES.IMAGES);
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  // Migration
  async migrateFromLocalStorage(): Promise<boolean> {
    const OLD_KEY = 'charCreator';
    const oldData = localStorage.getItem(OLD_KEY);

    if (!oldData) return false;
    if (localStorage.getItem(`${OLD_KEY}_migrated`) === 'true') return false;

    try {
      const parsed = JSON.parse(oldData);

      // Helper to extract text and image from old content format
      const extractText = (content: any): string => {
        if (typeof content === 'string') return content;
        if (Array.isArray(content)) {
          return content
            .filter((p: any) => p.type === 'text')
            .map((p: any) => p.text)
            .join('');
        }
        return '';
      };

      const extractImageUrl = (content: any): string | undefined => {
        if (Array.isArray(content)) {
          const part = content.find((p: any) => p.type === 'image_url');
          return part?.image_url?.url;
        }
        return undefined;
      };

      // Convert old messages to new format with UUIDs
      const messages: CreatorMessage[] = (parsed.creatorChatHistory?.messages || []).map(
        (msg: any, index: number) => ({
          id: generateMessageId(),
          role: msg.role,
          content: extractText(msg.content),
          imageUrl: extractImageUrl(msg.content),
          timestamp: Date.now() - 1000 * (parsed.creatorChatHistory.messages.length - index),
        }),
      );

      // Build new session
      const session: WorkingSession = {
        selectedCharacterIds: parsed.selectedCharacterIndexes || [],
        selectedWorldNames: parsed.selectedWorldNames || [],
        fields: parsed.fields || {},
        draftFields: parsed.draftFields || {},
        creatorChat: { messages },
        lastLoadedCharacterId: parsed.lastLoadedCharacterId,
      };

      // Migrate images
      if (parsed.imageThumbnails) {
        for (const [id, data] of Object.entries(parsed.imageThumbnails)) {
          await this.storeImage(id, data as string);
        }
      }

      await this.saveSession(session);

      // Mark as migrated
      localStorage.setItem(`${OLD_KEY}_migrated`, 'true');

      return true;
    } catch (error) {
      console.error('Migration failed:', error);
      return false;
    }
  }
}


