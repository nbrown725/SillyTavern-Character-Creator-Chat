import { ExtensionSettingsManager } from 'sillytavern-utils-lib';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  DEFAULT_CHAR_CARD_DESCRIPTION,
  DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE,
  DEFAULT_LOREBOOK_DEFINITION,
  DEFAULT_XML_FORMAT_DESC,
  DEFAULT_JSON_FORMAT_DESC,
  DEFAULT_NONE_FORMAT_DESC,
  DEFAULT_WORLD_INFO_CHARACTER_DEFINITION,
  DEFAULT_EXISTING_FIELDS_DEFINITION,
  DEFAULT_TASK_DESCRIPTION,
  DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
  DEFAULT_PERSONA_DESCRIPTION,
  DEFAULT_REVISE_JSON_PROMPT,
  DEFAULT_REVISE_XML_PROMPT,
  DEFAULT_REVISE_TASK_DESCRIPTION,
  DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
} from './constants.js';
import { globalContext } from './generate.js';

export const extensionName = 'SillyTavern-Character-Creator-Chat';
export const VERSION = '0.3.0';
export const FORMAT_VERSION = 'F_1.12';

export type ThinkingLevel = 'default' | 'min' | 'low' | 'medium' | 'high' | 'max';

export const THINKING_LEVELS: { value: ThinkingLevel; label: string }[] = [
  { value: 'default', label: 'Default (Use Preset)' },
  { value: 'min', label: 'Min' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'max', label: 'Max' },
];

export const KEYS = {
  EXTENSION: 'charCreator',
} as const;

export interface ContextToSend {
  stDescription: boolean;
  messages: {
    type: 'none' | 'all' | 'first' | 'last' | 'range';
    first?: number;
    last?: number;
    range?: {
      start: number;
      end: number;
    };
  };
  charCard: boolean;
  existingFields: boolean;
  worldInfo: boolean;
  persona: boolean;
  dontSendOtherGreetings: boolean;
}

export interface PromptSetting {
  label: string;
  content: string;
  isDefault: boolean;
}

export interface PromptPreset {
  content: string;
}

export type MessageRole = 'user' | 'assistant' | 'system';

export interface MainContextPromptBlock {
  promptName: string;
  enabled: boolean;
  role: MessageRole;
}

export interface MainContextTemplatePreset {
  prompts: MainContextPromptBlock[];
}

export type OutputFormat = 'xml' | 'json' | 'none';
export type PromptEngineeringMode = 'native' | 'json' | 'xml';

export interface ExtensionSettings {
  version: string;
  formatVersion: string;
  profileId: string;
  maxContextType: 'profile' | 'sampler' | 'custom';
  maxContextValue: number;
  maxResponseToken: number;
  outputFormat: OutputFormat;
  thinkingLevel: ThinkingLevel;
  contextToSend: ContextToSend;
  defaultPromptEngineeringMode: PromptEngineeringMode;

  // Consolidated system prompts
  prompts: {
    stDescription: PromptSetting;
    charDefinitions: PromptSetting;
    lorebookDefinitions: PromptSetting;
    xmlFormat: PromptSetting;
    jsonFormat: PromptSetting;
    noneFormat: PromptSetting;
    worldInfoCharDefinition: PromptSetting;
    existingFieldDefinitions: PromptSetting;
    taskDescription: PromptSetting;
    outputFormatInstructions: PromptSetting;
    personaDescription: PromptSetting;
    reviseJsonPrompt: PromptSetting;
    reviseXmlPrompt: PromptSetting;
    reviseTaskDescription: PromptSetting;
    brainstormSystemPrompt: PromptSetting;
    [key: string]: PromptSetting;
  };

  // Generic Prompt Presets
  promptPreset: string;
  promptPresets: Record<string, PromptPreset>;

  mainContextTemplatePreset: string;
  mainContextTemplatePresets: Record<string, MainContextTemplatePreset>;

  // World Info
  showSaveAsWorldInfoEntry: {
    show: boolean;
  };
}

export type SystemPromptKey =
  | 'stDescription'
  | 'charDefinitions'
  | 'lorebookDefinitions'
  | 'xmlFormat'
  | 'jsonFormat'
  | 'noneFormat'
  | 'worldInfoCharDefinition'
  | 'existingFieldDefinitions'
  | 'taskDescription'
  | 'outputFormatInstructions'
  | 'personaDescription'
  | 'reviseJsonPrompt'
  | 'reviseXmlPrompt'
  | 'reviseTaskDescription'
  | 'brainstormSystemPrompt';

export const SYSTEM_PROMPT_KEYS: Array<SystemPromptKey> = [
  'stDescription',
  'charDefinitions',
  'lorebookDefinitions',
  'xmlFormat',
  'jsonFormat',
  'noneFormat',
  'worldInfoCharDefinition',
  'existingFieldDefinitions',
  'taskDescription',
  'outputFormatInstructions',
  'personaDescription',
  'reviseJsonPrompt',
  'reviseXmlPrompt',
  'reviseTaskDescription',
  'brainstormSystemPrompt',
];

// Map keys to their default values
export const DEFAULT_PROMPT_CONTENTS: Record<SystemPromptKey, string> = {
  stDescription: DEFAULT_CHAR_CARD_DESCRIPTION,
  charDefinitions: DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE,
  lorebookDefinitions: DEFAULT_LOREBOOK_DEFINITION,
  xmlFormat: DEFAULT_XML_FORMAT_DESC,
  jsonFormat: DEFAULT_JSON_FORMAT_DESC,
  noneFormat: DEFAULT_NONE_FORMAT_DESC,
  worldInfoCharDefinition: DEFAULT_WORLD_INFO_CHARACTER_DEFINITION,
  existingFieldDefinitions: DEFAULT_EXISTING_FIELDS_DEFINITION,
  taskDescription: DEFAULT_TASK_DESCRIPTION,
  outputFormatInstructions: DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
  personaDescription: DEFAULT_PERSONA_DESCRIPTION,
  reviseJsonPrompt: DEFAULT_REVISE_JSON_PROMPT,
  reviseXmlPrompt: DEFAULT_REVISE_XML_PROMPT,
  reviseTaskDescription: DEFAULT_REVISE_TASK_DESCRIPTION,
  brainstormSystemPrompt: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
};

export const DEFAULT_SETTINGS: ExtensionSettings = {
  version: VERSION,
  formatVersion: FORMAT_VERSION,
  profileId: '',
  maxContextType: 'profile',
  maxContextValue: 16384,
  maxResponseToken: 1024,
  outputFormat: 'xml',
  thinkingLevel: 'default',
  contextToSend: {
    stDescription: true,
    messages: {
      type: 'last',
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10,
      },
    },
    charCard: true,
    existingFields: true,
    worldInfo: true,
    persona: true,
    dontSendOtherGreetings: false,
  },
  defaultPromptEngineeringMode: 'native',

  // Updated prompts structure
  prompts: {
    stDescription: {
      content: DEFAULT_PROMPT_CONTENTS.stDescription,
      isDefault: true,
      label: 'ST/Char Card Description',
    },
    charDefinitions: {
      content: DEFAULT_PROMPT_CONTENTS.charDefinitions,
      isDefault: true,
      label: 'Character Definition Template',
    },
    lorebookDefinitions: {
      content: DEFAULT_PROMPT_CONTENTS.lorebookDefinitions,
      isDefault: true,
      label: 'Lorebook Definition Template',
    },
    xmlFormat: {
      content: DEFAULT_PROMPT_CONTENTS.xmlFormat,
      isDefault: true,
      label: 'XML Format Description',
    },
    jsonFormat: {
      content: DEFAULT_PROMPT_CONTENTS.jsonFormat,
      isDefault: true,
      label: 'JSON Format Description',
    },
    noneFormat: {
      content: DEFAULT_PROMPT_CONTENTS.noneFormat,
      isDefault: true,
      label: 'Plain Text Format Description',
    },
    worldInfoCharDefinition: {
      content: DEFAULT_PROMPT_CONTENTS.worldInfoCharDefinition,
      isDefault: true,
      label: 'World Info Character Definition Template',
    },
    existingFieldDefinitions: {
      content: DEFAULT_EXISTING_FIELDS_DEFINITION,
      isDefault: true,
      label: 'Existing Fields Definition Template',
    },
    taskDescription: {
      content: DEFAULT_TASK_DESCRIPTION,
      isDefault: true,
      label: 'Task Description Template',
    },
    outputFormatInstructions: {
      content: DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
      isDefault: true,
      label: 'Output Format Instructions',
    },
    personaDescription: {
      content: DEFAULT_PROMPT_CONTENTS.personaDescription,
      isDefault: true,
      label: 'User Persona Description Template',
    },
    reviseJsonPrompt: {
      content: DEFAULT_PROMPT_CONTENTS.reviseJsonPrompt,
      isDefault: true,
      label: 'Revise Session (JSON Mode)',
    },
    reviseXmlPrompt: {
      content: DEFAULT_PROMPT_CONTENTS.reviseXmlPrompt,
      isDefault: true,
      label: 'Revise Session (XML Mode)',
    },
    reviseTaskDescription: {
      content: DEFAULT_PROMPT_CONTENTS.reviseTaskDescription,
      isDefault: true,
      label: 'Revise Session Task Description',
    },
    brainstormSystemPrompt: {
      content: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
      isDefault: true,
      label: 'Brainstorm System Prompt',
    },
  },

  // Generic Prompt Presets
  promptPreset: 'default',
  promptPresets: {
    default: {
      content:
        'Generate the field content based on the chat history and existing character details. Be creative but consistent.',
    },
  },

  mainContextTemplatePreset: 'default',
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: true,
          promptName: 'chatHistory',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'stDescription',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'charDefinitions',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'lorebookDefinitions',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'existingFieldDefinitions',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'personaDescription',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'outputFormatInstructions',
          role: 'system',
        },
        {
          enabled: true,
          promptName: 'taskDescription',
          role: 'user',
        },
      ],
    },
  },

  // World Info
  showSaveAsWorldInfoEntry: {
    show: false,
  },
};

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

/**
 * Returns the override payload for the current thinking level setting.
 * When 'default', returns an empty object (no override).
 */
export function getThinkingLevelOverride(): Record<string, any> {
  const settings = settingsManager.getSettings();
  if (settings.thinkingLevel && settings.thinkingLevel !== 'default') {
    return { reasoning_effort: settings.thinkingLevel };
  }
  return {};
}

export const settingsManager = new ExtensionSettingsManager<ExtensionSettings>(KEYS.EXTENSION, DEFAULT_SETTINGS);

export async function initializeSettings(): Promise<void> {
  return new Promise((resolve, _reject) => {
    settingsManager
      .initializeSettings({
        strategy: [
          {
            from: '*',
            to: 'F_1.4',
            action(previous?: Record<string, any>) {
              return {
                profileId: previous?.profileId ?? '',
                maxContextType: previous?.maxContextType ?? 'profile',
                maxContextValue: previous?.maxContextValue ?? 16384,
                maxResponseToken: previous?.maxResponseToken ?? 1024,
                outputFormat: previous?.outputFormat ?? 'xml',
                contextToSend: {
                  ...previous?.contextToSend,
                  persona: true,
                },

                // Updated prompts structure
                prompts: {
                  stDescription: {
                    content: DEFAULT_PROMPT_CONTENTS.stDescription,
                    isDefault: true,
                    label: 'ST/Char Card Description',
                  },
                  charDefinitions: {
                    content: DEFAULT_PROMPT_CONTENTS.charDefinitions,
                    isDefault: true,
                    label: 'Character Definition Template',
                  },
                  lorebookDefinitions: {
                    content: DEFAULT_PROMPT_CONTENTS.lorebookDefinitions,
                    isDefault: true,
                    label: 'Lorebook Definition Template',
                  },
                  xmlFormat: {
                    content: DEFAULT_PROMPT_CONTENTS.xmlFormat,
                    isDefault: true,
                    label: 'XML Format Description',
                  },
                  jsonFormat: {
                    content: DEFAULT_PROMPT_CONTENTS.jsonFormat,
                    isDefault: true,
                    label: 'JSON Format Description',
                  },
                  noneFormat: {
                    content: DEFAULT_PROMPT_CONTENTS.noneFormat,
                    isDefault: true,
                    label: 'Plain Text Format Description',
                  },
                  worldInfoCharDefinition: {
                    content: DEFAULT_PROMPT_CONTENTS.worldInfoCharDefinition,
                    isDefault: true,
                    label: 'World Info Character Definition Template',
                  },
                  existingFieldDefinitions: {
                    content: DEFAULT_EXISTING_FIELDS_DEFINITION,
                    isDefault: true,
                    label: 'Existing Fields Definition Template',
                  },
                  taskDescription: {
                    content: DEFAULT_TASK_DESCRIPTION,
                    isDefault: true,
                    label: 'Task Description Template',
                  },
                  outputFormatInstructions: {
                    content: DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
                    isDefault: true,
                    label: 'Output Format Instructions',
                  },
                  personaDescription: {
                    content: DEFAULT_PROMPT_CONTENTS.personaDescription,
                    isDefault: true,
                    label: 'User Persona Description Template',
                  },
                },

                // Generic Prompt Presets
                promptPreset: previous?.promptPreset ?? 'default',
                promptPresets: previous?.promptPresets ?? {
                  default: {
                    content:
                      'Generate the field content based on the chat history and existing character details. Be creative but consistent.',
                  },
                },

                mainContextTemplatePreset: 'default',
                mainContextTemplatePresets: {
                  default: {
                    prompts: [
                      {
                        enabled: true,
                        promptName: 'chatHistory',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'stDescription',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'charDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'lorebookDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'existingFieldDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'personaDescription',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'outputFormatInstructions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'taskDescription',
                        role: 'user',
                      },
                    ],
                  },
                },

                // World Info
                showSaveAsWorldInfoEntry: {
                  show: previous?.showSaveAsWorldInfoEntry?.show ?? false,
                },
              };
            },
          },
          {
            from: 'F_1.4',
            to: 'F_1.5',
            action(previous?: {
              prompts: Record<string, PromptSetting>;
              mainContextTemplatePresets: Record<string, MainContextTemplatePreset>;
            }): {
              prompts: Record<string, PromptSetting>;
              mainContextTemplatePresets: Record<string, MainContextTemplatePreset>;
            } {
              return {
                ...previous,
                // Update persona
                prompts: {
                  ...previous?.prompts,
                  personaDescription: {
                    content: DEFAULT_PROMPT_CONTENTS.personaDescription,
                    isDefault: true,
                    label: 'User Persona Description Template',
                  },
                },
                // Reset default main context
                mainContextTemplatePresets: {
                  ...previous?.mainContextTemplatePresets,
                  default: {
                    prompts: [
                      {
                        enabled: true,
                        promptName: 'chatHistory',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'stDescription',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'charDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'lorebookDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'existingFieldDefinitions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'personaDescription',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'outputFormatInstructions',
                        role: 'system',
                      },
                      {
                        enabled: true,
                        promptName: 'taskDescription',
                        role: 'user',
                      },
                    ],
                  },
                },
              };
            },
          },
          {
            from: 'F_1.5',
            to: 'F_1.6',
            async action(previous: { prompts: Record<SystemPromptKey, PromptSetting> }): Promise<{
              prompts: Record<SystemPromptKey, PromptSetting>;
            }> {
              await st_echo('info', `[${extensionName}] Added Alternate Greetings.`);
              return {
                ...previous,
                prompts: {
                  ...previous?.prompts,
                  stDescription: {
                    content: DEFAULT_PROMPT_CONTENTS.stDescription,
                    isDefault: true,
                    label: 'ST/Char Card Description',
                  },
                  charDefinitions: {
                    content: DEFAULT_PROMPT_CONTENTS.charDefinitions,
                    isDefault: true,
                    label: 'Character Definition Template',
                  },
                  worldInfoCharDefinition: {
                    content: DEFAULT_PROMPT_CONTENTS.worldInfoCharDefinition,
                    isDefault: true,
                    label: 'World Info Character Definition Template',
                  },
                  existingFieldDefinitions: {
                    content: DEFAULT_EXISTING_FIELDS_DEFINITION,
                    isDefault: true,
                    label: 'Existing Fields Definition Template',
                  },
                },
              };
            },
          },
          {
            from: 'F_1.6',
            to: 'F_1.7',
            async action(previous: ExtensionSettings): Promise<ExtensionSettings> {
              const response = {
                ...previous,
              } as ExtensionSettings;
              if (previous.prompts.stDescription.isDefault) {
                response.prompts.stDescription.content = DEFAULT_CHAR_CARD_DESCRIPTION;
              }
              return response;
            },
          },
          {
            from: 'F_1.7',
            to: 'F_1.8',
            action(previous: ExtensionSettings): ExtensionSettings {
              const response = {
                ...previous,
                defaultPromptEngineeringMode: 'native',
              } as ExtensionSettings;

              if (!response.prompts) response.prompts = {} as any;
              response.prompts.reviseJsonPrompt = {
                content: DEFAULT_PROMPT_CONTENTS.reviseJsonPrompt,
                isDefault: true,
                label: 'Revise Session (JSON Mode)',
              };
              response.prompts.reviseXmlPrompt = {
                content: DEFAULT_PROMPT_CONTENTS.reviseXmlPrompt,
                isDefault: true,
                label: 'Revise Session (XML Mode)',
              };
              response.prompts.reviseTaskDescription = {
                content: DEFAULT_PROMPT_CONTENTS.reviseTaskDescription,
                isDefault: true,
                label: 'Revise Session Task Description',
              };

              // Update templates if they were default
              if (previous.prompts.charDefinitions.isDefault) {
                response.prompts.charDefinitions.content = DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE;
              }
              if (previous.prompts.lorebookDefinitions.isDefault) {
                response.prompts.lorebookDefinitions.content = DEFAULT_LOREBOOK_DEFINITION;
              }
              if (previous.prompts.existingFieldDefinitions.isDefault) {
                response.prompts.existingFieldDefinitions.content = DEFAULT_EXISTING_FIELDS_DEFINITION;
              }

              return response;
            },
          },
          {
            from: 'F_1.8',
            to: 'F_1.9',
            action(previous: ExtensionSettings): ExtensionSettings {
              // Update `stDescription` prompt if it was default
              const response = {
                ...previous,
              } as ExtensionSettings;

              if (previous.prompts.stDescription.isDefault) {
                response.prompts.stDescription.content = DEFAULT_CHAR_CARD_DESCRIPTION;
              }
              return response;
            },
          },
          {
            from: 'F_1.9',
            to: 'F_1.10',
            action(previous: ExtensionSettings): ExtensionSettings {
              const response = {
                ...previous,
              } as ExtensionSettings;

              // Add brainstormSystemPrompt if it doesn't exist
              if (!response.prompts.brainstormSystemPrompt) {
                response.prompts.brainstormSystemPrompt = {
                  content: DEFAULT_BRAINSTORM_SYSTEM_PROMPT,
                  isDefault: true,
                  label: 'Brainstorm System Prompt',
                };
              }

              return response;
            },
          },
          {
            from: 'F_1.10',
            to: 'F_1.11',
            action(previous: ExtensionSettings): ExtensionSettings {
              return {
                ...previous,
                thinkingLevel: previous.thinkingLevel ?? 'default',
              };
            },
          },
          {
            from: 'F_1.11',
            to: 'F_1.12',
            action(previous: ExtensionSettings): ExtensionSettings {
              const response = structuredClone(previous) as ExtensionSettings;

              // The old default asked for a root-less XML fragment, which is not valid XML and
              // was rejected by the parser before it ever reached the model's content. Refresh it
              // for anyone who never customised the template.
              if (response.prompts?.reviseXmlPrompt?.isDefault !== false) {
                response.prompts.reviseXmlPrompt = {
                  content: DEFAULT_PROMPT_CONTENTS.reviseXmlPrompt,
                  isDefault: true,
                  label: 'Revise Session (XML Mode)',
                };
              }

              return response;
            },
          },
        ],
      })
      .then((_result) => {
        resolve();
      })
      .catch((error) => {
        console.error(`[${extensionName}] Error initializing settings:`, error);
        st_echo('error', `[${extensionName}] Failed to initialize settings: ${error.message}`);
        globalContext.Popup.show
          .confirm(
            `[${extensionName}] Failed to load settings. This might be due to an update. Reset settings to default?`,
            'Extension Error',
          )
          .then((result: boolean) => {
            if (result) {
              settingsManager.resetSettings();
              st_echo('success', `[${extensionName}] Settings reset. Reloading may be required.`);
            } else {
              st_echo('warning', `[${extensionName}] Continuing with default settings for this session.`);
            }
          })
          .catch((popupError: any) => {
            console.error(`[${extensionName}] Failed to show settings reset prompt:`, popupError);
          })
          // Resolve either way. Leaving this promise pending would stop init() from ever running,
          // silently killing the whole extension with no further indication of why.
          .finally(() => resolve());
      });
  });
}
