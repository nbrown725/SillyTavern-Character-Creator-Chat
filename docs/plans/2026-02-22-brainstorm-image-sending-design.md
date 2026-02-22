# Brainstorm Chat Image Sending Design

## Goal

Enable users to attach and send images in brainstorm session chats so the AI can analyze reference images (character art, mood boards, screenshots) during character brainstorming.

## Approach

**Approach 1 (chosen): Multimodal content array via type casting.** Pass images through the existing Generator pipeline by constructing OpenAI-format multimodal content arrays and using `as any` to bypass TypeScript's `content: string` constraint. The pipeline (`Generator` -> `ConnectionManagerRequestService` -> `ChatCompletionService` -> backend) passes message content through with zero transformation, so array content flows through to the LLM provider.

## Data Model

### New Types (`brainstorm-types.ts`)

```typescript
export interface ImageAttachment {
  url: string;      // Server path (e.g., "/user/images/brainstorm/1234_abc.png")
  name: string;     // Original filename
}

export interface BrainstormMessage extends Message {
  id: string;
  isInitial?: boolean;
  images?: ImageAttachment[];  // Optional array of attached images
}
```

- `images` stores metadata only (URL + filename)
- Actual files stored on server via `/api/images/upload`
- `content` remains plain string for display/storage
- Multimodal content array built on-the-fly when sending to API

## UI Design

### Input Area

```
+---------------------------------------------+
| [thumb1 x] [thumb2 x]                       |  <- pending images (conditional)
+---------------------------------------------+
| [textarea                        ] [clip][>] |  <- input + image picker + send
+---------------------------------------------+
```

- **Image button**: Paperclip icon (`fa-solid fa-paperclip`), opens hidden file input (`accept="image/*"`, `multiple`)
- **Paste handler**: `onPaste` on textarea intercepts clipboard image files
- **Pending images preview**: Thumbnail row above input, each with X to remove. Shown only when images are attached.

### Message Display

User messages with images show thumbnails below text:

```
+----------------------------+
| "Here's the character ref" |
| [image1] [image2]          |
+----------------------------+
```

### Editing Messages with Images

Images remain attached during edit. User can remove existing or add new images in the editor.

## Image Upload & API Integration

### Upload Flow

1. User attaches image(s) via paste or file picker -> stored in React state as `File` objects
2. On send, each image is:
   - Read as base64 via `FileReader.readAsDataURL()`
   - Uploaded to server: `POST /api/images/upload` with `ch_name: 'brainstorm'`
   - Server returns path
3. Returned URLs stored in `BrainstormMessage.images`
4. Message saved to session in localStorage

### API Request Transformation

Before calling `makePlainRequest()`, transform messages with images:

```typescript
function buildApiMessages(messages: BrainstormMessage[]): Message[] {
  return messages.map(msg => {
    if (!msg.images?.length) {
      return { role: msg.role, content: msg.content };
    }
    const contentParts: any[] = [
      { type: 'text', text: msg.content }
    ];
    for (const img of msg.images) {
      contentParts.push({
        type: 'image_url',
        image_url: { url: /* base64 data URL */, detail: 'auto' }
      });
    }
    return { role: msg.role, content: contentParts } as any;
  });
}
```

Images need to be base64 data URLs for the LLM (not local server paths). Strategy:
- Cache base64 data URL in memory at upload time
- For persisted sessions, re-fetch from server path and convert to base64 before API call

## File Changes

### Modified

1. **`src/brainstorm-types.ts`** - Add `ImageAttachment` interface, `images?` field
2. **`src/components/BrainstormChat.tsx`** - New state (`pendingImages`), paste handler, file input, image preview strip, image display in bubbles, image handling in edit
3. **`src/request.ts`** - Add `buildApiMessages()` helper
4. **`src/styles/main.scss`** - Styles for image preview strip, thumbnails, image button

### New

5. **`src/image-utils.ts`** - `uploadImage(file): Promise<ImageAttachment>`, `imageUrlToDataUrl(url): Promise<string>`

### Unchanged

- `BrainstormSessionManager.tsx`, `brainstorm-prompt-builder.ts`, `settings.ts`, `MainPopup.tsx`

## Input Methods

- Clipboard paste (on textarea)
- File picker button (paperclip icon)
- No drag-and-drop

## Constraints

- Multiple images per message supported
- Only works with vision-capable LLM providers (user's responsibility)
- Images stored server-side via existing `/api/images/upload` endpoint
