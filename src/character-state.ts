import {
  ALTERNATE_GREETING_PREFIX,
  CHARACTER_FIELDS,
  alternateGreetingIndex,
  convertToVariableName,
  isAlternateGreetingKey,
} from './character-fields.js';
import type { CharacterState, FieldSpecificResponse, GlobalResponse } from './revise-types.js';

/** A draft field the model wants to create, which has no ID yet. */
export interface DraftFieldAddition {
  label: string;
  value: string;
}

/**
 * A global-shaped response. Brainstorm extraction additionally proposes brand new draft fields;
 * revise sessions never set `draft_fields_to_add`, so that branch is inert for them.
 */
export type GlobalStateResponse = GlobalResponse & {
  draft_fields_to_add?: DraftFieldAddition[];
};

export const getGreetings = (state: CharacterState): string[] => {
  return Object.entries(state.fields)
    .filter(([key]) => isAlternateGreetingKey(key))
    .sort((a, b) => alternateGreetingIndex(a[0]) - alternateGreetingIndex(b[0]))
    .map(([, field]) => field.value);
};

/**
 * Derives a draft field ID from a human label.
 *
 * An ID that collides with an existing *draft* field is returned as-is: the caller is updating
 * that field, which is what a user means by "add a Backstory field" when one already exists.
 * Collisions with core fields or greetings are suffixed instead, since those must not be
 * shadowed by a draft.
 */
export const deriveDraftFieldId = (label: string, state: CharacterState): string => {
  const base = convertToVariableName(label) || 'draftField';
  const isReserved = (id: string) =>
    CHARACTER_FIELDS.includes(id as any) || isAlternateGreetingKey(id) || !!state.fields[id];

  if (!isReserved(base)) {
    return base;
  }

  let suffix = 2;
  while (isReserved(`${base}${suffix}`)) {
    suffix++;
  }
  return `${base}${suffix}`;
};

/**
 * Applies a model response to a character state, returning a new state. Shared by revise sessions
 * and brainstorm card extraction so the two cannot drift on greeting renumbering or draft handling.
 */
export const calculateNewState = (
  prevState: CharacterState,
  response: FieldSpecificResponse | GlobalStateResponse,
  sessionType: 'field' | 'global',
  targetFieldId?: string,
): CharacterState => {
  const newState = structuredClone(prevState);

  if (sessionType === 'field' && targetFieldId) {
    const res = response as FieldSpecificResponse;
    if (newState.fields[targetFieldId]) {
      newState.fields[targetFieldId].value = res.response;
    }
    // No draft field support for field-specific sessions for now.
    return newState;
  }

  if (sessionType === 'global') {
    const res = response as GlobalStateResponse;
    let currentGreetings = getGreetings(newState);
    let greetingsModified = false;

    if (res.fields_to_change?.length) {
      for (const change of res.fields_to_change) {
        if (newState.fields[change.field]) {
          // Handles core and greeting fields
          newState.fields[change.field].value = change.value;
        } else if (newState.draftFields[change.field]) {
          // Handles draft fields
          newState.draftFields[change.field].value = change.value;
        }
      }
    }

    if (res.draft_fields_to_add?.length) {
      for (const addition of res.draft_fields_to_add) {
        const label = addition.label.trim();
        if (!label) continue;
        const id = deriveDraftFieldId(label, newState);
        const existing = newState.draftFields[id];
        newState.draftFields[id] = {
          value: addition.value,
          // Keep the prompt of a draft field we are overwriting; the user wrote it.
          prompt: existing?.prompt ?? '',
          label: existing?.label ?? label,
        };
      }
    }

    if (res.draft_fields_to_remove?.length) {
      for (const fieldId of res.draft_fields_to_remove) {
        if (newState.draftFields[fieldId]) {
          delete newState.draftFields[fieldId];
        }
      }
    }

    if (res.greetings_to_change?.length) {
      greetingsModified = true;
      for (const change of res.greetings_to_change) {
        // The AI provides a 1-based index.
        if (change.index > 0 && change.index <= currentGreetings.length) {
          currentGreetings[change.index - 1] = change.value;
        }
      }
    }

    if (res.greetings_to_remove?.length) {
      greetingsModified = true;
      const indicesToRemove = new Set(res.greetings_to_remove.map((i) => i - 1)); // convert to 0-based
      currentGreetings = currentGreetings.filter((_, index) => !indicesToRemove.has(index));
    }

    if (res.greetings_to_add?.length) {
      greetingsModified = true;
      currentGreetings.push(...res.greetings_to_add);
    }

    if (greetingsModified) {
      // After all operations, rebuild the greeting fields in the state.
      Object.keys(newState.fields).forEach((key) => {
        if (isAlternateGreetingKey(key)) {
          delete newState.fields[key];
        }
      });

      currentGreetings.forEach((greeting, index) => {
        const fieldName = `${ALTERNATE_GREETING_PREFIX}${index + 1}`;
        newState.fields[fieldName] = {
          value: greeting,
          prompt: '', // Prompts are not managed in revise sessions.
          label: `Alternate_Greeting_${index + 1}`,
        };
      });
    }
  }
  return newState;
};
