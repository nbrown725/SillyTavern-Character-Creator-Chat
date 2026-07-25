import { XMLParser, XMLValidator } from 'fast-xml-parser';

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  trimValues: true,
  allowBooleanAttributes: true,
});

export interface ParseOptions {
  schema?: any;
}

function ensureArray(data: any, schema: any) {
  if (!schema || !data || !schema.properties) {
    return;
  }

  for (const key in schema.properties) {
    if (!data.hasOwnProperty(key)) continue;

    const propSchema = schema.properties[key];
    let propData = data[key];

    // Ensure the property is an array if the schema requires it and it's not one already.
    if (propSchema.type === 'array' && !Array.isArray(propData)) {
      propData = [propData];
      data[key] = propData;
    }

    // Recurse into objects or arrays of objects.
    if (propSchema.type === 'object' && typeof propData === 'object' && propData !== null) {
      ensureArray(propData, propSchema);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'object' && Array.isArray(propData)) {
      propData.forEach((item) => ensureArray(item, propSchema.items));
    }

    // Coerce types to match schema, for both single properties and items within an array.
    if (propSchema.type === 'string' && typeof propData !== 'string') {
      data[key] = String(propData);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'string' && Array.isArray(propData)) {
      data[key] = propData.map(String);
    }
  }
}

/**
 * Matches when the *entire* response is a single fenced code block. The body may not itself
 * contain a fence, otherwise two adjacent blocks would be swallowed as one.
 */
const FULL_CODE_BLOCK_REGEX = /^```(?:\w+)?[ \t]*\r?\n?((?:(?!```)[\s\S])*?)\r?\n?```$/;

/**
 * Returns the *last* fenced code block in the response, or null if there is none.
 * Reasoning models often sketch an example inside their thinking and then emit the real answer
 * in a final fence, so the last block is the one to trust.
 */
function extractLastCodeBlock(content: string): string | null {
  const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  let lastMatch: string | null = null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    lastMatch = match[1].trim();
  }

  return lastMatch;
}

function extractStringValue(data: any): string {
  if (data === null || data === undefined) {
    return '';
  }
  if (typeof data !== 'object') {
    return String(data).trim();
  }
  if ('#text' in data) {
    return extractStringValue(data['#text']);
  }
  if ('response' in data) {
    return extractStringValue(data.response);
  }
  if ('message' in data) {
    return extractStringValue(data.message);
  }

  const firstValue = Object.values(data)[0];
  return extractStringValue(firstValue);
}

export function parseResponse(
  content: string,
  format: 'xml' | 'json' | 'none',
  options: ParseOptions = {},
): object | string {
  const trimmed = content.trim();

  // Plain text is returned as-authored. Unwrapping the last fence here would truncate a first
  // message or example dialogue that merely *contains* a code block — and the default format
  // prompts explicitly instruct the model to fence code, so that is easy to hit. Only strip the
  // fence when it wraps the entire response.
  if (format === 'none') {
    const fullBlockMatch = trimmed.match(FULL_CODE_BLOCK_REGEX);
    return fullBlockMatch ? fullBlockMatch[1].trim() : trimmed;
  }

  // Extract content from inside code blocks, handling language identifiers
  const codeBlockContent = extractLastCodeBlock(content);
  let cleanedContent = codeBlockContent ?? trimmed;

  try {
    switch (format) {
      case 'xml': {
        // For 'continue' functionality, the XML might be incomplete. We parse what we can.
        // The validator is too strict for partial content, so we bypass it in those cases.
        if (options.schema) {
          const validationResult = XMLValidator.validate(cleanedContent);
          if (validationResult !== true) {
            throw new Error(`Model response is not valid XML: ${validationResult.err.msg}`);
          }
        }
        let parsedXml = xmlParser.parse(cleanedContent);
        if (parsedXml.root) {
          parsedXml = parsedXml.root;
        } else if (!options.schema && parsedXml.response !== undefined) {
          // Handle simple <response> tag for single-field generation. Skipped when a schema is in
          // play: there the <response> tag is one property among several, and unwrapping it here
          // would throw away its siblings (e.g. `justification`) and fail schema validation.
          return extractStringValue(parsedXml.response);
        }
        if (options.schema) {
          ensureArray(parsedXml, options.schema);
          return parsedXml;
        }
        return extractStringValue(parsedXml);
      }

      case 'json': {
        const parsedJson = JSON.parse(cleanedContent);
        return options.schema ? parsedJson : extractStringValue(parsedJson);
      }

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    // If parsing fails, it might be because the AI is streaming an incomplete structure.
    // For single-field generation, we can often just return the cleaned text.
    if (!options.schema) {
      const responseMatch = cleanedContent.match(/<response>([\s\S]*)/);
      if (responseMatch) return responseMatch[1].replace(/<\/[\s\S]*$/, '').trim();
      const jsonMatch = cleanedContent.match(/"response":\s*"([\s\S]*)/);
      if (jsonMatch) return jsonMatch[1].replace(/"\s*}\s*$/, '');
    }

    console.error(`Error parsing response in format '${format}':`, error);
    console.error('Raw content received:', content);

    if (format === 'xml') {
      if (error.message.startsWith('Model response is not valid XML:')) {
        throw error;
      }
      throw new Error(`Model response is not valid XML: ${error.message}`);
    }
    if (format === 'json') {
      throw new Error('Model response is not valid JSON.');
    }
    throw new Error(`Failed to parse response as ${format}: ${error.message}`);
  }
}

/**
 * Gets the prefilled incomplete message for continuing generation
 * @param content The current content to continue from
 * @param format The expected format ('xml', 'json', 'none')
 * @returns Prefilled incomplete message in the specified format
 */
export function getPrefilled(content: string, format: 'xml' | 'json' | 'none'): string {
  const trimmedContent = content.trim();
  switch (format) {
    case 'xml':
      return `<response>${trimmedContent}`;
    case 'json':
      // JSON.stringify handles quotes, backslashes, newlines and control characters; slicing off
      // the trailing quote leaves the string literal open so the model can continue it.
      return `{\n  "response": ${JSON.stringify(trimmedContent).slice(0, -1)}`;
    case 'none':
      return trimmedContent;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}
