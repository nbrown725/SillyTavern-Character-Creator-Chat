import * as Handlebars from 'handlebars';
import { BrainstormMessage } from './brainstorm-types.js';
import { ExtensionSettings, settingsManager } from './settings.js';
import { Session, globalContext } from './generate.js';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { selected_group, this_chid } from 'sillytavern-utils-lib/config';

export async function buildInitialBrainstormMessages(
  fields: Session['fields'],
  draftFields: Session['draftFields'],
  mainContextTemplatePreset: string,
  contextToSend: ExtensionSettings['contextToSend'],
  sessionForContext: Pick<Session, 'selectedCharacterIndexes' | 'selectedWorldNames'>,
): Promise<BrainstormMessage[]> {
  const settings = settingsManager.getSettings();
  const preset = settings.mainContextTemplatePresets[mainContextTemplatePreset];
  if (!preset) {
    throw new Error(`Main context template preset "${mainContextTemplatePreset}" not found.`);
  }

  const initialMessages: BrainstormMessage[] = [];

  const resolvedContext = {
    user: globalContext.name1 || 'You',
    char: fields.name?.value || 'Character',
    persona: globalContext.powerUserSettings.persona_description,
  };

  const templateData: Record<string, any> = {
    ...resolvedContext,
    fields: {
      core: Object.fromEntries(
        Object.entries(fields)
          .filter(([k]) => !k.startsWith('alternate_greetings_'))
          .map(([, v]) => [v.label, v.value]),
      ),
      alternate_greetings: contextToSend.dontSendOtherGreetings
        ? {}
        : Object.fromEntries(
            Object.entries(fields)
              .filter(([k]) => k.startsWith('alternate_greetings_'))
              .map(([, v]) => [v.label, v.value]),
          ),
      draft: Object.fromEntries(Object.entries(draftFields).map(([, v]) => [v.label, v.value])),
    },
  };

  if (contextToSend.charCard) {
    const charactersData: Character[] = [];
    sessionForContext.selectedCharacterIndexes.forEach((charIndex) => {
      const char = globalContext.characters[parseInt(charIndex)];
      if (char) {
        charactersData.push(char);
      }
    });
    templateData['characters'] = charactersData;
  }

  if (contextToSend.worldInfo) {
    const lorebooksData: Record<string, WIEntry[]> = {};
    await Promise.all(
      sessionForContext.selectedWorldNames.map(async (name) => {
        const worldInfo = await globalContext.loadWorldInfo(name);
        if (worldInfo) {
          lorebooksData[name] = Object.values(worldInfo.entries).filter((entry) => !entry.disable);
        }
      }),
    );
    templateData['lorebooks'] = lorebooksData;
  }

  // Always inject the brainstorm system prompt first
  const brainstormPrompt = settings.prompts.brainstormSystemPrompt;
  if (brainstormPrompt?.content) {
    let content = Handlebars.compile(brainstormPrompt.content, { noEscape: true })(templateData);
    content = globalContext.substituteParams(content);
    if (content.trim()) {
      initialMessages.push({
        id: `im-${initialMessages.length}`,
        role: 'system',
        content: content.trim(),
        isInitial: true,
      });
    }
  }

  // Then iterate through the preset's prompts for context
  for (const block of preset.prompts) {
    if (!block.enabled) continue;

    // Respect contextToSend settings
    if (block.promptName === 'stDescription' && !contextToSend.stDescription) continue;
    if (block.promptName === 'charDefinitions' && !contextToSend.charCard) continue;
    if (block.promptName === 'lorebookDefinitions' && !contextToSend.worldInfo) continue;
    if (block.promptName === 'existingFieldDefinitions' && !contextToSend.existingFields) continue;
    if (block.promptName === 'personaDescription' && !contextToSend.persona) continue;
    if (block.promptName === 'chatHistory' && contextToSend.messages.type === 'none') continue;
    if (this_chid === undefined && !selected_group && block.promptName === 'chatHistory') continue;

    // Skip chat history for brainstorm sessions (no placeholder mechanism needed)
    if (block.promptName === 'chatHistory') continue;

    // Skip generation-specific prompts that don't apply to brainstorming
    const irrelevantPrompts = [
      'taskDescription',
      'outputFormatInstructions',
      'reviseTaskDescription',
      'reviseJsonPrompt',
      'reviseXmlPrompt',
      'brainstormSystemPrompt',
    ];
    if (irrelevantPrompts.includes(block.promptName)) continue;

    const promptSetting = settings.prompts[block.promptName];
    if (!promptSetting || promptSetting.content.includes('{{activeFormatInstructions}}')) continue;

    let content = Handlebars.compile(promptSetting.content, { noEscape: true })(templateData);
    content = globalContext.substituteParams(content);

    if (content.trim()) {
      initialMessages.push({
        id: `im-${initialMessages.length}`,
        role: block.role,
        content: content.trim(),
        isInitial: true,
      });
    }
  }

  return initialMessages;
}
