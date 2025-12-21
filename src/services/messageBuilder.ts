import { buildPrompt, BuildPromptOptions, Message } from 'sillytavern-utils-lib';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { name1, st_echo, this_chid } from 'sillytavern-utils-lib/config';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { WorkingSession, ContentPart, CreatorMessage } from '../types.js';
import { CHARACTER_FIELDS, CHARACTER_LABELS, CharacterFieldName, globalContext } from '../generate.js';
import { getPrefilled } from '../parsers.js';

import * as Handlebars from 'handlebars';

export interface MessageBuilderOptions {
  mode: 'chat' | 'field';
  targetField: CharacterFieldName | string;
  userPrompt: string;
  session: WorkingSession;
  allCharacters: Character[];
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  buildPromptOptions: BuildPromptOptions;
  formatDescription: { content: string };
  includeUserMacro: boolean;
  continueFrom?: string;
  additionalContentPartsForCurrentUserMessage?: ContentPart[];
}

export class MessageBuilder {
  private static instance: MessageBuilder;

  static getInstance(): MessageBuilder {
    if (!MessageBuilder.instance) {
      MessageBuilder.instance = new MessageBuilder();
    }
    return MessageBuilder.instance;
  }

  private constructor() {}

  /**
   * Build complete message array for AI request
   */
  async buildMessages(options: MessageBuilderOptions): Promise<Message[]> {
    const {
      mode,
      targetField,
      userPrompt,
      session,
      allCharacters,
      entriesGroupByWorldName,
      buildPromptOptions,
      formatDescription,
      includeUserMacro,
      continueFrom,
      additionalContentPartsForCurrentUserMessage,
    } = options;

    const settings = settingsManager.getSettings();

    // Build template data for Handlebars compilation
    const templateData = this.buildTemplateData({
      targetField,
      userPrompt,
      session,
      allCharacters,
      entriesGroupByWorldName,
      formatDescription,
      includeUserMacro,
    });

    // Get the main context list from settings
    const mainContextList = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts
      .filter((p) => p.enabled)
      .map((p) => ({
        promptName: p.promptName,
        role: p.role,
      }));

    // Build messages array
    const messages: Message[] = [];

    for (const mainContext of mainContextList) {
      if (mainContext.promptName === 'roleplayContext' || mainContext.promptName === 'chatHistory') {
        // RP Chat (Second Class) - Flattened to text
        const selectedApi = this.getSelectedApi(buildPromptOptions);
        const prompt = await buildPrompt(selectedApi, buildPromptOptions);
        if (prompt.warnings && prompt.warnings.length > 0) {
          for (const warning of prompt.warnings) {
            st_echo('warning', warning);
          }
        }
        
        const chatOnly = (prompt.result || []).filter((m: any) => m.role === 'user' || m.role === 'assistant');
        if (chatOnly.length > 0) {
          const rpContext = this.buildRoleplayContext(chatOnly);
          messages.push({
            role: 'system', // RP context is sent as system info
            content: rpContext,
          } as Message);
        }
        continue;
      }

      if (mainContext.promptName === 'creatorChatHistory') {
        // Creator Chat (First Class) - Keep roles, wrap in <ChatHistory>
        const chatMessages = session.creatorChat?.messages ?? [];
        if (chatMessages.length > 0) {
          const { SessionService } = await import('./sessionService.js');
          const sessionService = SessionService.getInstance();
          
          // Use 'user' role for tags to ensure they stay with the chat turns during consolidation
          messages.push({ role: 'user', content: '<ChatHistory>' } as Message);
          
          const convertedMessages: Message[] = chatMessages.map((msg, index) => {
            const restoredMsg = sessionService.getMessageForAIContext(msg);
            if (
              additionalContentPartsForCurrentUserMessage &&
              Array.isArray(restoredMsg.content) &&
              restoredMsg.role === 'user' &&
              index === chatMessages.length - 1
            ) {
              const textOnlyParts = (restoredMsg.content as any[]).filter((part) => part?.type === 'text');
              return {
                role: restoredMsg.role,
                content: textOnlyParts.length > 0 ? (textOnlyParts as any) : '',
              } as Message;
            }
            return {
              role: restoredMsg.role,
              content: restoredMsg.content,
            } as Message;
          });
          messages.push(...convertedMessages);
          
          messages.push({ role: 'user', content: '</ChatHistory>' } as Message);
        }
        continue;
      }

      if (mainContext.promptName === 'taskDescription' && mode === 'chat') {
        // Skip task description if we're just chatting
        continue;
      }

      // Template-based blocks
      const promptSettings = this.getFilteredPromptSettings(settings, session);
      const prompt = promptSettings[mainContext.promptName];
      if (!prompt) {
        continue;
      }

      let contextTemplateData = structuredClone(templateData);
      if (mainContext.promptName === 'stDescription') {
        contextTemplateData['char'] = '{{char}}';
        contextTemplateData['user'] = '{{user}}';
      }

      const message: Message = {
        role: mainContext.role,
        content: Handlebars.compile(prompt.content || '', { noEscape: true })(contextTemplateData),
      };

      message.content = (message.content as string).replaceAll('{{user}}', '[[[crec_veryUniqueUserPlaceHolder]]]');
      message.content = (message.content as string).replaceAll('{{char}}', '[[[crec_veryUniqueCharPlaceHolder]]]');
      message.content = globalContext.substituteParams(message.content as string);
      message.content = (message.content as string).replaceAll('[[[crec_veryUniqueUserPlaceHolder]]]', '{{user}}');
      message.content = (message.content as string).replaceAll('[[[crec_veryUniqueCharPlaceHolder]]]', '{{char}}');

      if (message.content) {
        messages.push(message);
      }
    }

    // Reorder and consolidate system prompts ahead of chat turns for provider compatibility
    if (messages.length > 0) {
      const systemMessages: Message[] = [];
      const nonSystemMessages: Message[] = [];
      for (const m of messages) {
        if (m.role === 'system') systemMessages.push(m);
        else nonSystemMessages.push(m);
      }
      if (systemMessages.length > 1) {
        // Concatenate multiple system prompts into a single system instruction (plain text only)
        const combined = systemMessages
          .map((m) => (typeof m.content === 'string' ? (m.content as string) : ''))
          .filter(Boolean)
          .join('\n\n');
        messages.length = 0;
        messages.push({ role: 'system', content: combined } as Message, ...nonSystemMessages);
      } else if (systemMessages.length === 1) {
        messages.length = 0;
        messages.push(systemMessages[0], ...nonSystemMessages);
      }
    }

    // Add additional content parts if provided (e.g., inline images appended at the bottom)
    if (additionalContentPartsForCurrentUserMessage && additionalContentPartsForCurrentUserMessage.length > 0) {
      messages.push({
        role: 'user',
        content: additionalContentPartsForCurrentUserMessage as any, // SillyTavern providers accept content arrays
      } as Message);
    }

    // Add continuation prefill if provided (assistant prefill goes last)
    if (continueFrom) {
      const outputFormat = settings.outputFormat;
      messages.push({
        role: 'assistant',
        content: getPrefilled(continueFrom, outputFormat),
      });
    }

    return messages;
  }

  /**
   * Build template data for Handlebars compilation
   */
  private buildTemplateData(options: {
    targetField: string;
    userPrompt: string;
    session: WorkingSession;
    allCharacters: Character[];
    entriesGroupByWorldName: Record<string, WIEntry[]>;
    formatDescription: { content: string };
    includeUserMacro: boolean;
  }): Record<string, any> {
    const { targetField, userPrompt, session, allCharacters, entriesGroupByWorldName, formatDescription, includeUserMacro } = options;

    const templateData: Record<string, any> = {};

    // Basic template variables
    templateData['char'] = session.fields.name?.value ?? '{{char}}';
    templateData['user'] = includeUserMacro && name1 ? name1 : '{{user}}';
    templateData['persona'] = '{{persona}}'; // ST will replace this
    templateData['targetField'] = targetField;

    // Compile user instructions
    templateData['userInstructions'] = Handlebars.compile(userPrompt.trim(), { noEscape: true })(templateData);

    // Get field-specific instructions
    const fieldPrompt = session.draftFields[targetField]?.prompt ?? session.fields[targetField as CharacterFieldName]?.prompt ?? '';
    templateData['fieldSpecificInstructions'] = Handlebars.compile(fieldPrompt, { noEscape: true })({
      ...templateData,
      char: targetField === 'mes_example' ? '{{char}}' : templateData.char,
      user: targetField === 'mes_example' ? '{{user}}' : templateData.user,
    });

    // Active format instructions
    templateData['activeFormatInstructions'] = Handlebars.compile(formatDescription.content || '', { noEscape: true })(templateData);

    // Add selected characters
    const charactersData: Character[] = [];
    session.selectedCharacterIds.forEach((charIndex: string) => {
      const charIndexNumber = parseInt(charIndex);
      const char = allCharacters[charIndexNumber];
      if (char) {
        charactersData.push(char);
      }
    });
    templateData['characters'] = charactersData;

    // Add creator chat history
    if (!session.creatorChat) {
      session.creatorChat = { messages: [] };
    }
    if (!Array.isArray(session.creatorChat.messages)) {
      session.creatorChat.messages = [];
    }
    templateData['creatorChatHistory'] = session.creatorChat.messages;

    // Add selected lorebooks
    const lorebooksData: Record<string, WIEntry[]> = {};
    Object.entries(entriesGroupByWorldName)
      .filter(([worldName, entries]) =>
        entries.length > 0 &&
        session.selectedWorldNames.includes(worldName) &&
        entries.some((entry) => !entry.disable),
      )
      .forEach(([worldName, entries]) => {
        lorebooksData[worldName] = entries.filter((entry) => !entry.disable);
      });
    templateData['lorebooks'] = lorebooksData;

    // Add current field values with "don't send other greetings" logic
    templateData['fields'] = this.buildFieldsContext(session, targetField);

    return templateData;
  }

  /**
   * Build fields context with proper greeting handling
   */
  private buildFieldsContext(session: WorkingSession, targetField: string): Record<string, any> {
    const settings = settingsManager.getSettings();
    const coreFields: Record<string, string> = {};
    const alternateGreetingsFields: Record<string, string> = {};
    const draftFields: Record<string, string> = {};

    const isTargetAlternateGreeting = targetField.startsWith('alternate_greetings_');
    const dontSendOtherGreetings = settings.contextToSend.dontSendOtherGreetings;

    Object.entries(session.fields).forEach(([fieldName, field]) => {
      let shouldSkip = false;
      if (dontSendOtherGreetings) {
        const isAlternateGreeting = fieldName.startsWith('alternate_greetings_');
        if (isTargetAlternateGreeting) {
          // If target is alternate greeting, skip other alternate greetings and first message
          shouldSkip = (isAlternateGreeting && fieldName !== targetField) || fieldName === 'first_mes';
        } else {
          // If target is not alternate greeting, skip all alternate greetings
          shouldSkip = isAlternateGreeting;
        }
      }

      if (!shouldSkip) {
        const compiledValue = Handlebars.compile(field.value || '', { noEscape: true })({
          char: fieldName === 'mes_example' ? '{{char}}' : session.fields.name?.value ?? '{{char}}',
          user: fieldName === 'mes_example' ? '{{user}}' : '{{user}}',
          persona: '{{persona}}',
          targetField,
        });

        if (CHARACTER_FIELDS.includes(fieldName as CharacterFieldName)) {
          const labelToUse = field.label || CHARACTER_LABELS[fieldName as CharacterFieldName] || fieldName;
          coreFields[labelToUse] = compiledValue;
        } else if (fieldName.startsWith('alternate_greetings_')) {
          alternateGreetingsFields[fieldName] = compiledValue;
        }
      }
    });

    Object.entries(session.draftFields || {}).forEach(([_fieldName, field]) => {
      draftFields[field.label] = Handlebars.compile(field.value || '', { noEscape: true })({
        char: session.fields.name?.value ?? '{{char}}',
        user: '{{user}}',
        persona: '{{persona}}',
        targetField,
      });
    });

    return {
      core: coreFields,
      alternate_greetings: alternateGreetingsFields,
      draft: draftFields,
    };
  }

  /**
   * Get filtered prompt settings based on context toggles
   */
  private getFilteredPromptSettings(settings: ExtensionSettings, session: WorkingSession): Record<string, any> {
    const promptSettings: Record<string, any> = structuredClone(settings.prompts);

    if (!settings.contextToSend.stDescription) {
      delete promptSettings.stDescription;
    }
    if (!settings.contextToSend.charCard || session.selectedCharacterIds.length === 0) {
      delete promptSettings.charDefinitions;
    }
    if (!settings.contextToSend.worldInfo || session.selectedWorldNames.length === 0) {
      delete promptSettings.lorebookDefinitions;
    }
    if (!settings.contextToSend.existingFields) {
      delete promptSettings.existingFieldDefinitions;
    }
    if (!settings.contextToSend.persona) {
      delete promptSettings.personaDescription;
    }
    delete promptSettings.worldInfoCharDefinition;

    return promptSettings;
  }

  /**
   * Get the selected API from build prompt options
   */
  private getSelectedApi(buildPromptOptions: BuildPromptOptions): any {
    // We need to find the profile based on the preset name used in buildPromptOptions
    const profile = (globalContext as any).extensionSettings.connectionManager?.profiles?.find(
      (p: any) => p.preset === buildPromptOptions.presetName
    );
    if (!profile) {
      throw new Error('Connection profile not found for preset: ' + buildPromptOptions.presetName);
    }
    const selectedApi = profile.api ? (globalContext as any).CONNECT_API_MAP[profile.api].selected : undefined;
    if (!selectedApi) {
      throw new Error(`Could not determine API for profile "${profile.name}".`);
    }
    return selectedApi;
  }

  /**
   * Flatten RP chat into a single <RoleplayContext> block (Second Class)
   */
  private buildRoleplayContext(chatOnly: any[]): string {
    const { characters } = globalContext;
    const charName = (this_chid !== undefined && characters[this_chid as number]?.name) || 'Character';
    const userName = name1 || 'User';

    const formatted = chatOnly
      .map((m) => {
        const name = m.role === 'user' ? userName : charName;
        let content = '';
        if (typeof m.content === 'string') {
          content = m.content;
        } else if (Array.isArray(m.content)) {
          content = m.content
            .filter((part: any) => part.type === 'text')
            .map((part: any) => part.text)
            .join('');
        }
        return `${name}: ${content}`;
      })
      .join('\n');

    return `<RoleplayContext>\n${formatted}\n</RoleplayContext>`;
  }
}

