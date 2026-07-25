import { describe, expect, test } from 'vitest';
import * as Handlebars from 'handlebars';
import '../handlebars-helpers.js';
import { applyMacroLiterals, isMacroLiteralPrompt, substituteParamsPreservingMacros } from '../prompt-macros.js';

/** Stands in for ST's substituteParams, which resolves {{user}}/{{char}} among other macros. */
const fakeSubstituteParams = (value: string) =>
  value.replaceAll('{{user}}', 'Alice').replaceAll('{{char}}', 'Vesh').replaceAll('{{persona}}', 'a scavenger');

// Mirrors how the builders populate data: `persona` maps to itself so it survives Handlebars and
// is resolved later by substituteParams.
const templateData = { user: 'Alice', char: 'Vesh', persona: '{{persona}}' };

/** The full pipeline a prompt goes through: Handlebars, then substituteParams. */
const render = (content: string, promptName: string) =>
  substituteParamsPreservingMacros(
    Handlebars.compile(content, { noEscape: true })(applyMacroLiterals(templateData, promptName)),
    fakeSubstituteParams,
  );

describe('macro-teaching prompts', () => {
  test('only stDescription is treated as macro-teaching', () => {
    expect(isMacroLiteralPrompt('stDescription')).toBe(true);
    expect(isMacroLiteralPrompt('charDefinitions')).toBe(false);
    expect(isMacroLiteralPrompt('brainstormSystemPrompt')).toBe(false);
  });

  test('example dialogue in the card guide survives verbatim', () => {
    const guide = '<START>\n{{user}}: "Are you alright?"\n{{char}}: *He sets the pen down.*';
    expect(render(guide, 'stDescription')).toBe(guide);
  });

  test('prose instructions about the macros survive verbatim', () => {
    expect(render('Never narrate {{user}}’s actions.', 'stDescription')).toBe('Never narrate {{user}}’s actions.');
    expect(render('Stop where {{user}} must respond', 'stDescription')).toBe('Stop where {{user}} must respond');
  });

  test('macros escaped for display are left alone either way', () => {
    // A prompt may show the macros escaped so they are visible rather than resolved.
    const escaped = '| `\\{\\{user\\}\\}` | User character name |';
    expect(render(escaped, 'stDescription')).toBe(escaped);
    expect(render(escaped, 'charDefinitions')).toBe(escaped);
  });
});

describe('ordinary prompts', () => {
  test('resolve the macros to the character being written', () => {
    expect(render('Write for {{char}} opposite {{user}}.', 'charDefinitions')).toBe('Write for Vesh opposite Alice.');
  });

  test('other macros still reach substituteParams', () => {
    expect(render('Persona: {{persona}}', 'charDefinitions')).toBe('Persona: a scavenger');
  });

  test('a macro absent from the template data is blanked by Handlebars, as before', () => {
    // Pre-existing behaviour, unchanged by the shield — noted so it is not mistaken for a regression.
    expect(render('Roll: {{unmapped}}', 'charDefinitions')).toBe('Roll: ');
  });
});

describe('substituteParamsPreservingMacros', () => {
  test('shields macros that Handlebars left behind, whatever the prompt', () => {
    // Field values carry their own macros — example dialogue especially — and those are content,
    // not references to be resolved during prompt assembly.
    const fieldValue = '{{char}}: "You brought the cargo?"\n{{user}}: "Most of it."';
    expect(substituteParamsPreservingMacros(fieldValue, fakeSubstituteParams)).toBe(fieldValue);
  });

  test('still applies substituteParams to everything else', () => {
    expect(substituteParamsPreservingMacros('{{persona}} and {{user}}', fakeSubstituteParams)).toBe(
      'a scavenger and {{user}}',
    );
  });

  test('known limitation: a prompt containing the placeholder literal comes back as a macro', () => {
    // The shield swaps macros out and back by sentinel, so a prompt that already contains the
    // sentinel is rewritten. The sentinel is deliberately unique enough that this cannot happen by
    // accident, and generate.ts has always behaved this way; asserted so the behaviour is known
    // rather than discovered.
    const odd = 'literally [[[crec_veryUniqueUserPlaceHolder]]] in the text';
    expect(substituteParamsPreservingMacros(odd, fakeSubstituteParams)).toBe('literally {{user}} in the text');
  });
});

describe('applyMacroLiterals', () => {
  test('does not mutate the template data it is given', () => {
    const data = { user: 'Alice', char: 'Vesh' };
    applyMacroLiterals(data, 'stDescription');
    expect(data).toEqual({ user: 'Alice', char: 'Vesh' });
  });

  test('returns the same object for prompts that are not macro-teaching', () => {
    const data = { user: 'Alice', char: 'Vesh' };
    expect(applyMacroLiterals(data, 'charDefinitions')).toBe(data);
  });
});
