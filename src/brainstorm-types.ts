import { ContextToSend } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export interface ImageAttachment {
  url: string;
  name: string;
  mediaType?: 'image' | 'video';
}

export interface BrainstormMessage extends Message {
  id: string;
  isInitial?: boolean;
  images?: ImageAttachment[];
}

export interface BrainstormSession {
  id: string;
  name: string;
  createdAt: string;
  saved: boolean;
  messages: BrainstormMessage[];
  contextConfig: Pick<
    ContextToSend,
    'stDescription' | 'charCard' | 'existingFields' | 'worldInfo' | 'persona' | 'messages'
  >;
}
