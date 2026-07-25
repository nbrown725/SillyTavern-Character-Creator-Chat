import { describe, expect, test } from 'vitest';
import { z } from 'zod';
import { DEFAULT_BRAINSTORM_EXTRACT_PROMPT } from '../constants.js';
import {
  EXTRACT_PROMPT_NAME,
  ExtractionResponse,
  buildExtractionInstruction,
  buildProposalItems,
  createExtractionSchema,
  filterExtractionResponse,
  resolveExtractionBlock,
} from '../brainstorm-extract.js';
import { calculateNewState } from '../character-state.js';
import type { CharacterState } from '../revise-types.js';

const field = (label: string, value: string) => ({ label, value, prompt: '' });

const state: CharacterState = {
  fields: {
    name: field('Name', ''),
    description: field('Description', 'A smuggler.'),
    personality: field('Personality', ''),
    scenario: field('Scenario', ''),
    first_mes: field('First_Message', ''),
    mes_example: field('Example_Dialogue', ''),
    alternate_greetings_1: field('Alternate_Greeting_1', 'Docking bay hello.'),
  },
  draftFields: { backstory: field('Backstory', 'Grew up dockside.') },
};

describe('extraction instruction', () => {
  const rendered = buildExtractionInstruction(DEFAULT_BRAINSTORM_EXTRACT_PROMPT, state);

  test('lists field IDs alongside labels so the model can match the schema enum', () => {
    expect(rendered).toContain('`first_mes` (First_Message)');
    expect(rendered).toContain('`description` (Description) — A smuggler.');
  });

  test('marks empty fields rather than rendering a blank', () => {
    expect(rendered).toContain('`name` (Name) — *empty*');
  });

  test('includes existing greetings and draft fields', () => {
    expect(rendered).toContain('Greeting 1 — Docking bay hello.');
    expect(rendered).toContain('`backstory` (Backstory) — Grew up dockside.');
  });

  test('keeps {{char}} and {{user}} literal so the model writes the macros', () => {
    expect(rendered).toContain('Use {{char}} and {{user}} rather than literal names');
    expect(rendered).toContain('`{{user}}:` / `{{char}}:`');
  });

  test('omits the hint block unless a hint is given', () => {
    expect(rendered).not.toContain('asked you to focus on this');
    const withHint = buildExtractionInstruction(DEFAULT_BRAINSTORM_EXTRACT_PROMPT, state, '  use the second name  ');
    expect(withHint).toContain('**The user has asked you to focus on this:** use the second name');
  });
});

describe('extraction schema', () => {
  test('rejects field IDs outside the supplied list', () => {
    const schema = createExtractionSchema(['name', 'description'], 1);
    const result = schema.safeParse({
      justification: 'x',
      fields_to_change: [{ field: 'not_a_field', value: 'y' }],
    });
    expect(result.success).toBe(false);
  });

  test('is additive only — no removal keys are exposed', () => {
    const json = z.toJSONSchema(createExtractionSchema(['name'], 2)) as any;
    expect(Object.keys(json.properties)).not.toContain('greetings_to_remove');
    expect(Object.keys(json.properties)).not.toContain('draft_fields_to_remove');
  });

  test('omits greeting rewrites when the card has no greetings', () => {
    const json = z.toJSONSchema(createExtractionSchema(['name'], 0)) as any;
    expect(Object.keys(json.properties)).not.toContain('greetings_to_change');
  });

  test('a single available field still yields a valid one-value enum', () => {
    const schema = createExtractionSchema(['name'], 0);
    expect((z.toJSONSchema(schema) as any).properties.fields_to_change.items.properties.field.enum).toEqual(['name']);
    expect(schema.safeParse({ justification: 'x', fields_to_change: [{ field: 'name', value: 'Vesh' }] }).success).toBe(
      true,
    );
  });

  test('drops fields_to_change entirely when no fields exist, leaving the rest usable', () => {
    // Defensive: MainPopup always seeds all six core fields, so this should be unreachable.
    const schema = createExtractionSchema([], 0);
    expect(Object.keys((z.toJSONSchema(schema) as any).properties)).toEqual([
      'justification',
      'greetings_to_add',
      'draft_fields_to_add',
    ]);
    expect(
      schema.safeParse({ justification: 'x', draft_fields_to_add: [{ label: 'Backstory', value: 'y' }] }).success,
    ).toBe(true);
  });
});

describe('proposal items', () => {
  const response: ExtractionResponse = {
    justification: 'Drafted the card.',
    fields_to_change: [
      { field: 'name', value: 'Vesh Corrand' },
      { field: 'description', value: 'A smuggler who runs cargo the long way round.' },
      { field: 'scenario', value: '' },
    ],
    greetings_to_change: [{ index: 1, value: 'Rewritten docking bay hello.' }],
    greetings_to_add: ['A new greeting.'],
    draft_fields_to_add: [{ label: 'Voice Notes', value: 'Clipped.' }],
  };

  const items = buildProposalItems(state, response);

  test('flags empty targets as new and populated ones as overwrites', () => {
    expect(items.find((i) => i.id === 'field:name')?.isNew).toBe(true);
    expect(items.find((i) => i.id === 'field:description')?.isNew).toBe(false);
  });

  test('drops proposals that would not change anything', () => {
    // `scenario` is already empty and the model returned an empty string for it.
    expect(items.some((i) => i.id === 'field:scenario')).toBe(false);
  });

  test('numbers added greetings after the existing ones', () => {
    expect(items.find((i) => i.id === 'greeting-add:0')?.label).toBe('Alternate Greeting 2');
  });

  test('pairs each row with the value it would replace', () => {
    const greetingRow = items.find((i) => i.id === 'greeting-change:1');
    expect(greetingRow?.before).toBe('Docking bay hello.');
    expect(greetingRow?.after).toBe('Rewritten docking bay hello.');
  });

  test('applying a selected subset changes only those rows', () => {
    const selected = new Set(['field:name', 'draft-add:0']);
    const next = calculateNewState(state, filterExtractionResponse(response, selected), 'global');

    expect(next.fields.name.value).toBe('Vesh Corrand');
    expect(next.draftFields.voiceNotes.value).toBe('Clipped.');
    // Deselected rows are untouched.
    expect(next.fields.description.value).toBe('A smuggler.');
    expect(next.fields.alternate_greetings_1.value).toBe('Docking bay hello.');
    expect(next.fields.alternate_greetings_2).toBeUndefined();
  });

  test('an empty selection produces no changes at all', () => {
    const next = calculateNewState(state, filterExtractionResponse(response, new Set()), 'global');
    expect(next).toEqual(state);
  });
});

describe('extraction block resolution', () => {
  const preset = (enabled: boolean, role: 'user' | 'system' = 'user') => ({
    prompts: [
      { promptName: 'brainstormSystemPrompt', enabled: true, role: 'system' as const },
      { promptName: EXTRACT_PROMPT_NAME, enabled, role },
    ],
  });

  test('returns the role the template assigns', () => {
    expect(resolveExtractionBlock(preset(true, 'system'))).toEqual({ role: 'system' });
  });

  test('returns null when the block is disabled', () => {
    expect(resolveExtractionBlock(preset(false))).toBeNull();
  });

  test('returns null when the block has been removed from the template', () => {
    expect(resolveExtractionBlock({ prompts: [] })).toBeNull();
  });

  test('returns null when there is no preset at all', () => {
    expect(resolveExtractionBlock(undefined)).toBeNull();
  });
});
