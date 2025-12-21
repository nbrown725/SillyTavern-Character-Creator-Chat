import { globalContext } from "./generate.js";
import { SessionService } from './services/sessionService.js';
import { ChatController } from './controllers/chatController.js';
import { CreatorMessage } from './types.js';

// Remove duplicate ChatMessage interface - using the one from types.ts
// Remove ChatSession - using unified session storage

// Use the unified session service and chat controller
const sessionService = SessionService.getInstance();
const chatController = ChatController.getInstance();
let chatContainer: JQuery | null = null;
let pendingInlineImageDataUrl: string | null = null;

export function initializeChat(): void {
    setupChatEventHandlers();
}

export async function loadChatUI(): Promise<void> {
    const chatContainerElement = $('#charCreator_chatContainer');

    try {
        const chatHtml = await globalContext.renderExtensionTemplateAsync(
            'third-party/SillyTavern-Character-Creator-Chat',
            'templates/chat'
        );

        chatContainerElement.html(chatHtml);
        chatContainer = $('#chat_container');
        chatContainer.show();

        bindChatEvents();
        await refreshSavedChatsList();
        renderChatHistory();
    } catch (error) {
        console.error('Failed to load chat template:', error);
        chatContainerElement.html('<div class="error">Failed to load chat interface</div>');
    }
}

// Removed separate chat session functions - using unified sessionService

async function saveChat(): Promise<void> {
    const session = sessionService.getSession();
    const characterId = session.lastLoadedCharacterId;

    if (!characterId) {
        alert('Please load a character first to save chats.');
        return;
    }

    // Get character name from the loaded character
    const context = SillyTavern.getContext();
    const character = context.characters.find((c: any) => c.avatar === characterId);
    const characterName = character?.name || 'Unknown';

    try {
        const saved = await sessionService.saveCurrentChat(characterId, characterName);
        await refreshSavedChatsList();
        $('#saved_chats_select').val(saved.id);
        alert('Chat saved successfully!');
    } catch (error) {
        console.error('Failed to save chat:', error);
        alert('Failed to save chat.');
    }
}

async function loadSelectedChat(): Promise<void> {
    const chatId = $('#saved_chats_select').val() as string;
    if (!chatId) {
        alert('Please select a saved chat to load.');
        return;
    }

    if (!confirm('Loading will replace your current working chat history. Continue?')) return;

    try {
        await sessionService.loadSavedChat(chatId);
        renderChatHistory();
    } catch (error) {
        console.error('Failed to load chat:', error);
        alert('Failed to load chat.');
    }
}

async function deleteSelectedChat(): Promise<void> {
    const chatId = $('#saved_chats_select').val() as string;
    if (!chatId) {
        alert('Please select a saved chat to delete.');
        return;
    }

    if (!confirm('Are you sure you want to delete this saved chat?')) return;

    try {
        await sessionService.deleteSavedChat(chatId);
        await refreshSavedChatsList();
    } catch (error) {
        console.error('Failed to delete saved chat:', error);
        alert('Failed to delete saved chat.');
    }
}

function onChatSelectChange(): void {
    // Selection handled by load/delete buttons
}

async function refreshSavedChatsList(): Promise<void> {
    const session = sessionService.getSession();
    const characterId = session.lastLoadedCharacterId;

    const select = $('#saved_chats_select');
    select.empty().append('<option value="">-- Saved Chats --</option>');

    if (!characterId) return;

    try {
        const chats = await sessionService.listSavedChats(characterId);
        chats
            .sort((a, b) => b.updatedAt - a.updatedAt)
            .forEach(chat => {
                select.append(`<option value="${chat.id}">${chat.characterName}</option>`);
            });

        // Select the linked chat if any
        if (session.creatorChat.linkedSavedChatId) {
            select.val(session.creatorChat.linkedSavedChatId);
        }
    } catch (error) {
        console.error('Failed to list saved chats:', error);
    }
}

export async function onCharacterLoaded(): Promise<void> {
    await refreshSavedChatsList();
}

function setupChatEventHandlers(): void {
    $(document).on('click', '.tab-button[data-tab="charCreator_chatContainer"]', function () {
        if (!chatContainer) {
            loadChatUI();
        }
    });
}

function bindChatEvents(): void {
    $('#send_message').on('click', sendMessage);

    $('#chat_input').on('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    $('#clear_chat').on('click', clearChat);
    $('#export_chat').on('click', exportChat);
    $('#save_chat').on('click', saveChat);
    $('#load_chat').on('click', loadSelectedChat);
    $('#delete_saved_chat').on('click', deleteSelectedChat);
    $('#saved_chats_select').on('change', onChatSelectChange);
    
    // Bind edit/delete/regen message events using event delegation
    $('#chat_messages').on('click', '.edit-message-btn', function() {
        const messageElement = $(this).closest('.chat-message');
        const messageId = messageElement.attr('data-message-id');
        if (messageId) {
            startEditMessage(messageId);
        }
    });
    
    $('#chat_messages').on('click', '.delete-message-btn', function() {
        const messageElement = $(this).closest('.chat-message');
        const messageId = messageElement.attr('data-message-id');
        if (messageId) {
            deleteMessage(messageId);
        }
    });
    
    $('#chat_messages').on('click', '.regen-message-btn', function() {
        const messageElement = $(this).closest('.chat-message');
        const messageId = messageElement.attr('data-message-id');
        if (messageId) {
            regenerateMessage(messageId);
        }
    });
    
    $('#chat_messages').on('click', '.save-edit-btn', function() {
        const messageElement = $(this).closest('.chat-message');
        const messageId = messageElement.attr('data-message-id');
        if (messageId) {
            saveEditMessage(messageId);
        }
    });
    
    $('#chat_messages').on('click', '.cancel-edit-btn', function() {
        const messageElement = $(this).closest('.chat-message');
        const messageId = messageElement.attr('data-message-id');
        if (messageId) {
            cancelEditMessage(messageId);
        }
    });

    // Image attach UI
    $('#attach_image').on('click', function () {
        const input = document.getElementById('chat_image_input') as HTMLInputElement | null;
        input?.click();
    });
    $('#chat_image_input').on('change', async function (e) {
        const input = e.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        
        try {
            pendingInlineImageDataUrl = await chatController.processImageFile(file);
            const previewEl = $('#chat_image_preview');
            previewEl.attr('src', pendingInlineImageDataUrl || '');
            previewEl.closest('.chat-image-preview-container').show();
        } catch (error) {
            console.error('Failed to process image:', error);
            alert(error instanceof Error ? error.message : 'Failed to process image file.');
            input.value = '';
        }
    });
    $('#clear_image').on('click', function () {
        pendingInlineImageDataUrl = null;
        const fileInput = document.getElementById('chat_image_input') as HTMLInputElement | null;
        if (fileInput) fileInput.value = '';
        const previewEl = $('#chat_image_preview');
        previewEl.attr('src', '');
        previewEl.closest('.chat-image-preview-container').hide();
    });
}

async function sendMessage(): Promise<void> {
    const input = $('#chat_input');
    const message = input.val()?.toString().trim();

    if (!message) return;

    const sendButton = $('#send_message');
    sendButton.prop('disabled', true);
    input.prop('disabled', true);

    try {
        // Capture current image before clearing UI
        const imageUrlForSend = pendingInlineImageDataUrl ?? undefined;

        // Create and render user message immediately
        const userMessage = await chatController.createAndStoreUserMessage({
            content: message,
            imageUrl: imageUrlForSend,
        });
        renderMessage(userMessage);
        scrollToBottom();

        // Clear input and image preview immediately
        input.val('');
        resetImagePreview();

        // Kick off AI response
        const aiMessage = await chatController.generateAndStoreAiResponse({
            content: message,
            imageUrl: imageUrlForSend,
        });
        renderMessage(aiMessage);
        scrollToBottom();
    } catch (error) {
        console.error('Failed to generate response:', error);
        alert('Failed to generate response. Please check your connection settings.');
    } finally {
        sendButton.prop('disabled', false);
        input.prop('disabled', false);
        input.focus();
    }
}

function resetImagePreview(): void {
    pendingInlineImageDataUrl = null;
    const fileInput = document.getElementById('chat_image_input') as HTMLInputElement | null;
    if (fileInput) fileInput.value = '';
    const previewEl = $('#chat_image_preview');
    previewEl.attr('src', '');
    previewEl.closest('.chat-image-preview-container').hide();
}


// Removed addMessageToChat - messages are now handled by ChatController

function renderMessage(message: CreatorMessage): void {
    const template = $('#chat_message_template')[0] as HTMLTemplateElement;
    const clonedContent = template.content.cloneNode(true) as DocumentFragment;
    const messageElement = $(clonedContent.querySelector('.chat-message')!);

    messageElement.attr('data-message-id', message.id);
    messageElement.addClass(`message-${message.role}`);
    messageElement.find('.message-role').text(message.role === 'user' ? 'You' : 'AI');
    messageElement.find('.message-timestamp').text(formatTimestamp(message.timestamp));
    
    // Show regenerate button only for AI messages
    if (message.role === 'assistant') {
        messageElement.find('.regen-message-btn').css('display', 'inline-block');
    }
    
    const container = messageElement.find('.message-content');
    container.html(formatMessageContent(message.content));
    if (message.imageUrl) {
        const imageHtml = chatController.createImagePreviewHtml(message.imageUrl);
        container.append($(imageHtml));
    }

    $('#chat_messages').append(messageElement);
}

function renderChatHistory(): void {
    $('#chat_messages').empty();
    const messages = chatController.getChatMessages();
    messages.forEach(message => renderMessage(message));
    scrollToBottom();
}

function scrollToBottom(): void {
    const messagesContainer = $('#chat_messages')[0];
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

async function clearChat(): Promise<void> {
    if (!confirm('Are you sure you want to clear the chat history?')) return;

    try {
        await chatController.clearChat();
        $('#chat_messages').empty();
    } catch (error) {
        console.error('Failed to clear chat:', error);
        alert('Failed to clear chat history.');
    }
}

function exportChat(): void {
    try {
        const exportData = chatController.exportChat();
        if (exportData.messages.length === 0) {
            alert('No chat history to export');
            return;
        }

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `character-chat-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Failed to export chat:', error);
        alert('Failed to export chat history.');
    }
}

function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Removed generateId - now handled by ChatController

function startEditMessage(messageId: string): void {
    const messages = chatController.getChatMessages();
    const message = messages.find(m => m.id === messageId);
    if (!message) return;
    
    const messageElement = $(`.chat-message[data-message-id="${messageId}"]`);
    const contentElement = messageElement.find('.message-content');
    const editContainer = messageElement.find('.message-edit-container');
    const editTextarea = editContainer.find('.message-edit-textarea');
    
    // Show edit container and hide content
    contentElement.hide();
    editContainer.show();
    editTextarea.val(message.content).focus();
    
    // Auto-resize textarea
    editTextarea.css('height', 'auto');
    editTextarea.css('height', editTextarea[0].scrollHeight + 'px');
}

async function saveEditMessage(messageId: string): Promise<void> {
    const messageElement = $(`.chat-message[data-message-id="${messageId}"]`);
    const editContainer = messageElement.find('.message-edit-container');
    const editTextarea = editContainer.find('.message-edit-textarea');
    const newContent = editTextarea.val()?.toString().trim();
    
    if (!newContent) {
        alert('Message cannot be empty');
        return;
    }
    
    try {
        await chatController.editMessage({ messageId, newContent });
        
        // Update UI
        const contentElement = messageElement.find('.message-content');
        contentElement.html(formatMessageContent(newContent));
        contentElement.show();
        editContainer.hide();
    } catch (error) {
        console.error('Failed to edit message:', error);
        alert('Failed to edit message.');
    }
}

function cancelEditMessage(messageId: string): void {
    const messageElement = $(`.chat-message[data-message-id="${messageId}"]`);
    const contentElement = messageElement.find('.message-content');
    const editContainer = messageElement.find('.message-edit-container');
    
    contentElement.show();
    editContainer.hide();
}

async function deleteMessage(messageId: string): Promise<void> {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
        await chatController.deleteMessage(messageId);
        
        // Remove from UI with animation
        const messageElement = $(`.chat-message[data-message-id="${messageId}"]`);
        messageElement.fadeOut(200, function() {
            $(this).remove();
        });
    } catch (error) {
        console.error('Failed to delete message:', error);
        alert('Failed to delete message.');
    }
}

async function regenerateMessage(messageId: string): Promise<void> {
    const messages = chatController.getChatMessages();
    
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) {
        console.error('Invalid message ID for regeneration');
        return;
    }
    
    const messageToRegen = messages[messageIndex];
    
    // Only allow regeneration of AI messages
    if (messageToRegen.role !== 'assistant') {
        alert('Only AI messages can be regenerated');
        return;
    }
    
    // Find the previous user message to use as context for regeneration
    let previousUserMessage = '';
    let previousUserImageUrl: string | undefined;
    for (let i = messageIndex - 1; i >= 0; i--) {
        if (messages[i].role === 'user') {
            previousUserMessage = messages[i].content;
            previousUserImageUrl = messages[i].imageUrl;
            break;
        }
    }
    
    if (!previousUserMessage) {
        alert('Cannot regenerate: no user message found for context');
        return;
    }
    
    // Show loading state
    const messageElement = $(`.chat-message[data-message-id="${messageId}"]`);
    const regenButton = messageElement.find('.regen-message-btn');
    regenButton.prop('disabled', true);
    regenButton.html('<i class="fa-solid fa-spinner fa-spin"></i>');
    
    try {
        // Regenerate the message
        await chatController.regenerateMessage(messageId, {
            content: previousUserMessage,
            imageUrl: previousUserImageUrl
        });
        
        // Complete re-render
        renderChatHistory();
        
    } catch (error) {
        console.error('Failed to regenerate message:', error);
        alert('Failed to regenerate message. Please check your connection settings.');
        renderChatHistory();
    }
}

function formatMessageContent(content: string): string {
    // Basic markdown-style formatting
    let formatted = content;
    
    // Escape HTML first
    formatted = $('<div>').text(formatted).html();
    
    // Convert markdown-style formatting
    // Bold: **text** or __text__
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__(.+?)__/g, '<strong>$1</strong>');
    
    // Italic: *text* or _text_
    formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/_(.+?)_/g, '<em>$1</em>');
    
    // Code blocks: ```code```
    formatted = formatted.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>');
    
    // Inline code: `code`
    formatted = formatted.replace(/`(.+?)`/g, '<code>$1</code>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    // Lists (basic support)
    formatted = formatted.replace(/^- (.+)$/gm, '• $1');
    formatted = formatted.replace(/^\* (.+)$/gm, '• $1');
    formatted = formatted.replace(/^\d+\. (.+)$/gm, '$&');
    
    return formatted;
}

// Removed updateCreatorChatHistory - no longer needed with unified session

export function getChatMessagesForUI(): CreatorMessage[] {
    return chatController.getChatMessages();
}

export function formatChatAsContext(): string {
    const messages = chatController.getChatMessages();
    if (messages.length === 0) return '';

    const header = "=== Character Brainstorming Chat ===\n\n";
    const messageStrings = messages.map(msg =>
        `${msg.role === 'user' ? 'User' : 'AI'}: ${msg.content}`
    ).join('\n\n');

    return header + messageStrings + '\n\n=== End of Chat ===\n';
}