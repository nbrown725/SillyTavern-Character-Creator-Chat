import { describe, test, expect, vi } from 'vitest';

vi.mock('sillytavern-utils-lib', () => ({
  Generator: class {},
  Message: {},
}));

vi.mock('sillytavern-utils-lib/types', () => ({}));

vi.mock('sillytavern-utils-lib/config', () => ({
  st_echo: vi.fn(),
}));

vi.mock('../settings.js', () => ({
  settingsManager: { getSettings: () => ({}) },
  getThinkingLevelOverride: () => ({}),
}));

vi.mock('../schema-to-example.js', () => ({
  schemaToExample: vi.fn(),
}));

vi.mock('../parsers.js', () => ({
  parseResponse: vi.fn(),
}));

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

    const content = result[0].content as unknown as any[];
    expect(content[0]).toEqual({ type: 'text', text: 'Describe this' });
    expect(content[1]).toEqual({
      type: 'image_url',
      image_url: { url: 'data:image/png;base64,abc123', detail: 'auto' },
    });
  });

  test('strips extra fields like id and isInitial', () => {
    const messages = [{ id: '1', role: 'user', content: 'Hi', isInitial: true }];
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
    // Falls back to plain string format when no images resolve
    expect(result[0]).toEqual({ role: 'user', content: 'Describe this' });
  });

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
});
