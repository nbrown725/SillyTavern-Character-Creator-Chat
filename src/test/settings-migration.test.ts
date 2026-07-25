import { describe, expect, test, vi } from 'vitest';

// settings.ts reaches SillyTavern through generate.js at module scope; stub the runtime away so the
// migration logic can be exercised directly.
vi.mock('sillytavern-utils-lib', () => ({
  ExtensionSettingsManager: class {
    constructor(_key: string, _defaults: unknown) {}
    getSettings() {
      return {};
    }
  },
}));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: vi.fn() }));
vi.mock('../generate.js', () => ({ globalContext: {} }));

const {
  FORMAT_VERSION,
  POST_F19_VERSIONS,
  catchUpFromF19,
  DEFAULT_SETTINGS,
  DEFAULT_PROMPT_CONTENTS,
  SYSTEM_PROMPT_KEYS,
} = await import('../settings.js');
const { DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE } = await import('../constants.js');

/** The `from: '*'` entry's target. The wildcard fires whenever this sorts above the current version. */
const WILDCARD_TARGET = 'F_1.4';

describe('format version ordering', () => {
  // sillytavern-utils-lib selects migrations with `strategy.to > current` — a string comparison.
  // These assertions are the whole reason the scheme moved to zero-padded F_2.xx.

  test('the current version sorts above every version it must migrate from', () => {
    for (const stranded of POST_F19_VERSIONS) {
      expect(FORMAT_VERSION > stranded, `${FORMAT_VERSION} must sort above ${stranded}`).toBe(true);
    }
  });

  test('the wildcard target sorts below the current version, so it cannot rewind settings', () => {
    // 'F_1.4' > 'F_1.14' was true, which rewound current installs to F_1.4 and rebuilt their prompts.
    expect(WILDCARD_TARGET > FORMAT_VERSION).toBe(false);
  });

  test('demonstrates the comparison flaw the scheme works around', () => {
    expect('F_1.10' > 'F_1.9').toBe(false);
    expect('F_1.4' > 'F_1.14').toBe(true);
  });

  test('is zero-padded so the next versions keep sorting correctly', () => {
    expect(FORMAT_VERSION).toMatch(/^F_\d+\.\d{2}$/);
    expect('F_2.10' > FORMAT_VERSION).toBe(true);
    expect('F_2.01' > FORMAT_VERSION).toBe(true);
  });
});

/** A settings object as it would look on an install frozen at F_1.9. */
const strandedSettings = () => {
  const settings = structuredClone(DEFAULT_SETTINGS);
  settings.formatVersion = 'F_1.9';
  // Nothing from F_1.10 onward ever ran.
  delete (settings.prompts as Record<string, unknown>).brainstormSystemPrompt;
  delete (settings.prompts as Record<string, unknown>).brainstormExtractPrompt;
  delete (settings as Partial<typeof settings>).thinkingLevel;
  return settings;
};

describe('catchUpFromF19', () => {
  test('restores every built-in prompt the stranded install never received', () => {
    const migrated = catchUpFromF19(strandedSettings());

    expect(migrated.prompts.brainstormSystemPrompt.content).toBe(DEFAULT_PROMPT_CONTENTS.brainstormSystemPrompt);
    expect(migrated.prompts.brainstormExtractPrompt.content).toBe(DEFAULT_PROMPT_CONTENTS.brainstormExtractPrompt);
    expect(migrated.prompts.brainstormExtractPrompt.label).toBe('Brainstorm Card Extraction');
  });

  test('leaves no built-in prompt missing', () => {
    const bare = strandedSettings();
    bare.prompts = {} as typeof bare.prompts;

    const migrated = catchUpFromF19(bare);
    for (const key of SYSTEM_PROMPT_KEYS) {
      expect(migrated.prompts[key], `${key} should exist`).toBeDefined();
    }
  });

  test('backfills thinkingLevel', () => {
    expect(catchUpFromF19(strandedSettings()).thinkingLevel).toBe('default');
  });

  test('refreshes templates that are still at their defaults', () => {
    const settings = strandedSettings();
    settings.prompts.charDefinitions = { content: 'stale', isDefault: true, label: 'Character Definition Template' };

    expect(catchUpFromF19(settings).prompts.charDefinitions.content).toBe(DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE);
  });

  test('does not clobber prompts the user customised', () => {
    const settings = strandedSettings();
    settings.prompts.charDefinitions = { content: 'mine', isDefault: false, label: 'Character Definition Template' };
    settings.prompts.reviseXmlPrompt = { content: 'also mine', isDefault: false, label: 'Revise Session (XML Mode)' };

    const migrated = catchUpFromF19(settings);
    expect(migrated.prompts.charDefinitions.content).toBe('mine');
    expect(migrated.prompts.reviseXmlPrompt.content).toBe('also mine');
  });

  test('is idempotent — a rewound install may have received part of it already', () => {
    const once = catchUpFromF19(strandedSettings());
    expect(catchUpFromF19(once)).toEqual(once);
  });

  test('does not mutate the settings it is given', () => {
    const settings = strandedSettings();
    catchUpFromF19(settings);
    expect(settings.prompts.brainstormExtractPrompt).toBeUndefined();
  });
});
