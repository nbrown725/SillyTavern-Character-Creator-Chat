import { ImageAttachment } from './brainstorm-types.js';
import { st_echo } from 'sillytavern-utils-lib/config';

const globalContext = SillyTavern.getContext();

const VIDEO_SIZE_WARNING_BYTES = 50 * 1024 * 1024; // 50MB

/** Maps MIME subtypes that don't match file extensions to the correct extension. */
const MIME_TO_EXT: Record<string, string> = {
  'x-msvideo': 'avi',
  quicktime: 'mov',
  'x-matroska': 'mkv',
  'x-ms-wmv': 'wmv',
  'x-flv': 'flv',
  '3gpp': '3gp',
};

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

/** Monotonic counter so files uploaded in the same millisecond don't collide on the server. */
let uploadCounter = 0;

/**
 * Uploads a media file (image or video) to the ST server and returns an ImageAttachment.
 * Uses the existing /api/images/upload endpoint which accepts both image and video formats.
 */
export async function uploadImage(file: File): Promise<ImageAttachment> {
  const isVideo = file.type.startsWith('video/');

  if (isVideo && file.size > VIDEO_SIZE_WARNING_BYTES) {
    st_echo(
      'warning',
      `Video "${file.name}" is ${(file.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`,
    );
  }

  const dataUrl = await fileToDataUrl(file);
  const base64Data = dataUrl.split(',')[1];
  const mimeSubtype = file.type.split('/')[1] || 'png';
  const extension = MIME_TO_EXT[mimeSubtype] || mimeSubtype;
  // Attaching several files at once fires these uploads in the same tick, so `Date.now()` alone
  // produces identical names and the server overwrites all but the last.
  const fileNamePrefix = `brainstorm_${Date.now()}_${uploadCounter++}`;

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
