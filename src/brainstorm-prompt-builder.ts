import * as Handlebars from 'handlebars';
import { BrainstormMessage } from './brainstorm-types.js';
import { ExtensionSettings, settingsManager } from './settings.js';
import { Session, globalContext } from './generate.js';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export async function buildInitialBrainstormMessages(
  fields: Session['fields'],
  draftFields: Session['draftFields'],
  brainstormContextTemplatePreset: string,
  contextToSend: ExtensionSettings['contextToSend'],
  sessionForContext: Pick<Session, 'selectedCharacterIndexes' | 'selectedWorldNames'>,
): Promise<BrainstormMessage[]> {
  const settings = settingsManager.getSettings();
  // Brainstorm has its own template, separate from the one driving field generation and revise
  // sessions, so brainstorm-only prompts can be ordered here without leaking into those flows.
  // Presets can be renamed or deleted out from under the selection; fall back rather than throw.
  const preset =
    settings.brainstormContextTemplatePresets?.[brainstormContextTemplatePreset] ??
    settings.brainstormContextTemplatePresets?.['default'];
  if (!preset) {
    throw new Error(`Brainstorm context template preset "${brainstormContextTemplatePreset}" not found.`);
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

  // The preset drives the whole opening context, brainstormSystemPrompt included — its position
  // and role are whatever the user ordered them to be.
  for (const block of preset.prompts) {
    if (!block.enabled) continue;

    // Respect contextToSend settings
    if (block.promptName === 'stDescription' && !contextToSend.stDescription) continue;
    if (block.promptName === 'charDefinitions' && !contextToSend.charCard) continue;
    if (block.promptName === 'lorebookDefinitions' && !contextToSend.worldInfo) continue;
    if (block.promptName === 'existingFieldDefinitions' && !contextToSend.existingFields) continue;
    if (block.promptName === 'personaDescription' && !contextToSend.persona) continue;

    // Only two prompts cannot work here, whatever the template says. Everything else in the list
    // is the user's choice, since this template is brainstorm's alone.
    //
    // Brainstorm sessions have no chat-history placeholder mechanism, so chatHistory is skipped;
    // "Messages to Include" therefore has no effect on brainstorm sessions.
    if (block.promptName === 'chatHistory') continue;
    // Appended after the transcript by the extraction call, never part of the opening context.
    if (block.promptName === 'brainstormExtractPrompt') continue;

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
