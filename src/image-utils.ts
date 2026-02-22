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
