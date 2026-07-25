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
  LEGACY_FORMAT_VERSIONS,
  catchUpToLatest,
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
    for (const stranded of LEGACY_FORMAT_VERSIONS) {
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
    const parts = FORMAT_VERSION.match(/^F_(\d+)\.(\d{2})$/);
    expect(parts, `${FORMAT_VERSION} must stay zero-padded`).not.toBeNull();

    const [, major, minor] = parts!;
    const bump = (by: number) => `F_${major}.${String(Number(minor) + by).padStart(2, '0')}`;

    // The padding is what keeps the *next* bumps sorting above this one — an unpadded
    // 'F_2.1' would sort below 'F_2.01' and strand everyone all over again.
    expect(bump(1) > FORMAT_VERSION).toBe(true);
    expect(bump(10) > FORMAT_VERSION).toBe(true);
    expect(bump(10) > bump(1)).toBe(true);
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

describe('catchUpToLatest', () => {
  test('restores every built-in prompt the stranded install never received', () => {
    const migrated = catchUpToLatest(strandedSettings());

    expect(migrated.prompts.brainstormSystemPrompt.content).toBe(DEFAULT_PROMPT_CONTENTS.brainstormSystemPrompt);
    expect(migrated.prompts.brainstormExtractPrompt.content).toBe(DEFAULT_PROMPT_CONTENTS.brainstormExtractPrompt);
    expect(migrated.prompts.brainstormExtractPrompt.label).toBe('Brainstorm Card Extraction');
  });

  test('leaves no built-in prompt missing', () => {
    const bare = strandedSettings();
    bare.prompts = {} as typeof bare.prompts;

    const migrated = catchUpToLatest(bare);
    for (const key of SYSTEM_PROMPT_KEYS) {
      expect(migrated.prompts[key], `${key} should exist`).toBeDefined();
    }
  });

  test('backfills thinkingLevel', () => {
    expect(catchUpToLatest(strandedSettings()).thinkingLevel).toBe('default');
  });

  test('refreshes templates that are still at their defaults', () => {
    const settings = strandedSettings();
    settings.prompts.charDefinitions = { content: 'stale', isDefault: true, label: 'Character Definition Template' };

    expect(catchUpToLatest(settings).prompts.charDefinitions.content).toBe(DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE);
  });

  test('does not clobber prompts the user customised', () => {
    const settings = strandedSettings();
    settings.prompts.charDefinitions = { content: 'mine', isDefault: false, label: 'Character Definition Template' };
    settings.prompts.reviseXmlPrompt = { content: 'also mine', isDefault: false, label: 'Revise Session (XML Mode)' };

    const migrated = catchUpToLatest(settings);
    expect(migrated.prompts.charDefinitions.content).toBe('mine');
    expect(migrated.prompts.reviseXmlPrompt.content).toBe('also mine');
  });

  test('is idempotent — a rewound install may have received part of it already', () => {
    const once = catchUpToLatest(strandedSettings());
    expect(catchUpToLatest(once)).toEqual(once);
  });

  test('gives brainstorm its own context template', () => {
    const settings = strandedSettings();
    delete (settings as Partial<typeof settings>).brainstormContextTemplatePresets;
    delete (settings as Partial<typeof settings>).brainstormContextTemplatePreset;

    const migrated = catchUpToLatest(settings);
    expect(migrated.brainstormContextTemplatePreset).toBe('default');
    expect(migrated.brainstormContextTemplatePresets.default.prompts.map((p) => p.promptName)).toContain(
      'brainstormSystemPrompt',
    );
  });

  test('does not rebuild a customised brainstorm template', () => {
    const settings = strandedSettings();
    settings.brainstormContextTemplatePresets = {
      default: { prompts: [{ enabled: false, promptName: 'personaDescription', role: 'user' }] },
    };

    const prompts = catchUpToLatest(settings).brainstormContextTemplatePresets.default.prompts;
    // The user's own entry survives untouched, ordering included; only the extraction prompt is
    // appended, and only because it was absent.
    expect(prompts[0]).toEqual({ enabled: false, promptName: 'personaDescription', role: 'user' });
    expect(prompts.map((p) => p.promptName)).toEqual(['personaDescription', 'brainstormExtractPrompt']);
  });

  test('adds the extraction prompt to every brainstorm preset that lacks it', () => {
    const settings = strandedSettings();
    settings.brainstormContextTemplatePresets = {
      default: { prompts: [{ enabled: true, promptName: 'brainstormSystemPrompt', role: 'system' }] },
      custom: { prompts: [] },
    };

    const migrated = catchUpToLatest(settings);
    for (const name of ['default', 'custom']) {
      const block = migrated.brainstormContextTemplatePresets[name].prompts.find(
        (p) => p.promptName === 'brainstormExtractPrompt',
      );
      expect(block, `${name} should carry the extraction prompt`).toEqual({
        enabled: true,
        promptName: 'brainstormExtractPrompt',
        role: 'user',
      });
    }
  });

  test('respects an extraction block the user has already switched off', () => {
    const settings = strandedSettings();
    settings.brainstormContextTemplatePresets = {
      default: { prompts: [{ enabled: false, promptName: 'brainstormExtractPrompt', role: 'system' }] },
    };

    expect(catchUpToLatest(settings).brainstormContextTemplatePresets.default.prompts).toEqual([
      { enabled: false, promptName: 'brainstormExtractPrompt', role: 'system' },
    ]);
  });

  test('does not mutate the settings it is given', () => {
    const settings = strandedSettings();
    catchUpToLatest(settings);
    expect(settings.prompts.brainstormExtractPrompt).toBeUndefined();
  });
});
