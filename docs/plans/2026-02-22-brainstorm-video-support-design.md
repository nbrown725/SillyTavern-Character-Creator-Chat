# Brainstorm Video Support Design

## Overview

Add video attachment support to brainstorm session chats, alongside existing image support. For models that support video (Gemini 2.0+, etc.), videos are sent as `video_url` content parts. For models that don't, video attachments are silently skipped.

## Approach

Minimal variant: add an optional `mediaType` field to the existing `ImageAttachment` interface. Reuse the same upload endpoint, caching, and session persistence. Branch only at upload detection, UI rendering, and API message building.

## Data Model

```typescript
export interface ImageAttachment {
  url: string;
  name: string;
  mediaType?: 'image' | 'video';  // defaults to 'image' for backward compat
}
```

The `images` field name on `BrainstormMessage` stays unchanged for backward compatibility with existing persisted sessions.

## File Changes

### brainstorm-types.ts
- Add optional `mediaType?: 'image' | 'video'` to `ImageAttachment`

### image-utils.ts
- `uploadImage()`: detect video MIME type, set `mediaType: 'video'` on returned attachment
- Add 50MB size warning (toast) for video files, no hard limit
- `fileToDataUrl()` and `imageUrlToDataUrl()`: no changes needed (already handle any file type)

### BrainstormChat.tsx
- File input: change `accept` from `"image/*"` to `"image/*,video/*"`
- `addPendingImages()`: accept `video/*` MIME types alongside `image/*`
- `handlePaste()`: accept video types in paste events
- Pending preview area: render `<video>` element for video files, `<img>` for images
- Message display: render video thumbnails with play icon overlay for video attachments
- Edit mode: same video vs image rendering logic
- Click behavior: open video in new tab (same as images)

### request.ts
- `buildApiMessages()`: emit `video_url` content parts for video attachments, `image_url` for images
- Import and check `isVideoInliningSupported()` from SillyTavern's openai.js
- When video is not supported, silently skip video attachments in API messages

### SCSS styles
- Add `.video-thumbnail-wrapper` with play icon overlay styling
- Video thumbnails sized consistently with image thumbnails

### Tests (image-api-messages.test.ts)
- Video attachment emits `video_url` content part
- Mixed image + video attachments emit both types
- Backward compat: attachment without `mediaType` defaults to `image_url`

## Upload Path

The existing `/api/images/upload` endpoint accepts video formats (mp4, avi, mov, webm, etc.) in its `MEDIA_EXTENSIONS` validation list. No backend changes needed.

## Graceful Degradation

- Check `isVideoInliningSupported()` before including video content parts
- For unsupported models, video attachments are silently omitted from API messages
- Videos still display in the chat UI regardless of model support
- Users can always attach videos; they just won't be sent to non-video models

## Size Handling

- 50MB warning toast on video attachment (no hard limit)
- Videos are base64-encoded for API transmission (~33% size inflation)
- Gemini token cost: ~263 tokens/second of video

## Not Changed

- Session persistence mechanism (localStorage)
- Image data URL caching strategy
- Backend endpoints or prompt converters
- Upload endpoint (`/api/images/upload` already handles video formats)
