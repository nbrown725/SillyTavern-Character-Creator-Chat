import { z } from 'zod';
import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';
import { CHARACTER_FIELDS, alternateGreetingIndex, isAlternateGreetingKey } from './character-fields.js';
import { getGreetings, type GlobalStateResponse } from './character-state.js';
import type { CharacterState } from './revise-types.js';

export const EXTRACTION_SCHEMA_NAME = 'BrainstormCardExtraction';

/**
 * The default 1024 response tokens is fine for a single field but truncates a whole-card
 * extraction, which then fails Zod validation with nothing useful to show the user.
 */
export const MIN_EXTRACTION_RESPONSE_TOKENS = 4096;

export interface ExtractionResponse extends GlobalStateResponse {
  justification: string;
}

/**
 * Extraction is deliberately additive: no `greetings_to_remove` / `draft_fields_to_remove`.
 * "Draft a card from this conversation" should never be able to delete work, and the apply path
 * in MainPopup merges fields rather than replacing them, so removals would not propagate anyway.
 */
export const createExtractionSchema = (allFieldIds: string[], greetingCount: number) => {
  const schemaDefinition: { [key: string]: z.ZodTypeAny } = {
    justification: z
      .string()
      .describe(
        'A brief, friendly explanation of which fields you filled in and any choice you had to make between competing ideas from the conversation.',
      ),
    greetings_to_add: z
      .array(z.string())
      .optional()
      .describe('New alternate greetings to append. Only include greetings the conversation supports.'),
    draft_fields_to_add: z
      .array(
        z.object({
          label: z.string().describe('A short human-readable name for the field, e.g. "Backstory" or "Voice Notes".'),
          value: z.string().describe('The content for the field.'),
        }),
      )
      .optional()
      .describe(
        'Character material that fits none of the core card fields. Omit unless the conversation produced such material.',
      ),
  };

  if (allFieldIds.length > 0) {
    schemaDefinition.fields_to_change = z
      .array(
        z.object({
          field: z
            .enum(allFieldIds as [string, ...string[]])
            .describe('The ID of the card field to fill in, exactly as listed in the task instructions.'),
          value: z.string().describe('The finished content for the field.'),
        }),
      )
      .optional()
      .describe('Card fields to fill in from the conversation. Omit any field the conversation does not support.');
  }

  if (greetingCount > 0) {
    schemaDefinition.greetings_to_change = z
      .array(
        z.object({
          index: z
            .number()
            .int()
            .positive()
            .describe(`The 1-based index of an existing alternate greeting (1 to ${greetingCount}).`),
          value: z.string().describe('The new content for that alternate greeting.'),
        }),
      )
      .optional()
      .describe('Existing alternate greetings to rewrite.');
  }

  return z.object(schemaDefinition);
};

interface FieldRow {
  id: string;
  label: string;
  value: string;
}

/** Splits a state into the id/label/value rows the extraction template renders. */
export const describeStateForPrompt = (state: CharacterState) => {
  const coreFields: FieldRow[] = CHARACTER_FIELDS.filter((id) => state.fields[id]).map((id) => ({
    id,
    label: state.fields[id].label,
    value: state.fields[id].value,
  }));

  const greetings = Object.entries(state.fields)
    .filter(([key]) => isAlternateGreetingKey(key))
    .sort((a, b) => alternateGreetingIndex(a[0]) - alternateGreetingIndex(b[0]))
    .map(([key, field], position) => ({
      index: Number.isNaN(alternateGreetingIndex(key)) ? position + 1 : alternateGreetingIndex(key),
      value: field.value,
    }));

  const draftFields: FieldRow[] = Object.entries(state.draftFields).map(([id, field]) => ({
    id,
    label: field.label,
    value: field.value,
  }));

  return { coreFields, greetings, draftFields };
};

/**
 * Renders the extraction instruction that is appended after the brainstorm transcript.
 *
 * `char` / `user` resolve to the literal ST macros rather than real names: the template tells the
 * model to *write* `{{char}}` and `{{user}}` into the card, so substituting them here would turn
 * that instruction into nonsense.
 */
export const buildExtractionInstruction = (template: string, state: CharacterState, hint?: string): string => {
  const { coreFields, greetings, draftFields } = describeStateForPrompt(state);

  return Handlebars.compile(template, { noEscape: true })({
    char: '{{char}}',
    user: '{{user}}',
    coreFields,
    greetings,
    draftFields,
    extractionHint: hint?.trim() ?? '',
  }).trim();
};

export type ProposalKind = 'field' | 'draft-add' | 'greeting-change' | 'greeting-add';

export interface ProposalItem {
  /** Stable key used for selection; also encodes how to reconstruct this change. */
  id: string;
  kind: ProposalKind;
  label: string;
  before: string;
  after: string;
  isNew: boolean;
}

/** Flattens a model response into reviewable rows, paired with the values they would replace. */
export const buildProposalItems = (state: CharacterState, response: ExtractionResponse): ProposalItem[] => {
  const items: ProposalItem[] = [];
  const greetings = getGreetings(state);

  response.fields_to_change?.forEach((change) => {
    const target = state.fields[change.field] ?? state.draftFields[change.field];
    if (!target) return;
    const before = target.value ?? '';
    if (before === change.value) return;
    items.push({
      id: `field:${change.field}`,
      kind: 'field',
      label: target.label || change.field,
      before,
      after: change.value,
      isNew: before.trim() === '',
    });
  });

  response.greetings_to_change?.forEach((change) => {
    if (change.index < 1 || change.index > greetings.length) return;
    const before = greetings[change.index - 1] ?? '';
    if (before === change.value) return;
    items.push({
      id: `greeting-change:${change.index}`,
      kind: 'greeting-change',
      label: `Alternate Greeting ${change.index}`,
      before,
      after: change.value,
      isNew: before.trim() === '',
    });
  });

  response.greetings_to_add?.forEach((value, index) => {
    items.push({
      id: `greeting-add:${index}`,
      kind: 'greeting-add',
      label: `Alternate Greeting ${greetings.length + index + 1}`,
      before: '',
      after: value,
      isNew: true,
    });
  });

  response.draft_fields_to_add?.forEach((addition, index) => {
    items.push({
      id: `draft-add:${index}`,
      kind: 'draft-add',
      label: addition.label,
      before: '',
      after: addition.value,
      isNew: true,
    });
  });

  return items;
};

/**
 * Narrows a response to the rows the user kept. Applying the filtered response (rather than
 * diffing two states) is what makes per-row selection exact.
 */
export const filterExtractionResponse = (
  response: ExtractionResponse,
  selectedIds: ReadonlySet<string>,
): ExtractionResponse => {
  const filtered: ExtractionResponse = { justification: response.justification };

  const fields = response.fields_to_change?.filter((change) => selectedIds.has(`field:${change.field}`));
  if (fields?.length) filtered.fields_to_change = fields;

  const greetingChanges = response.greetings_to_change?.filter((change) =>
    selectedIds.has(`greeting-change:${change.index}`),
  );
  if (greetingChanges?.length) filtered.greetings_to_change = greetingChanges;

  const greetingAdds = response.greetings_to_add?.filter((_, index) => selectedIds.has(`greeting-add:${index}`));
  if (greetingAdds?.length) filtered.greetings_to_add = greetingAdds;

  const draftAdds = response.draft_fields_to_add?.filter((_, index) => selectedIds.has(`draft-add:${index}`));
  if (draftAdds?.length) filtered.draft_fields_to_add = draftAdds;

  return filtered;
};
