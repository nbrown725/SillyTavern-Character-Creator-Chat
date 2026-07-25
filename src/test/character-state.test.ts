import { describe, expect, test } from 'vitest';
import { calculateNewState, deriveDraftFieldId, getGreetings } from '../character-state.js';
import type { CharacterState } from '../revise-types.js';

const field = (label: string, value: string, prompt = '') => ({ label, value, prompt });

const makeState = (overrides: Partial<CharacterState> = {}): CharacterState => ({
  fields: {
    name: field('Name', 'Vesh'),
    description: field('Description', 'A smuggler.'),
    personality: field('Personality', ''),
    scenario: field('Scenario', ''),
    first_mes: field('First_Message', ''),
    mes_example: field('Example_Dialogue', ''),
    ...overrides.fields,
  },
  draftFields: overrides.draftFields ?? {},
});

describe('calculateNewState — field sessions', () => {
  test('replaces only the target field', () => {
    const next = calculateNewState(
      makeState(),
      { justification: 'done', response: 'A careful smuggler.' },
      'field',
      'description',
    );

    expect(next.fields.description.value).toBe('A careful smuggler.');
    expect(next.fields.name.value).toBe('Vesh');
  });

  test('leaves the previous state untouched', () => {
    const state = makeState();
    calculateNewState(state, { justification: '', response: 'changed' }, 'field', 'description');
    expect(state.fields.description.value).toBe('A smuggler.');
  });
});

describe('calculateNewState — global sessions', () => {
  test('applies core and draft field changes', () => {
    const state = makeState({ draftFields: { backstory: field('Backstory', 'old') } });

    const next = calculateNewState(
      state,
      {
        justification: '',
        fields_to_change: [
          { field: 'personality', value: 'Wary, dry humour.' },
          { field: 'backstory', value: 'new' },
        ],
      },
      'global',
    );

    expect(next.fields.personality.value).toBe('Wary, dry humour.');
    expect(next.draftFields.backstory.value).toBe('new');
  });

  test('renumbers greetings after add and remove', () => {
    const state = makeState({
      fields: {
        alternate_greetings_1: field('Alternate_Greeting_1', 'first'),
        alternate_greetings_2: field('Alternate_Greeting_2', 'second'),
      },
    });

    const next = calculateNewState(
      state,
      { justification: '', greetings_to_remove: [1], greetings_to_add: ['third'] },
      'global',
    );

    expect(getGreetings(next)).toEqual(['second', 'third']);
    expect(next.fields.alternate_greetings_1.label).toBe('Alternate_Greeting_1');
    expect(next.fields.alternate_greetings_3).toBeUndefined();
  });

  test('ignores greeting changes with an out-of-range index', () => {
    const state = makeState({ fields: { alternate_greetings_1: field('Alternate_Greeting_1', 'first') } });

    const next = calculateNewState(
      state,
      { justification: '', greetings_to_change: [{ index: 5, value: 'nope' }] },
      'global',
    );

    expect(getGreetings(next)).toEqual(['first']);
  });
});

describe('draft field creation', () => {
  test('creates a new draft field from a label', () => {
    const next = calculateNewState(
      makeState(),
      { justification: '', draft_fields_to_add: [{ label: 'Voice Notes', value: 'Clipped, never swears.' }] },
      'global',
    );

    expect(next.draftFields.voiceNotes).toEqual({
      label: 'Voice Notes',
      value: 'Clipped, never swears.',
      prompt: '',
    });
  });

  test('overwrites an existing draft field of the same name, keeping its prompt and label', () => {
    const state = makeState({ draftFields: { backstory: field('Backstory', 'old', 'my prompt') } });

    const next = calculateNewState(
      state,
      { justification: '', draft_fields_to_add: [{ label: 'Backstory', value: 'new' }] },
      'global',
    );

    expect(Object.keys(next.draftFields)).toEqual(['backstory']);
    expect(next.draftFields.backstory.value).toBe('new');
    expect(next.draftFields.backstory.prompt).toBe('my prompt');
  });

  test('does not let a draft shadow a core field', () => {
    const state = makeState();
    expect(deriveDraftFieldId('Description', state)).toBe('description2');

    const next = calculateNewState(
      state,
      { justification: '', draft_fields_to_add: [{ label: 'Description', value: 'shadow' }] },
      'global',
    );

    expect(next.fields.description.value).toBe('A smuggler.');
    expect(next.draftFields.description2.value).toBe('shadow');
  });

  test('skips additions with a blank label', () => {
    const next = calculateNewState(
      makeState(),
      { justification: '', draft_fields_to_add: [{ label: '   ', value: 'orphan' }] },
      'global',
    );

    expect(next.draftFields).toEqual({});
  });
});
