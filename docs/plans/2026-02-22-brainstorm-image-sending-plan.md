# Brainstorm Image Sending Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enable users to attach and send reference images in brainstorm session chats so the AI can analyze them during character brainstorming.

**Architecture:** Images are attached via paste or file picker, uploaded to the ST server via `/api/images/upload`, stored as URL references in `BrainstormMessage.images[]`. When sending to the LLM, messages are transformed on-the-fly into OpenAI multimodal content arrays (text + image_url parts) with base64 data URLs.

**Tech Stack:** TypeScript, React 19, Vite, SillyTavern APIs (`/api/images/upload`, `getRequestHeaders()`), SCSS

**Design doc:** `docs/plans/2026-02-22-brainstorm-image-sending-design.md`

---

### Task 1: Add ImageAttachment type and images field to BrainstormMessage

**Files:**
- Modify: `src/brainstorm-types.ts`

**Step 1: Add the ImageAttachment interface and images field**

In `src/brainstorm-types.ts`, add the `ImageAttachment` interface before `BrainstormMessage`, and add the optional `images` field:

```typescript
import { ContextToSend } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export interface ImageAttachment {
  url: string;
  name: string;
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
  contextConfig: Pick<ContextToSend, 'stDescription' | 'charCard' | 'existingFields' | 'worldInfo' | 'persona' | 'messages'>;
}
```

**Step 2: Verify build**

Run: `npm run dev` (or `npm run build`) from the extension directory.
Expected: Builds successfully with no type errors.

**Step 3: Commit**

```bash
git add src/brainstorm-types.ts
git commit -m "feat: add ImageAttachment type to BrainstormMessage"
```

---

### Task 2: Create image-utils.ts with upload and base64 helpers

**Files:**
- Create: `src/image-utils.ts`

**Step 1: Write the image utility functions**

Create `src/image-utils.ts`:

```typescript
import { ImageAttachment } from './brainstorm-types.js';

const globalContext = SillyTavern.getContext();

/**
 * Reads a File as a base64 data URL string.
 */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Uploads an image file to the ST server and returns an ImageAttachment.
 * Uses the existing /api/images/upload endpoint.
 */
export async function uploadImage(file: File): Promise<ImageAttachment> {
  const dataUrl = await fileToDataUrl(file);
  const base64Data = dataUrl.split(',')[1];
  const extension = file.type.split('/')[1] || 'png';
  const fileNamePrefix = `brainstorm_${Date.now()}`;

  const response = await fetch('/api/images/upload', {
    method: 'POST',
    headers: globalContext.getRequestHeaders(),
    body: JSON.stringify({
      image: base64Data,
      format: extension,
      ch_name: 'brainstorm',
      filename: fileNamePrefix,
    }),
  });

  if (!response.ok) {
    throw new Error(`Image upload failed: ${response.statusText}`);
  }

  const responseData = await response.json();
  return {
    url: responseData.path,
    name: file.name,
  };
}

/**
 * Fetches an image from a server URL and converts it to a base64 data URL.
 * Used when loading persisted sessions where we only have the server path.
 */
export async function imageUrlToDataUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to convert image to data URL'));
    reader.readAsDataURL(blob);
  });
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Builds successfully.

**Step 3: Commit**

```bash
git add src/image-utils.ts
git commit -m "feat: add image upload and base64 utility functions"
```

---

### Task 3: Add buildApiMessages helper to request.ts

**Files:**
- Modify: `src/request.ts`

This function transforms `BrainstormMessage[]` into API-ready `Message[]`, converting messages with images to the OpenAI multimodal content array format.

**Step 1: Write the test**

Create `src/test/image-api-messages.test.ts`:

```typescript
import { describe, test, expect } from 'vitest';
import { buildApiMessages } from '../request.js';

describe('buildApiMessages', () => {
  test('passes through plain messages unchanged', () => {
    const messages = [
      { id: '1', role: 'system', content: 'You are helpful' },
      { id: '2', role: 'user', content: 'Hello' },
    ];
    const result = buildApiMessages(messages as any);
    expect(result).toEqual([
      { role: 'system', content: 'You are helpful' },
      { role: 'user', content: 'Hello' },
    ]);
  });

  test('converts messages with images to multimodal format', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Describe this',
        images: [{ url: '/user/images/brainstorm/test.png', name: 'test.png' }],
      },
    ];
    const imageDataUrls = new Map<string, string>();
    imageDataUrls.set('/user/images/brainstorm/test.png', 'data:image/png;base64,abc123');

    const result = buildApiMessages(messages as any, imageDataUrls);
    expect(result).toHaveLength(1);
    expect(result[0].role).toBe('user');
    expect(Array.isArray(result[0].content)).toBe(true);

    const content = result[0].content as any[];
    expect(content[0]).toEqual({ type: 'text', text: 'Describe this' });
    expect(content[1]).toEqual({
      type: 'image_url',
      image_url: { url: 'data:image/png;base64,abc123', detail: 'auto' },
    });
  });

  test('strips extra fields like id and isInitial', () => {
    const messages = [
      { id: '1', role: 'user', content: 'Hi', isInitial: true },
    ];
    const result = buildApiMessages(messages as any);
    expect(result[0]).toEqual({ role: 'user', content: 'Hi' });
    expect((result[0] as any).id).toBeUndefined();
    expect((result[0] as any).isInitial).toBeUndefined();
  });

  test('handles messages with images but no cached data URL by skipping images', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Describe this',
        images: [{ url: '/user/images/brainstorm/test.png', name: 'test.png' }],
      },
    ];
    const emptyCache = new Map<string, string>();
    const result = buildApiMessages(messages as any, emptyCache);
    // Should still produce multimodal format but without images that aren't cached
    expect(result[0].role).toBe('user');
    const content = result[0].content as any[];
    expect(content).toHaveLength(1);
    expect(content[0]).toEqual({ type: 'text', text: 'Describe this' });
  });
});
```

**Step 2: Run the test to verify it fails**

Run: `npm test -- src/test/image-api-messages.test.ts`
Expected: FAIL — `buildApiMessages` is not exported from `request.ts`.

**Step 3: Implement buildApiMessages**

Add to the bottom of `src/request.ts` (before the closing of the file, after the `makeStructuredRequest` function):

```typescript
import { BrainstormMessage } from './brainstorm-types.js';

/**
 * Transforms BrainstormMessages into API-ready Messages.
 * Messages with images are converted to OpenAI multimodal content arrays.
 * The imageDataUrls map provides base64 data URLs keyed by server path.
 */
export function buildApiMessages(
  messages: BrainstormMessage[],
  imageDataUrls?: Map<string, string>,
): Message[] {
  return messages.map((msg) => {
    if (!msg.images?.length) {
      return { role: msg.role, content: msg.content };
    }

    const contentParts: any[] = [{ type: 'text', text: msg.content }];

    for (const img of msg.images) {
      const dataUrl = imageDataUrls?.get(img.url);
      if (dataUrl) {
        contentParts.push({
          type: 'image_url',
          image_url: { url: dataUrl, detail: 'auto' },
        });
      }
    }

    return { role: msg.role, content: contentParts } as any;
  });
}
```

Note: The `import { BrainstormMessage }` line goes at the top of the file with the other imports.

**Step 4: Run the test to verify it passes**

Run: `npm test -- src/test/image-api-messages.test.ts`
Expected: All 4 tests PASS.

**Step 5: Commit**

```bash
git add src/request.ts src/test/image-api-messages.test.ts
git commit -m "feat: add buildApiMessages for multimodal API message construction"
```

---

### Task 4: Add image-related SCSS styles

**Files:**
- Modify: `src/styles/main.scss`

**Step 1: Add styles for image preview, thumbnails, and attachment button**

Insert these styles inside the `.brainstorm-chat` block in `src/styles/main.scss`, right before the `.chat-input-area` block (before line 709):

```scss
    .pending-images-preview {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px;
        border: 1px solid var(--SmartThemeBorderColor);
        border-radius: 8px;
        background: var(--SmartThemeBlurTintColor);

        .pending-image-item {
            position: relative;
            width: 60px;
            height: 60px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }

            .remove-image-button {
                position: absolute;
                top: -6px;
                right: -6px;
                width: 20px;
                height: 20px;
                padding: 0;
                font-size: 10px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: unset;
            }
        }
    }

    .message-images {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;

        img {
            max-width: 120px;
            max-height: 120px;
            object-fit: cover;
            border-radius: 4px;
            cursor: pointer;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    .image-attach-button {
        height: 40px;
        width: 40px;
        flex-shrink: 0;
    }
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Builds successfully, CSS output includes new styles.

**Step 3: Commit**

```bash
git add src/styles/main.scss
git commit -m "feat: add SCSS styles for image attachment UI"
```

---

### Task 5: Add image attachment UI to BrainstormChat input area

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

This is the main task — adding pending images state, file picker, paste handler, preview strip, and the attachment button.

**Step 1: Add imports and state**

At the top of `BrainstormChat.tsx`, add the import for image utilities:

```typescript
import { uploadImage, fileToDataUrl, imageUrlToDataUrl } from '../image-utils.js';
import { ImageAttachment } from '../brainstorm-types.js';
```

Inside the component function, after the existing state declarations (after line 24), add:

```typescript
const [pendingImages, setPendingImages] = useState<File[]>([]);
const [pendingImagePreviews, setPendingImagePreviews] = useState<string[]>([]);
const fileInputRef = useRef<HTMLInputElement>(null);
const imageDataUrlCache = useRef<Map<string, string>>(new Map());
```

**Step 2: Add image handling functions**

After the `abortControllerRef` declaration and before `useEffect`, add:

```typescript
const addPendingImages = useCallback(async (files: File[]) => {
  const imageFiles = files.filter((f) => f.type.startsWith('image/'));
  if (imageFiles.length === 0) return;

  setPendingImages((prev) => [...prev, ...imageFiles]);

  const previews = await Promise.all(imageFiles.map((f) => fileToDataUrl(f)));
  setPendingImagePreviews((prev) => [...prev, ...previews]);
}, []);

const removePendingImage = useCallback((index: number) => {
  setPendingImages((prev) => prev.filter((_, i) => i !== index));
  setPendingImagePreviews((prev) => prev.filter((_, i) => i !== index));
}, []);

const handlePaste = useCallback(
  (e: React.ClipboardEvent) => {
    const files = Array.from(e.clipboardData.files);
    if (files.some((f) => f.type.startsWith('image/'))) {
      e.preventDefault();
      addPendingImages(files);
    }
  },
  [addPendingImages],
);

const handleFileInputChange = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addPendingImages(files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  },
  [addPendingImages],
);
```

**Step 3: Modify handleSendMessage to upload images and attach to message**

Replace the current `handleSendMessage` callback (lines 79-108) with:

```typescript
const handleSendMessage = useCallback(async () => {
  if (isLoading) return;

  const chatMsgsLocal = messages.filter((m) => !m.isInitial);
  const lastChatMsg = chatMsgsLocal[chatMsgsLocal.length - 1];
  const canResend = lastChatMsg?.role === 'user';

  if (!userInput.trim() && pendingImages.length === 0 && !canResend) return;

  if (!userInput.trim() && pendingImages.length === 0 && canResend) {
    const previousMessages = messages;
    await sendRequest(
      messages,
      () => {},
      () => setMessages(previousMessages),
    );
    return;
  }

  // Upload pending images
  let uploadedImages: ImageAttachment[] = [];
  if (pendingImages.length > 0) {
    try {
      uploadedImages = await Promise.all(pendingImages.map((f) => uploadImage(f)));
      // Cache the data URLs for API requests
      for (let i = 0; i < uploadedImages.length; i++) {
        imageDataUrlCache.current.set(uploadedImages[i].url, pendingImagePreviews[i]);
      }
    } catch (error: any) {
      console.error('Image upload failed:', error);
      st_echo('error', `Image upload failed: ${error.message}`);
      return;
    }
  }

  const userMessage: BrainstormMessage = {
    id: `bm-${Date.now()}`,
    role: 'user',
    content: userInput.trim(),
    ...(uploadedImages.length > 0 ? { images: uploadedImages } : {}),
  };

  const previousMessages = messages;
  sendRequest(
    [...messages, userMessage],
    () => {
      setMessages([...messages, userMessage]);
      setUserInput('');
      setPendingImages([]);
      setPendingImagePreviews([]);
    },
    () => setMessages(previousMessages),
  );
}, [userInput, isLoading, messages, sendRequest, pendingImages, pendingImagePreviews]);
```

**Step 4: Modify sendRequest to use buildApiMessages**

Add the import at the top of the file:

```typescript
import { makePlainRequest, buildApiMessages } from '../request.js';
```

(Remove the existing `import { makePlainRequest } from '../request.js';` line.)

Inside `sendRequest`, replace the `makePlainRequest` call (lines 47-52):

```typescript
// Build API messages with multimodal content for images
const apiMessages = buildApiMessages(messagesToSend, imageDataUrlCache.current);

const responseContent = await makePlainRequest(
  settings.profileId,
  apiMessages,
  settings.maxResponseToken,
  abortControllerRef.current.signal,
);
```

Also add a pre-send step to ensure any persisted images have their data URLs cached. Add this right before `optimisticUpdate();` (line 43):

```typescript
// Ensure all images in messages have cached data URLs
for (const msg of messagesToSend) {
  if (msg.images) {
    for (const img of msg.images) {
      if (!imageDataUrlCache.current.has(img.url)) {
        try {
          const dataUrl = await imageUrlToDataUrl(img.url);
          imageDataUrlCache.current.set(img.url, dataUrl);
        } catch (error) {
          console.warn(`Failed to load image ${img.url}, skipping`, error);
        }
      }
    }
  }
}
```

**Step 5: Update the send button disabled condition**

Replace line 351:

```typescript
<STButton onClick={handleSendMessage} disabled={isLoading || !!editingMessageId || (!userInput.trim() && pendingImages.length === 0 && !canResend)}>
```

**Step 6: Verify build**

Run: `npm run build`
Expected: Builds successfully.

**Step 7: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: add image attachment logic to brainstorm chat send flow"
```

---

### Task 6: Add image attachment UI elements to BrainstormChat render

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

This task adds the visual elements: pending images preview strip, paperclip button, paste handler, file input, and image display in message bubbles.

**Step 1: Add pending images preview above the input area**

In the JSX, right before the `<div className="chat-input-area">` (line 337), add:

```tsx
{pendingImagePreviews.length > 0 && (
  <div className="pending-images-preview">
    {pendingImagePreviews.map((preview, index) => (
      <div key={index} className="pending-image-item">
        <img src={preview} alt={pendingImages[index]?.name || 'pending'} />
        <STButton
          className="remove-image-button danger_button"
          onClick={() => removePendingImage(index)}
          title="Remove image"
        >
          <i className="fa-solid fa-times"></i>
        </STButton>
      </div>
    ))}
  </div>
)}
```

**Step 2: Add hidden file input and paperclip button to the input area**

Inside the `<div className="chat-input-area">`, add the hidden file input and the paperclip button. The final input area should look like:

```tsx
<div className="chat-input-area">
  <input
    ref={fileInputRef}
    type="file"
    accept="image/*"
    multiple
    style={{ display: 'none' }}
    onChange={handleFileInputChange}
  />
  <STTextarea
    value={userInput}
    onChange={(e) => setUserInput(e.target.value)}
    placeholder="Brainstorm ideas for your character..."
    rows={3}
    disabled={isLoading || !!editingMessageId}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    }}
    onPaste={handlePaste}
  />
  <STButton
    className="image-attach-button"
    onClick={() => fileInputRef.current?.click()}
    disabled={isLoading || !!editingMessageId}
    title="Attach image"
  >
    <i className="fa-solid fa-paperclip"></i>
  </STButton>
  <STButton onClick={handleSendMessage} disabled={isLoading || !!editingMessageId || (!userInput.trim() && pendingImages.length === 0 && !canResend)}>
    <i className="fa-solid fa-paper-plane"></i>
  </STButton>
</div>
```

**Step 3: Add image display in user message bubbles**

In the chat messages rendering section, where user messages display their content (line 319), replace:

```tsx
<div className="message-content">{msg.content}</div>
```

with:

```tsx
<>
  <div className="message-content">{msg.content}</div>
  {msg.images && msg.images.length > 0 && (
    <div className="message-images">
      {msg.images.map((img, idx) => (
        <img
          key={idx}
          src={img.url}
          alt={img.name}
          title={img.name}
          onClick={() => window.open(img.url, '_blank')}
        />
      ))}
    </div>
  )}
</>
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Builds successfully.

**Step 5: Manual test**

1. Start SillyTavern: `npm start` (from the SillyTavern root)
2. Open the Character Creator popup -> Brainstorm tab
3. Create or open a session
4. Verify the paperclip button appears next to the send button
5. Click the paperclip -> file picker opens, select an image -> thumbnail appears above input
6. Click X on thumbnail -> image is removed
7. Paste an image from clipboard -> thumbnail appears
8. Type a message and send with an image attached
9. Verify the image appears in the user message bubble
10. Verify the AI receives and responds to the image content (requires vision-capable model)

**Step 6: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: add image attachment UI to brainstorm chat"
```

---

### Task 7: Handle images during message editing

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

When editing a user message that has images, preserve the images. Allow removing images during edit.

**Step 1: Add editing images state**

Add alongside the existing editing state:

```typescript
const [editingImages, setEditingImages] = useState<ImageAttachment[]>([]);
```

**Step 2: Populate editing images when starting edit**

Modify `handleStartEdit`:

```typescript
const handleStartEdit = (msg: BrainstormMessage) => {
  setEditingMessageId(msg.id);
  setEditingContent(msg.content);
  setEditingImages(msg.images ? [...msg.images] : []);
};
```

**Step 3: Clear editing images on cancel**

Modify `handleCancelEdit`:

```typescript
const handleCancelEdit = () => {
  setEditingMessageId(null);
  setEditingContent('');
  setEditingImages([]);
};
```

**Step 4: Include images in saved edits**

In `handleSaveEdit`, for the assistant message edit (line 148), include images:

```typescript
m.id === editingMessageId ? { ...m, content: editingContent, images: editingImages.length > 0 ? editingImages : undefined } : m,
```

For the user message edit/fork (line 164), include images:

```typescript
const editedMsg = { ...messages[messageIndex], content: editingContent, images: editingImages.length > 0 ? editingImages : undefined };
```

**Step 5: Add image display in the message editor**

In both editor sections (initial context editor and chat message editor), add image thumbnails below the textarea in the editor:

```tsx
{editingImages.length > 0 && (
  <div className="pending-images-preview">
    {editingImages.map((img, index) => (
      <div key={index} className="pending-image-item">
        <img src={img.url} alt={img.name} />
        <STButton
          className="remove-image-button danger_button"
          onClick={() => setEditingImages((prev) => prev.filter((_, i) => i !== index))}
          title="Remove image"
        >
          <i className="fa-solid fa-times"></i>
        </STButton>
      </div>
    ))}
  </div>
)}
```

**Step 6: Verify build and test**

Run: `npm run build`
Manual test: Edit a user message that has images attached. Verify images appear in editor, can be removed, and are preserved on save.

**Step 7: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: preserve and edit images when editing brainstorm messages"
```

---

### Task 8: Final integration testing and cleanup

**Step 1: Run all tests**

Run: `npm test`
Expected: All tests pass (existing parser tests + new buildApiMessages tests).

**Step 2: Run the linter**

Run: `npm run prettify`
Apply any formatting fixes.

**Step 3: Build production bundle**

Run: `npm run build`
Expected: Successful build, `dist/index.js` and `dist/style.css` updated.

**Step 4: Full manual test checklist**

Test with a vision-capable model (e.g., Claude, GPT-4o, Gemini):
- [ ] Paste image from clipboard -> appears as thumbnail
- [ ] File picker -> select multiple images -> all appear as thumbnails
- [ ] Remove individual thumbnails with X button
- [ ] Send message with images -> images appear in user bubble
- [ ] Send message without images -> works as before
- [ ] AI responds acknowledging the image content
- [ ] Reload page -> open saved session -> images still visible in messages
- [ ] Send a new message in persisted session with old images -> AI still receives old images
- [ ] Edit user message with images -> images shown in editor
- [ ] Remove image during edit -> message saved without that image
- [ ] Regenerate response on message with images -> images still included

**Step 5: Commit final cleanup**

```bash
git add -A
git commit -m "chore: lint and build for brainstorm image sending feature"
```
