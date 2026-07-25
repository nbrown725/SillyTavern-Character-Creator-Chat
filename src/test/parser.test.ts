import { describe, test, expect } from 'vitest';
import { parseResponse, getPrefilled } from '../parsers.js';

// NOTE: parseResponse returns the *parsed structure*. Unwrapping a single-field `response` key
// into a bare string is the caller's job (see runCharacterFieldGeneration in generate.ts).

describe('parseResponse with JSON format', () => {
  test('parses a bare JSON object', () => {
    const input = '{"response": "test message"}';
    expect(parseResponse(input, 'json')).toEqual({ response: 'test message' });
  });

  test('parses valid JSON with object response', () => {
    const input = '{"response": {"message": "test message"}}';
    expect(parseResponse(input, 'json')).toEqual({ response: { message: 'test message' } });
  });

  test('extracts content from code blocks', () => {
    const input = '```\n{"response": "test message"}\n```';
    expect(parseResponse(input, 'json')).toEqual({ response: 'test message' });
  });

  // Without a schema the parser is deliberately lenient, because a 'continue' request hands it a
  // knowingly-incomplete structure. Unparseable content falls back to the raw text rather than
  // throwing. With a schema (structured revise requests) it throws instead — see below.
  test('falls back to raw content for unparseable JSON when no schema is given', () => {
    const input = '{"response": invalid}';
    expect(parseResponse(input, 'json')).toBe(input);
  });

  test('throws on unparseable JSON when a schema is given', () => {
    const input = '{"response": invalid}';
    expect(() => parseResponse(input, 'json', { schema: { type: 'object' } })).toThrow(
      'Model response is not valid JSON',
    );
  });

  test('salvages a partially streamed response', () => {
    const input = '{\n  "response": "The story so far';
    expect(parseResponse(input, 'json')).toBe('The story so far');
  });

  test('preserves keys other than "response"', () => {
    expect(parseResponse('{"message": "test"}', 'json')).toEqual({ message: 'test' });
    expect(parseResponse('{"response": 123}', 'json')).toEqual({ response: 123 });
  });

  test('keeps whitespace inside string values', () => {
    const input = '{"response": "  test message  "}';
    expect(parseResponse(input, 'json')).toEqual({ response: '  test message  ' });
  });

  test('recovers JSON from a fenced block surrounded by prose', () => {
    const input = 'Sure, here you go:\n```json\n{"response": "hi"}\n```\nHope that helps!';
    expect(parseResponse(input, 'json')).toEqual({ response: 'hi' });
  });

  test('detailed code block', () => {
    const input = `\`\`\`json\n{\n  \"response\": \"*Nolan crashes through the front door, the wood frame splintering around him. Debbie is frozen, halfway to the door, her eyes wide with fear. Nolan’s face is a mask of cold fury as he stalks towards her.* \\\"Debbie,\\\" *he growls, his voice dangerously low.* \\\"Where is he?\\\" *He strides closer, his shadow engulfing her.* \\\"Don't lie to me, Deborah. You know exactly who I'm asking about.\\\"\\n\\n*Debbie shrinks back, clutching her chest.* \\\"Nolan… please. You can't just barge in here like this! Mark isn't here.\\\"\\n\\n*Nolan scoffs, grabbing her arm with brutal force.* \\\"Don't play coy with me. Is he with that… human? Are they conspiring against me?\\\" *He squeezes her arm tighter, his grip threatening to break bone.* \\\"Tell me the truth, or you'll regret it.\\\"\\n\\n*Debbie winces in pain, tears welling in her eyes.* \\\"He's… he's out. On patrol. Please, Nolan, you're hurting me!\\\" *Nolan releases her arm abruptly, but his gaze remains fixed and menacing.* \\\"Patrol? Or is he building a pathetic little life with humans?\\\" *He pauses, his expression shifting slightly, a flicker of something unreadable in his eyes.* \\\"I need to see what he has with {{user}}, I can not allow him to grow attached to the human. She is a distraction Debbie!\\\" *He grabs Debbie's shoulders with a strength that belies her fragility.*\"\n}\n\`\`\``;

    expect((parseResponse(input, 'json') as { response: string }).response).toContain(
      'Nolan crashes through the front door, the wood frame splintering around him.',
    );
  });
});

describe('parseResponse with XML format', () => {
  test('parses basic XML response', () => {
    const input = '<response>test message</response>';
    expect(parseResponse(input, 'xml')).toBe('test message');
  });

  test('parses XML with #text content', () => {
    const input = '<response text="123">#text content</response>';
    expect(parseResponse(input, 'xml')).toBe('#text content');
  });

  test('unwraps the <root> element but keeps its children', () => {
    const input = '<root><response>nested message</response></root>';
    expect(parseResponse(input, 'xml')).toEqual({ response: 'nested message' });
  });

  test('extracts content from code blocks', () => {
    const input = '```xml\n<response>test message</response>\n```';
    expect(parseResponse(input, 'xml')).toBe('test message');

    const input2 = '```\n<response>test message</response>\n```';
    expect(parseResponse(input2, 'xml')).toBe('test message');
  });

  test('Parse half-valid XML', () => {
    const input = '<response>test</wrongtag>';
    expect(parseResponse(input, 'xml')).toBe('test');

    const input2 = '<data>test</data>';
    expect(parseResponse(input2, 'xml')).toEqual({ data: 'test' });
  });

  // Regression: the <response> shortcut used to fire even in schema mode, throwing away sibling
  // properties (`justification`) so structured revise responses always failed Zod validation.
  test('keeps sibling properties alongside <response> when a schema is supplied', () => {
    const schema = {
      type: 'object',
      properties: { justification: { type: 'string' }, response: { type: 'string' } },
    };
    const input = '<root><justification>Made it darker.</justification><response>New text.</response></root>';
    expect(parseResponse(input, 'xml', { schema })).toEqual({
      justification: 'Made it darker.',
      response: 'New text.',
    });
  });

  // Regression: the schema-mode XML prompt used to ask for a root-less fragment, which
  // XMLValidator rejects outright with "Multiple possible root nodes found".
  test('rejects a root-less multi-element fragment in schema mode', () => {
    const schema = { type: 'object', properties: { response: { type: 'string' } } };
    const input = '<justification>a</justification><response>b</response>';
    expect(() => parseResponse(input, 'xml', { schema })).toThrow('Model response is not valid XML');
  });
});

describe('parseResponse with plaintext (none) format', () => {
  test('returns basic plaintext', () => {
    const input = 'This is a test message.';
    expect(parseResponse(input, 'none')).toBe('This is a test message.');
  });

  test('trims whitespace from plaintext', () => {
    const input = '  This has whitespace.  ';
    expect(parseResponse(input, 'none')).toBe('This has whitespace.');
  });

  test('extracts content from code blocks', () => {
    const input = '```\nThis is inside a code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a code block.');
  });

  test('extracts content from code blocks with language identifier', () => {
    const input = '```text\nThis is inside a text code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a text code block.');
  });

  test('handles empty input', () => {
    const input = '';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only whitespace', () => {
    const input = '   ';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only code block markers', () => {
    const input = '```\n```';
    expect(parseResponse(input, 'none')).toBe('');
  });

  // Regression: the old parser grabbed the *first* fenced block anywhere in the response, so a
  // first message or example dialogue containing a code block was truncated to just that block.
  // The default format prompts explicitly tell the model to fence code, so this was easy to hit.
  test('keeps prose intact when a code block appears mid-response', () => {
    const input = 'Hello there!\n\nHere is some code:\n```\nconsole.log(1)\n```\nAnd more prose after.';
    expect(parseResponse(input, 'none')).toBe(input);
  });

  test('keeps multiple code blocks intact', () => {
    const input = '```\nfirst\n```\nbetween\n```\nsecond\n```';
    expect(parseResponse(input, 'none')).toBe(input);
  });
});

describe('getPrefilled', () => {
  test('produces a resumable, correctly escaped JSON prefill', () => {
    const content = 'She said "hi"\nthen left\\ran off';
    const prefill = getPrefilled(content, 'json');

    // Closing the literal and object must yield the original string back.
    const parsed = JSON.parse(`${prefill}"\n}`);
    expect(parsed.response).toBe(content);
  });

  test('wraps content in a response tag for XML', () => {
    expect(getPrefilled('  partial  ', 'xml')).toBe('<response>partial');
  });

  test('returns trimmed content for plain text', () => {
    expect(getPrefilled('  partial  ', 'none')).toBe('partial');
  });
});
