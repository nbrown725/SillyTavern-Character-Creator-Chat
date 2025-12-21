// src/types/models.ts

// Stable UUID for messages (not array index)
export interface CreatorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
  thumbnailId?: string;
  timestamp: number;
}

// Per-character saved chat
export interface SavedChat {
  id: string;
  characterId: string;    // avatar filename
  characterName: string;
  messages: CreatorMessage[];
  createdAt: number;
  updatedAt: number;
}

// Current working state
export interface WorkingSession {
  selectedCharacterIds: string[];
  selectedWorldNames: string[];
  fields: Record<string, FieldValue>;
  draftFields: Record<string, FieldValue>;
  creatorChat: CreatorChatState;
  lastLoadedCharacterId?: string;
}

export interface CreatorChatState {
  messages: CreatorMessage[];
  linkedSavedChatId?: string;
}

export interface FieldValue {
  value: string;
  prompt: string;
  label: string;
}

// Image storage
export interface StoredImage {
  id: string;
  thumbnailData: string;
  createdAt: number;
}


