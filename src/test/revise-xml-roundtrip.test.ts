import { describe, test, expect } from 'vitest';
import * as Handlebars from 'handlebars';
import { z } from 'zod';
import { schemaToExample } from '../schema-to-example.js';
import { parseResponse } from '../parsers.js';
import { DEFAULT_REVISE_XML_PROMPT } from '../constants.js';

// Mirrors FieldSpecificResponseSchema in revise-types.ts, declared locally so this test does not
// pull in sillytavern-utils-lib (which cannot resolve outside a running SillyTavern page).
const FieldSpecificResponseSchema = z.object({
  justification: z.string(),
  response: z.string(),
});

/**
 * Walks the same path as makeStructuredRequest in XML prompt-engineering mode: render the
 * instruction template, then parse and validate what the model sends back.
 */
describe('revise session XML mode round-trip', () => {
  const jsonSchema = z.toJSONSchema(FieldSpecificResponseSchema);
  const example = schemaToExample(jsonSchema, 'xml');
  const renderedPrompt = Handlebars.compile(DEFAULT_REVISE_XML_PROMPT, { noEscape: true, strict: true })({
    example_response: example,
    schema: JSON.stringify(jsonSchema, null, 2),
  });

  test('the example shown to the model is wrapped in a single root element', () => {
    // schemaToExample emits root-less fragments by design; the template must supply the root.
    // Without it the response is not well-formed XML and XMLValidator rejects it outright.
    expect(example).not.toContain('<root>');
    expect(renderedPrompt).toContain('<root>');
    expect(renderedPrompt).toContain('</root>');
  });

  test('the example in the prompt is itself parseable and schema-valid', () => {
    const exampleResponse = `<root>\n${example}\n</root>`;
    const parsed = parseResponse(exampleResponse, 'xml', { schema: jsonSchema });
    expect(FieldSpecificResponseSchema.safeParse(parsed).success).toBe(true);
  });

  test('a realistic fenced model response parses and validates', () => {
    const modelReply = [
      '```xml',
      '<root>',
      '  <justification>Leaned harder into her sardonic streak.</justification>',
      '  <response>A wiry ex-courier who answers every question with another question.</response>',
      '</root>',
      '```',
    ].join('\n');

    const parsed = parseResponse(modelReply, 'xml', { schema: jsonSchema });
    const result = FieldSpecificResponseSchema.safeParse(parsed);

    expect(result.success).toBe(true);
    expect(result.data?.justification).toBe('Leaned harder into her sardonic streak.');
    expect(result.data?.response).toBe('A wiry ex-courier who answers every question with another question.');
  });
});
