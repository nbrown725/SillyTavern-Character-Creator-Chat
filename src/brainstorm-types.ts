import { ContextToSend } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export interface BrainstormMessage extends Message {
  id: string;
  isInitial?: boolean;
}

export interface BrainstormSession {
  id: string;
  name: string;
  createdAt: string;
  messages: BrainstormMessage[];
  contextConfig: Pick<ContextToSend, 'stDescription' | 'charCard' | 'existingFields' | 'worldInfo' | 'persona' | 'messages'>;
}
