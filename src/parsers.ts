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
/** Matches the first fenced code block appearing anywhere in the response. */
const INNER_CODE_BLOCK_REGEX = /```(?:\w+\n|\n)?([\s\S]*?)```/;

/**
 * Builds the ordered list of strings worth attempting to parse.
 *
 * Order matters. A response that is entirely one code fence is almost always the model
 * following the format instructions, so that is tried first. The raw text comes next so that
 * a bare (unfenced) structure still parses, and — importantly — so a response whose *content*
 * happens to contain a code fence is not silently truncated to just that fence. Only if both
 * fail do we fall back to the first inner fence, which covers models that wrap the structure
 * in a fence but surround it with prose.
 */
function extractCandidates(content: string): string[] {
  const trimmed = content.trim();
  const candidates: string[] = [];

  const fullMatch = trimmed.match(FULL_CODE_BLOCK_REGEX);
  if (fullMatch) candidates.push(fullMatch[1].trim());

  candidates.push(trimmed);

  const innerMatch = trimmed.match(INNER_CODE_BLOCK_REGEX);
  if (innerMatch) candidates.push(innerMatch[1].trim());

  return [...new Set(candidates)];
}

function parseXmlCandidate(candidate: string, options: ParseOptions): object | string {
  // For 'continue' functionality, the XML might be incomplete. We parse what we can.
  // The validator is too strict for partial content, so we only apply it when a schema
  // tells us the model was asked for a complete, well-formed structure.
  if (options.schema) {
    const validationResult = XMLValidator.validate(candidate);
    if (validationResult !== true) {
      throw new Error(`Model response is not valid XML: ${validationResult.err.msg}`);
    }
  }

  let parsedXml = xmlParser.parse(candidate);
  if (parsedXml.root) {
    parsedXml = parsedXml.root;
  } else if (!options.schema && parsedXml.response !== undefined) {
    // Handle simple <response> tag for single-field generation. Skipped when a schema is in
    // play: there the <response> tag is one property among several, and unwrapping it here
    // would throw away its siblings (e.g. `justification`) and fail schema validation.
    return parsedXml.response;
  }
  if (options.schema) {
    ensureArray(parsedXml, options.schema);
  }
  return parsedXml;
}

export function parseResponse(
  content: string,
  format: 'xml' | 'json' | 'none',
  options: ParseOptions = {},
): object | string {
  const candidates = extractCandidates(content);
  // `none` is raw prose — never go hunting for an inner code block to unwrap.
  const cleanedContent = candidates[0] ?? '';

  try {
    switch (format) {
      case 'xml':
      case 'json': {
        let lastError: any;
        for (const candidate of candidates) {
          try {
            return format === 'xml' ? parseXmlCandidate(candidate, options) : JSON.parse(candidate);
          } catch (error: any) {
            lastError = error;
          }
        }
        throw lastError ?? new Error(`Model response is not valid ${format.toUpperCase()}.`);
      }

      case 'none':
        return cleanedContent;

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    // If parsing fails, it might be because the AI is streaming an incomplete structure.
    // For single-field generation, we can often just return the cleaned text.
    if (format !== 'none' && !options.schema) {
      const responseMatch = cleanedContent.match(/<response>([\s\S]*)/);
      if (responseMatch) return responseMatch[1];
      const jsonMatch = cleanedContent.match(/"response":\s*"([\s\S]*)/);
      if (jsonMatch) return jsonMatch[1].replace(/"\s*}\s*$/, '');
      return cleanedContent; // Fallback to raw cleaned content
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
