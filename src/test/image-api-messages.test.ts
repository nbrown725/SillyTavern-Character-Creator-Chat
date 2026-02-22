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
    expect(result[0].role).toBe('user');
    const content = result[0].content as unknown as any[];
    expect(content).toHaveLength(1);
    expect(content[0]).toEqual({ type: 'text', text: 'Describe this' });
  });
});
