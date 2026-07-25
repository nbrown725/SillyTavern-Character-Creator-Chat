/**
 * Keeping `{{user}}` / `{{char}}` intact through prompt assembly.
 *
 * Both are consumed twice on the way to the model: Handlebars resolves them against the template
 * data, and ST's `substituteParams` resolves whatever survives. That is correct for prompts that
 * talk *about* this character, and wrong for prompts that teach the macros themselves — the ST/char
 * card guide is full of `{{user}}:` / `{{char}}:` examples that must reach the model verbatim.
 *
 * Deliberately free of imports so the rules can be unit tested without the ST runtime.
 */

const USER_PLACEHOLDER = '[[[crec_veryUniqueUserPlaceHolder]]]';
const CHAR_PLACEHOLDER = '[[[crec_veryUniqueCharPlaceHolder]]]';

/**
 * Prompts whose `{{user}}` / `{{char}}` are guidance about the macros rather than references to the
 * character being written.
 */
export const isMacroLiteralPrompt = (promptName: string): boolean => promptName === 'stDescription';

/**
 * Returns template data for one prompt. For macro-teaching prompts, `char` and `user` resolve to
 * the macros themselves, so Handlebars rewrites `{{user}}` to `{{user}}` instead of a real name.
 */
export const applyMacroLiterals = <T extends Record<string, any>>(templateData: T, promptName: string): T => {
  if (!isMacroLiteralPrompt(promptName)) {
    return templateData;
  }
  return { ...templateData, char: '{{char}}', user: '{{user}}' };
};

/**
 * Runs ST's `substituteParams` without letting it consume `{{user}}` / `{{char}}`.
 *
 * Applies to every prompt, not just the macro-teaching ones: field values carry macros of their own
 * (example dialogue especially), and those should reach the model as written too.
 */
export const substituteParamsPreservingMacros = (
  content: string,
  substituteParams: (value: string) => string,
): string => {
  const shielded = content.replaceAll('{{user}}', USER_PLACEHOLDER).replaceAll('{{char}}', CHAR_PLACEHOLDER);
  return substituteParams(shielded).replaceAll(USER_PLACEHOLDER, '{{user}}').replaceAll(CHAR_PLACEHOLDER, '{{char}}');
};
