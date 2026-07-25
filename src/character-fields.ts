/**
 * Field identities and naming rules for the character card.
 *
 * Deliberately free of imports that touch `SillyTavern` or `sillytavern-utils-lib` at module
 * scope, so pure logic (state application, prompt assembly) can depend on it and still be unit
 * tested without stubbing the whole ST runtime.
 */

export type CharacterFieldName = 'name' | 'description' | 'personality' | 'scenario' | 'first_mes' | 'mes_example';

export const CHARACTER_FIELDS: CharacterFieldName[] = [
  'name',
  'description',
  'personality',
  'scenario',
  'first_mes',
  'mes_example',
];

export const CHARACTER_LABELS: Record<CharacterFieldName, string> = {
  name: 'Name',
  description: 'Description',
  personality: 'Personality',
  scenario: 'Scenario',
  first_mes: 'First_Message',
  mes_example: 'Example_Dialogue',
};

export interface CharacterField {
  prompt: string;
  value: string;
  label: string;
}

export const ALTERNATE_GREETING_PREFIX = 'alternate_greetings_';

export const isAlternateGreetingKey = (key: string): boolean => key.startsWith(ALTERNATE_GREETING_PREFIX);

/** `alternate_greetings_3` -> 3. Returns NaN for keys that are not greetings. */
export const alternateGreetingIndex = (key: string): number => parseInt(key.split('_')[2]);

export function convertToVariableName(key: string) {
  // Remove non-ASCII and special characters
  const normalized = key.replace(/[^\w\s]/g, '');

  // Split by whitespace and filter out empty parts
  const parts = normalized.split(/\s+/).filter(Boolean);

  let firstWordPrinted = false;
  return parts
    .map((word, _) => {
      // Remove numbers from the start of words
      const cleanWord = word.replace(/^\d+/, '');
      // Convert to camelCase
      if (cleanWord) {
        const result = firstWordPrinted
          ? `${cleanWord[0].toUpperCase()}${cleanWord.slice(1).toLowerCase()}`
          : cleanWord.toLowerCase();
        if (!firstWordPrinted) {
          firstWordPrinted = true;
        }
        return result;
      }

      return '';
    })
    .join('');
}
