import {
  WorkingSession,
  FieldValue,
  CreatorMessage,
  CreatorChatState,
  SavedChat,
} from '../types/models.js';
import { CreatorChatMessage } from '../types.js';
import { StorageService } from './storageService.js';
import { generateMessageId, generateChatId } from '../utils/uuid.js';
import { CHARACTER_FIELDS, CHARACTER_LABELS } from '../generate.js';

export class SessionService {
  private static instance: SessionService;
  private storageService: StorageService;
  private session: WorkingSession | null = null;
  private saveDebounceTimer: any = null;

  static getInstance(): SessionService {
    if (!SessionService.instance) {
      SessionService.instance = new SessionService();
    }
    return SessionService.instance;
  }

  private constructor() {
    this.storageService = StorageService.getInstance();
  }

  /**
   * Initialize with async loading and migration
   */
  async initialize(): Promise<void> {
    await this.storageService.initialize();

    // Try migration first
    await this.storageService.migrateFromLocalStorage();

    // Load session
    this.session = await this.storageService.getSession();
    if (!this.session) {
      this.session = this.createDefaultSession();
      await this.saveSessionNow();
    } else {
      this.ensureSessionIntegrity();
    }
  }

  private createDefaultSession(): WorkingSession {
    const fields: Record<string, FieldValue> = {};
    CHARACTER_FIELDS.forEach((field) => {
      fields[field] = {
        value: '',
        prompt: '',
        label: CHARACTER_LABELS[field],
      };
    });

    return {
      selectedCharacterIds: [],
      selectedWorldNames: [],
      fields,
      draftFields: {},
      creatorChat: { messages: [] },
      lastLoadedCharacterId: '',
    };
  }

  private ensureSessionIntegrity(): void {
    if (!this.session) return;

    if (!this.session.selectedCharacterIds) this.session.selectedCharacterIds = [];
    if (!this.session.selectedWorldNames) this.session.selectedWorldNames = [];
    if (!this.session.fields) this.session.fields = {};
    if (!this.session.draftFields) this.session.draftFields = {};
    if (!this.session.creatorChat) this.session.creatorChat = { messages: [] };
    if (!this.session.creatorChat.messages) this.session.creatorChat.messages = [];

    // Ensure all core fields exist
    CHARACTER_FIELDS.forEach((field) => {
      if (!this.session!.fields[field]) {
        this.session!.fields[field] = {
          value: '',
          prompt: '',
          label: CHARACTER_LABELS[field],
        };
      }
    });
  }

  private debouncedSave(): void {
    if (this.saveDebounceTimer) {
      clearTimeout(this.saveDebounceTimer);
    }
    this.saveDebounceTimer = setTimeout(() => {
      this.saveSessionNow();
    }, 500);
  }

  async saveSessionNow(): Promise<void> {
    if (this.session) {
      await this.storageService.saveSession(this.session);
    }
  }

  getSession(): WorkingSession {
    if (!this.session) {
      throw new Error('SessionService not initialized. Call initialize() first.');
    }
    return this.session;
  }

  updateSession(updates: Partial<WorkingSession>): void {
    if (!this.session) return;
    this.session = { ...this.session, ...updates };
    this.debouncedSave();
  }

  // Field operations
  updateField(fieldName: string, updates: Partial<FieldValue>): void {
    if (!this.session) return;
    if (!this.session.fields[fieldName]) {
      this.session.fields[fieldName] = { value: '', prompt: '', label: fieldName };
    }
    this.session.fields[fieldName] = { ...this.session.fields[fieldName], ...updates };
    this.debouncedSave();
  }

  updateDraftField(fieldName: string, updates: Partial<FieldValue>): void {
    if (!this.session) return;
    if (!this.session.draftFields[fieldName]) {
      this.session.draftFields[fieldName] = { value: '', prompt: '', label: fieldName };
    }
    this.session.draftFields[fieldName] = { ...this.session.draftFields[fieldName], ...updates };
    this.debouncedSave();
  }

  deleteDraftField(fieldName: string): void {
    if (!this.session) return;
    delete this.session.draftFields[fieldName];
    this.debouncedSave();
  }

  // Message operations
  addChatMessage(message: Omit<CreatorMessage, 'id' | 'timestamp'>): string {
    if (!this.session) return '';
    const newMessage: CreatorMessage = {
      ...message,
      id: generateMessageId(),
      timestamp: Date.now(),
    };
    this.session.creatorChat.messages.push(newMessage);
    this.debouncedSave();
    return newMessage.id;
  }

  getMessageById(id: string): CreatorMessage | undefined {
    return this.session?.creatorChat.messages.find((m) => m.id === id);
  }

  /**
   * Convert a CreatorMessage to a format suitable for AI context (including images)
   */
  getMessageForAIContext(message: CreatorMessage): CreatorChatMessage {
    if (message.imageUrl) {
      return {
        role: message.role,
        content: [
          { type: 'text', text: message.content },
          {
            type: 'image_url',
            image_url: {
              url: message.imageUrl,
              detail: 'auto',
            },
          },
        ],
      };
    }
    return { role: message.role, content: message.content };
  }

  updateMessage(id: string, updates: Partial<CreatorMessage>): void {
    if (!this.session) return;
    const index = this.session.creatorChat.messages.findIndex((m) => m.id === id);
    if (index !== -1) {
      this.session.creatorChat.messages[index] = { ...this.session.creatorChat.messages[index], ...updates };
      this.debouncedSave();
    }
  }

  deleteMessage(id: string): void {
    if (!this.session) return;
    const index = this.session.creatorChat.messages.findIndex((m) => m.id === id);
    if (index !== -1) {
      this.session.creatorChat.messages.splice(index, 1);
      this.debouncedSave();
    }
  }

  clearChatHistory(): void {
    if (!this.session) return;
    this.session.creatorChat.messages = [];
    this.debouncedSave();
  }

  // Chat persistence operations
  async saveCurrentChat(characterId: string, characterName: string): Promise<SavedChat> {
    if (!this.session) throw new Error('No active session');

    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
    const chatName = `${characterName} - ${timestamp}`;

    const savedChat: SavedChat = {
      id: generateChatId(),
      characterId,
      characterName: chatName,
      messages: [...this.session.creatorChat.messages],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await this.storageService.saveChat(savedChat);
    this.session.creatorChat.linkedSavedChatId = savedChat.id;
    this.debouncedSave();

    return savedChat;
  }

  async loadSavedChat(chatId: string): Promise<void> {
    if (!this.session) throw new Error('No active session');

    const chat = await this.storageService.getChat(chatId);
    if (!chat) throw new Error('Chat not found');

    this.session.creatorChat = {
      messages: [...chat.messages],
      linkedSavedChatId: chat.id,
    };
    this.debouncedSave();
  }

  async listSavedChats(characterId: string): Promise<SavedChat[]> {
    return this.storageService.listChatsForCharacter(characterId);
  }

  async deleteSavedChat(chatId: string): Promise<void> {
    if (!this.session) return;

    await this.storageService.deleteChat(chatId);
    if (this.session.creatorChat.linkedSavedChatId === chatId) {
      this.session.creatorChat.linkedSavedChatId = undefined;
      this.debouncedSave();
    }
  }

  // Legacy/Compatibility helpers
  getChatMessagesForUI(): CreatorMessage[] {
    return this.session?.creatorChat.messages || [];
  }

  async storeImageThumbnail(imageUrl: string, thumbnailData: string): Promise<string> {
    const id = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await this.storageService.storeImage(id, thumbnailData);
    return id;
  }

  async getImageThumbnail(id: string): Promise<string | null> {
    return await this.storageService.getImage(id);
  }

  async resetSession(): Promise<void> {
    this.session = this.createDefaultSession();
    await this.saveSessionNow();
  }
}
