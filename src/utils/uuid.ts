export function generateId(): string {
  return crypto.randomUUID();
}

export function generateMessageId(): string {
  return `msg_${generateId()}`;
}

export function generateChatId(): string {
  return `chat_${generateId()}`;
}

export function generateImageId(): string {
  return `img_${Date.now()}_${generateId().slice(0, 8)}`;
}


