import { buildPresetSelect } from 'sillytavern-utils-lib';
import { settingsManager } from '../settings.js';

export function setupPresetsUI(popupContainer: HTMLElement) {
  const settings = settingsManager.getSettings();
  const promptTextarea = popupContainer.querySelector('#charCreator_prompt') as HTMLTextAreaElement;

  buildPresetSelect('#charCreatorPopup #charCreator_promptPreset', {
    initialValue: settings.promptPreset,
    initialList: Object.keys(settings.promptPresets),
    readOnlyValues: ['default'],
    onSelectChange: async (_previousValue, newValue) => {
      const newPresetValue = newValue ?? 'default';
      settings.promptPreset = newPresetValue;
      settingsManager.saveSettings();
      promptTextarea.value = settings.promptPresets[newPresetValue]?.content ?? '';
    },
    create: {
      onAfterCreate: (value) => {
        const currentPreset = settings.promptPresets[settings.promptPreset];
        settings.promptPresets[value] = {
          content: currentPreset?.content ?? '',
        };
      },
    },
    rename: {
      onAfterRename: (previousValue, newValue) => {
        settings.promptPresets[newValue] = settings.promptPresets[previousValue];
        delete settings.promptPresets[previousValue];
      },
    },
    delete: {
      onAfterDelete: (value) => {
        delete settings.promptPresets[value];
      },
    },
  });

  promptTextarea.value = settings.promptPresets[settings.promptPreset]?.content ?? '';
  promptTextarea.addEventListener('change', () => {
    if (settings.promptPresets[settings.promptPreset]) {
      settings.promptPresets[settings.promptPreset].content = promptTextarea.value;
      settingsManager.saveSettings();
    }
  });
}


