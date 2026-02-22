# Brainstorm Video Support Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add video attachment support to brainstorm session chats, with graceful degradation for models that don't support video.

**Architecture:** Extend the existing `ImageAttachment` type with an optional `mediaType` field. Reuse the same upload endpoint (`/api/images/upload` already accepts video formats), caching, and session persistence. Branch at: file input filtering, upload detection, UI rendering (video thumbnail vs image), and API message building (`video_url` vs `image_url` content parts). Check a DOM flag for video model support.

**Tech Stack:** TypeScript, React 19, Vite, SCSS, Vitest

---

### Task 1: Add `mediaType` to `ImageAttachment` type

**Files:**
- Modify: `src/brainstorm-types.ts:4-7`

**Step 1: Update the interface**

In `src/brainstorm-types.ts`, change `ImageAttachment` from:
```typescript
export interface ImageAttachment {
  url: string;
  name: string;
}
```
to:
```typescript
export interface ImageAttachment {
  url: string;
  name: string;
  mediaType?: 'image' | 'video';
}
```

**Step 2: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds with no errors (backward compatible change).

**Step 3: Run tests**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test`
Expected: All existing tests pass.

**Step 4: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/brainstorm-types.ts
git commit -m "feat: add mediaType field to ImageAttachment for video support"
```

---

### Task 2: Write failing tests for video in `buildApiMessages`

**Files:**
- Modify: `src/test/image-api-messages.test.ts`

**Step 1: Add three test cases**

Append these tests inside the existing `describe('buildApiMessages', ...)` block in `src/test/image-api-messages.test.ts`:

```typescript
  test('converts video attachments to video_url format', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Describe this video',
        images: [{ url: '/user/images/brainstorm/test.mp4', name: 'test.mp4', mediaType: 'video' as const }],
      },
    ];
    const dataUrls = new Map<string, string>();
    dataUrls.set('/user/images/brainstorm/test.mp4', 'data:video/mp4;base64,xyz789');

    const result = buildApiMessages(messages as any, dataUrls);
    expect(result).toHaveLength(1);
    const content = result[0].content as unknown as any[];
    expect(content[0]).toEqual({ type: 'text', text: 'Describe this video' });
    expect(content[1]).toEqual({
      type: 'video_url',
      video_url: { url: 'data:video/mp4;base64,xyz789', detail: 'auto' },
    });
  });

  test('handles mixed image and video attachments', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Compare these',
        images: [
          { url: '/user/images/brainstorm/photo.png', name: 'photo.png' },
          { url: '/user/images/brainstorm/clip.mp4', name: 'clip.mp4', mediaType: 'video' as const },
        ],
      },
    ];
    const dataUrls = new Map<string, string>();
    dataUrls.set('/user/images/brainstorm/photo.png', 'data:image/png;base64,abc123');
    dataUrls.set('/user/images/brainstorm/clip.mp4', 'data:video/mp4;base64,xyz789');

    const result = buildApiMessages(messages as any, dataUrls);
    const content = result[0].content as unknown as any[];
    expect(content).toHaveLength(3);
    expect(content[1]).toEqual({
      type: 'image_url',
      image_url: { url: 'data:image/png;base64,abc123', detail: 'auto' },
    });
    expect(content[2]).toEqual({
      type: 'video_url',
      video_url: { url: 'data:video/mp4;base64,xyz789', detail: 'auto' },
    });
  });

  test('attachments without mediaType default to image_url', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Look at this',
        images: [{ url: '/user/images/brainstorm/old.png', name: 'old.png' }],
      },
    ];
    const dataUrls = new Map<string, string>();
    dataUrls.set('/user/images/brainstorm/old.png', 'data:image/png;base64,legacy');

    const result = buildApiMessages(messages as any, dataUrls);
    const content = result[0].content as unknown as any[];
    expect(content[1]).toEqual({
      type: 'image_url',
      image_url: { url: 'data:image/png;base64,legacy', detail: 'auto' },
    });
  });
```

**Step 2: Run tests to verify they fail**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test`
Expected: The first test (`converts video attachments to video_url format`) fails because `buildApiMessages` currently always emits `image_url`. The other two may pass since they test existing/default behavior.

**Step 3: Commit failing tests**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/test/image-api-messages.test.ts
git commit -m "test: add video support tests for buildApiMessages"
```

---

### Task 3: Update `buildApiMessages` to emit `video_url` for videos

**Files:**
- Modify: `src/request.ts:173-198`

**Step 1: Update the `buildApiMessages` function**

In `src/request.ts`, replace the existing `buildApiMessages` function (lines 173-198) with:

```typescript
/**
 * Transforms BrainstormMessages into API-ready Messages.
 * Messages with images/videos are converted to OpenAI multimodal content arrays.
 * The imageDataUrls map provides base64 data URLs keyed by server path.
 */
export function buildApiMessages(messages: BrainstormMessage[], imageDataUrls?: Map<string, string>): Message[] {
  return messages.map((msg) => {
    if (!msg.images?.length) {
      return { role: msg.role, content: msg.content };
    }

    const contentParts: any[] = [{ type: 'text', text: msg.content }];

    for (const img of msg.images) {
      const dataUrl = imageDataUrls?.get(img.url);
      if (dataUrl) {
        if (img.mediaType === 'video') {
          contentParts.push({
            type: 'video_url',
            video_url: { url: dataUrl, detail: 'auto' },
          });
        } else {
          contentParts.push({
            type: 'image_url',
            image_url: { url: dataUrl, detail: 'auto' },
          });
        }
      }
    }

    // Fall back to plain string if no media actually resolved
    if (contentParts.length === 1) {
      return { role: msg.role, content: msg.content };
    }

    return { role: msg.role, content: contentParts } as any;
  });
}
```

The key change: check `img.mediaType === 'video'` to decide between `video_url` and `image_url`. Default (no `mediaType` or `'image'`) emits `image_url` for backward compatibility.

**Step 2: Run tests to verify they pass**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test`
Expected: All tests pass, including the new video tests.

**Step 3: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/request.ts
git commit -m "feat: emit video_url content parts for video attachments"
```

---

### Task 4: Update `uploadImage` to detect video and set `mediaType`

**Files:**
- Modify: `src/image-utils.ts:21-47`

**Step 1: Add size warning constant and update `uploadImage`**

In `src/image-utils.ts`, add the size warning and update `uploadImage`. Replace the existing `uploadImage` function (lines 21-47) with:

```typescript
const VIDEO_SIZE_WARNING_BYTES = 50 * 1024 * 1024; // 50MB

/**
 * Uploads a media file (image or video) to the ST server and returns an ImageAttachment.
 * Uses the existing /api/images/upload endpoint which accepts both image and video formats.
 */
export async function uploadImage(file: File): Promise<ImageAttachment> {
  const isVideo = file.type.startsWith('video/');

  if (isVideo && file.size > VIDEO_SIZE_WARNING_BYTES) {
    globalContext.toastr.warning(
      `Video "${file.name}" is ${(file.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`,
      'Large Video',
    );
  }

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
    throw new Error(`Upload failed: ${response.statusText}`);
  }

  const responseData = await response.json();
  return {
    url: responseData.path,
    name: file.name,
    ...(isVideo ? { mediaType: 'video' as const } : {}),
  };
}
```

Key changes:
- Detect video via `file.type.startsWith('video/')`
- Show 50MB warning toast for large videos
- Set `mediaType: 'video'` on returned attachment for videos
- Images don't get a `mediaType` (undefined = backward compatible default)

**Step 2: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/image-utils.ts
git commit -m "feat: detect video files in upload and set mediaType"
```

---

### Task 5: Update `BrainstormChat.tsx` — file input and filtering

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

**Step 1: Update file input accept attribute**

In `src/components/BrainstormChat.tsx`, find the file input element (line 557-563):
```tsx
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
```

Change `accept="image/*"` to `accept="image/*,video/*"`.

**Step 2: Update `addPendingImages` filter**

In the `addPendingImages` callback (line 96):
```typescript
    const imageFiles = files.filter((f) => f.type.startsWith('image/'));
```
Change to:
```typescript
    const mediaFiles = files.filter((f) => f.type.startsWith('image/') || f.type.startsWith('video/'));
```
And update the rest of the function to use `mediaFiles`:
```typescript
    if (mediaFiles.length === 0) return;

    const previews = await Promise.all(mediaFiles.map((f) => fileToDataUrl(f)));
    setPendingImages((prev) => [...prev, ...mediaFiles]);
    setPendingImagePreviews((prev) => [...prev, ...previews]);
```

**Step 3: Update `handlePaste` filter**

In the `handlePaste` callback (line 112):
```typescript
      if (files.some((f) => f.type.startsWith('image/'))) {
```
Change to:
```typescript
      if (files.some((f) => f.type.startsWith('image/') || f.type.startsWith('video/'))) {
```

**Step 4: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/components/BrainstormChat.tsx
git commit -m "feat: accept video files in brainstorm chat file input and paste"
```

---

### Task 6: Update `BrainstormChat.tsx` — video preview rendering

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

This task updates the UI to render video thumbnails with a play icon overlay instead of `<img>` tags for video attachments.

**Step 1: Add a helper function to detect video files/attachments**

At the top of the component function (after the state declarations, around line 35), add:

```typescript
  const isVideoFile = (file: File) => file.type.startsWith('video/');
  const isVideoAttachment = (img: ImageAttachment) => img.mediaType === 'video';
```

**Step 2: Update pending media previews**

Find the pending images preview section (lines 540-554). Replace:
```tsx
      {pendingImagePreviews.map((preview, index) => (
            <div key={index} className="pending-image-item">
              <img src={preview} alt={pendingImages[index]?.name || 'pending'} />
```
With:
```tsx
      {pendingImagePreviews.map((preview, index) => (
            <div key={index} className={`pending-image-item ${isVideoFile(pendingImages[index]) ? 'video-thumbnail-wrapper' : ''}`}>
              {isVideoFile(pendingImages[index]) ? (
                <>
                  <video src={preview} muted preload="metadata" />
                  <i className="fa-solid fa-play video-play-icon"></i>
                </>
              ) : (
                <img src={preview} alt={pendingImages[index]?.name || 'pending'} />
              )}
```

**Step 3: Update message display for video attachments**

Find the message images display section (lines 509-521). Replace:
```tsx
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
```
With:
```tsx
                    {msg.images && msg.images.length > 0 && (
                      <div className="message-images">
                        {msg.images.map((img, idx) =>
                          isVideoAttachment(img) ? (
                            <div key={idx} className="video-thumbnail-wrapper" title={img.name} onClick={() => window.open(img.url, '_blank')}>
                              <video src={img.url} muted preload="metadata" />
                              <i className="fa-solid fa-play video-play-icon"></i>
                            </div>
                          ) : (
                            <img
                              key={idx}
                              src={img.url}
                              alt={img.name}
                              title={img.name}
                              onClick={() => window.open(img.url, '_blank')}
                            />
                          ),
                        )}
                      </div>
                    )}
```

**Step 4: Update edit mode previews**

There are two edit mode preview sections that show `<img>` for editing images. Both need the same treatment. Find both instances of the editing images display (around lines 389-401 and lines 449-462). In each, replace:
```tsx
                            <img src={img.url} alt={img.name} />
```
With:
```tsx
                            {isVideoAttachment(img) ? (
                              <div className="video-thumbnail-wrapper">
                                <video src={img.url} muted preload="metadata" />
                                <i className="fa-solid fa-play video-play-icon"></i>
                              </div>
                            ) : (
                              <img src={img.url} alt={img.name} />
                            )}
```

**Step 5: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds.

**Step 6: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/components/BrainstormChat.tsx
git commit -m "feat: render video thumbnails with play icon in brainstorm chat"
```

---

### Task 7: Add SCSS styles for video thumbnails

**Files:**
- Modify: `src/styles/main.scss`

**Step 1: Add video thumbnail styles**

In `src/styles/main.scss`, find the `.message-images` block (around line 747-765). After this block (and before `.image-attach-button`), add:

```scss
    .video-thumbnail-wrapper {
        position: relative;
        display: inline-block;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }

        video {
            max-width: 120px;
            max-height: 120px;
            object-fit: cover;
            border-radius: 4px;
            display: block;
        }

        .video-play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            color: white;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
            pointer-events: none;
        }
    }
```

Also update `.pending-image-item` (around line 718-744) to handle video elements. Inside `.pending-image-item`, add:

```scss
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }

            .video-thumbnail-wrapper {
                width: 100%;
                height: 100%;

                video {
                    width: 100%;
                    height: 100%;
                }

                .video-play-icon {
                    font-size: 14px;
                }
            }
```

**Step 2: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds, `dist/style.css` includes the new styles.

**Step 3: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/styles/main.scss
git commit -m "feat: add SCSS styles for video thumbnail with play icon overlay"
```

---

### Task 8: Add video support check to `BrainstormChat.tsx`

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

SillyTavern writes `isVideoInliningSupported()` result to a DOM element `#openai_video_inlining_supported` with `data-cc-toggle="true"` or `"false"`. The extension reads this at send time to decide whether to include video content parts.

**Step 1: Add a helper function**

Near the top of `BrainstormChat.tsx` (after the `globalContext` line, around line 12), add:

```typescript
function isVideoInliningSupported(): boolean {
  const el = document.getElementById('openai_video_inlining_supported');
  return el?.dataset.ccToggle === 'true';
}
```

**Step 2: Pass the flag to `buildApiMessages`**

In the `sendRequest` callback, find where `buildApiMessages` is called (line 165):
```typescript
        const apiMessages = buildApiMessages(messagesToSend, imageDataUrlCache.current);
```
Change to:
```typescript
        const skipVideo = !isVideoInliningSupported();
        const apiMessages = buildApiMessages(messagesToSend, imageDataUrlCache.current, skipVideo);
```

**Step 3: Update `buildApiMessages` signature and logic**

In `src/request.ts`, update the `buildApiMessages` function signature and add video skipping:

```typescript
export function buildApiMessages(messages: BrainstormMessage[], imageDataUrls?: Map<string, string>, skipVideo?: boolean): Message[] {
  return messages.map((msg) => {
    if (!msg.images?.length) {
      return { role: msg.role, content: msg.content };
    }

    const contentParts: any[] = [{ type: 'text', text: msg.content }];

    for (const img of msg.images) {
      if (skipVideo && img.mediaType === 'video') {
        continue;
      }
      const dataUrl = imageDataUrls?.get(img.url);
      if (dataUrl) {
        if (img.mediaType === 'video') {
          contentParts.push({
            type: 'video_url',
            video_url: { url: dataUrl, detail: 'auto' },
          });
        } else {
          contentParts.push({
            type: 'image_url',
            image_url: { url: dataUrl, detail: 'auto' },
          });
        }
      }
    }

    // Fall back to plain string if no media actually resolved
    if (contentParts.length === 1) {
      return { role: msg.role, content: msg.content };
    }

    return { role: msg.role, content: contentParts } as any;
  });
}
```

**Step 4: Add a test for skipVideo**

In `src/test/image-api-messages.test.ts`, add:

```typescript
  test('skips video attachments when skipVideo is true', () => {
    const messages = [
      {
        id: '1',
        role: 'user',
        content: 'Check these',
        images: [
          { url: '/user/images/brainstorm/photo.png', name: 'photo.png' },
          { url: '/user/images/brainstorm/clip.mp4', name: 'clip.mp4', mediaType: 'video' as const },
        ],
      },
    ];
    const dataUrls = new Map<string, string>();
    dataUrls.set('/user/images/brainstorm/photo.png', 'data:image/png;base64,abc');
    dataUrls.set('/user/images/brainstorm/clip.mp4', 'data:video/mp4;base64,xyz');

    const result = buildApiMessages(messages as any, dataUrls, true);
    const content = result[0].content as unknown as any[];
    expect(content).toHaveLength(2); // text + image only, no video
    expect(content[1]).toEqual({
      type: 'image_url',
      image_url: { url: 'data:image/png;base64,abc', detail: 'auto' },
    });
  });
```

**Step 5: Run tests**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test`
Expected: All tests pass.

**Step 6: Verify build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds.

**Step 7: Commit**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add src/request.ts src/components/BrainstormChat.tsx src/test/image-api-messages.test.ts
git commit -m "feat: skip video attachments for models that don't support video"
```

---

### Task 9: Rebuild dist and final verification

**Files:**
- Build output: `dist/index.js`, `dist/style.css`

**Step 1: Production build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: Build succeeds, `dist/index.js` and `dist/style.css` updated.

**Step 2: Run all tests**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test`
Expected: All tests pass.

**Step 3: Commit dist**

```bash
cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat
git add dist/
git commit -m "build: rebuild dist for video support feature"
```
