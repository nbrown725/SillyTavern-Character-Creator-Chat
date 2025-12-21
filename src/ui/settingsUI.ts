import {
  buildPresetSelect,
  buildSortableList,
  SortableListItemData,
} from 'sillytavern-utils-lib';
import { st_echo } from 'sillytavern-utils-lib/config';

import { globalContext } from '../generate.js';
import { SessionService } from '../services/sessionService.js';
import {
  extensionName,
  settingsManager,
  SYSTEM_PROMPT_KEYS,
  DEFAULT_PROMPT_CONTENTS,
  PromptSetting,
  convertToVariableName,
  DEFAULT_SETTINGS,
  MessageRole,
  SystemPromptKey,
} from '../settings.js';

export async function handleSettingsUI() {
  const settingsHtml = await globalContext.renderExtensionTemplateAsync(
    `third-party/${extensionName}`,
    'templates/settings',
  );
  $('#extensions_settings').append(settingsHtml);

  const settingsContainer = document.querySelector('.charCreator_settings');
  if (!settingsContainer) return;

  const settings = settingsManager.getSettings();
  const sessionService = SessionService.getInstance();

  let setMainContextList: (list: SortableListItemData[]) => void;
  let getMainContextList: () => SortableListItemData[];
  // --- Setup Main Context Template ---
  {
    const promptSelect = settingsContainer.querySelector('#charCreator_mainContextTemplatePreset') as HTMLSelectElement;
    const promptList = settingsContainer.querySelector('#charCreator_mainContextList') as HTMLTextAreaElement;
    const restoreMainContextTemplateButton = settingsContainer.querySelector(
      '#charCreator_restoreMainContextTemplateDefault',
    ) as HTMLButtonElement;

    buildPresetSelect('#charCreator_mainContextTemplatePreset', {
      initialList: Object.keys(settings.mainContextTemplatePresets),
      initialValue: settings.mainContextTemplatePreset,
      readOnlyValues: ['default'],
      onSelectChange(_, newValue) {
        const newPresetValue = newValue ?? 'default';
        setList(
          settings.mainContextTemplatePresets[newPresetValue].prompts.map((prompt) => {
            let label = prompt.promptName;
            if (settings.prompts[prompt.promptName]) {
              label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
            }
            return {
              enabled: prompt.enabled,
              id: prompt.promptName,
              label,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: prompt.role,
            };
          }),
        );

        settings.mainContextTemplatePreset = newPresetValue;
        settingsManager.saveSettings();
      },
      create: {
        onAfterCreate(value) {
          let currentPreset = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset];
          if (!currentPreset) {
            currentPreset = settings.mainContextTemplatePresets['default'];
          }
          settings.mainContextTemplatePresets[value] = structuredClone(currentPreset);
        },
      },
      rename: {
        onAfterRename(previousValue, newValue) {
          settings.mainContextTemplatePresets[newValue] = settings.mainContextTemplatePresets[previousValue];
          delete settings.mainContextTemplatePresets[previousValue];
        },
      },
      delete: {
        onAfterDelete(value) {
          delete settings.mainContextTemplatePresets[value];
        },
      },
    });

    const initialPromptList: SortableListItemData[] = settings.mainContextTemplatePresets[
      settings.mainContextTemplatePreset
    ].prompts.map((prompt) => {
      let label = prompt.promptName;
      if (settings.prompts[prompt.promptName]) {
        label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
      }
      return {
        enabled: prompt.enabled,
        id: prompt.promptName,
        label,
        selectOptions: [
          { value: 'user', label: 'User' },
          { value: 'assistant', label: 'Assistant' },
          { value: 'system', label: 'System' },
        ],
        selectValue: prompt.role,
      };
    });
    const { setList, getList } = buildSortableList(promptList, {
      initialList: initialPromptList,
      showSelectInput: true,
      showToggleButton: true,
      onSelectChange(itemId, newValue) {
        const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
          (prompt) => prompt.promptName === itemId,
        );
        if (item) {
          item.role = newValue as MessageRole;
          settingsManager.saveSettings();
        }
      },
      onToggle(itemId, newState) {
        const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
          (prompt) => prompt.promptName === itemId,
        );
        if (item) {
          item.enabled = newState;
          settingsManager.saveSettings();
        }
      },
      onOrderChange(newItemOrderIds) {
        const newOrder = newItemOrderIds
          .map((id) => {
            const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
              (prompt) => prompt.promptName === id,
            );
            return item;
          })
          .filter((item) => item !== undefined);
        settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts = newOrder;
        settingsManager.saveSettings();
      },
    });
    setMainContextList = setList;
    getMainContextList = getList;

    restoreMainContextTemplateButton.addEventListener('click', async () => {
      const confirm = await globalContext.Popup.show.confirm(
        'Restore default',
        'Are you sure you want to restore the default prompt?',
      );
      if (!confirm) {
        return;
      }

      settings.mainContextTemplatePresets['default'] = {
        prompts: DEFAULT_SETTINGS.mainContextTemplatePresets['default'].prompts,
      };
      if (promptSelect.value !== 'default') {
        promptSelect.value = 'default';
        promptSelect.dispatchEvent(new Event('change'));
      } else {
        setList(
          settings.mainContextTemplatePresets['default'].prompts.map((prompt) => {
            let label = prompt.promptName;
            if (settings.prompts[prompt.promptName]) {
              label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
            }
            return {
              enabled: prompt.enabled,
              id: prompt.promptName,
              label,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: prompt.role,
            };
          }),
        );
        settingsManager.saveSettings();
      }
    });
  }

  // --- Setup Consolidated System Prompts ---
  {
    const promptSelect = settingsContainer.querySelector('#charCreator_systemPromptPreset') as HTMLSelectElement;
    const promptTextarea = settingsContainer.querySelector('#charCreator_systemPromptContent') as HTMLTextAreaElement;
    const restoreSystemPromptButton = settingsContainer.querySelector(
      '#charCreator_restoreSystemPromptDefault',
    ) as HTMLButtonElement;

    buildPresetSelect('#charCreator_systemPromptPreset', {
      initialList: Object.keys(settings.prompts),
      readOnlyValues: SYSTEM_PROMPT_KEYS,
      initialValue: SYSTEM_PROMPT_KEYS[0],
      label(value) {
        if (value === '') {
          return 'prompt';
        }

        const promptSetting = settings.prompts[value];
        if (promptSetting) {
          return `${promptSetting.label} (${value})`;
        }
        return value;
      },
      create: {
        onBeforeCreate(value) {
          const variableName = convertToVariableName(value);
          if (!variableName) {
            st_echo('error', `Invalid prompt name: ${value}`);
            return false;
          }
          if (settings.prompts[variableName]) {
            st_echo('error', `Prompt name already exists: ${variableName}`);
            return false;
          }

          return true;
        },
        onAfterCreate(value) {
          const variableName = convertToVariableName(value);
          settings.prompts[variableName] = {
            content: promptTextarea.value,
            isDefault: false,
            label: value,
          };
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts.push({
              enabled: true,
              promptName: variableName,
              role: 'user',
            });
          });
          setMainContextList([
            ...getMainContextList(),
            {
              enabled: true,
              id: variableName,
              label: `${value} (${variableName})`,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: 'user',
            },
          ]);

          return variableName;
        },
      },
      rename: {
        onBeforeRename(_previousValue, newValue) {
          const variableName = convertToVariableName(newValue);
          if (!variableName) {
            st_echo('error', `Invalid prompt name: ${newValue}`);
            return false;
          }
          if (settings.prompts[variableName]) {
            st_echo('error', `Prompt name already exists: ${variableName}`);
            return false;
          }

          return true;
        },
        onAfterRename(previousValue, newValue) {
          const filteredValue = convertToVariableName(newValue);
          settings.prompts[filteredValue] = { ...settings.prompts[previousValue], label: newValue };
          delete settings.prompts[previousValue];
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts.forEach((prompt) => {
              if (prompt.promptName === previousValue) {
                prompt.promptName = filteredValue;
              }
            });
          });

          setMainContextList(
            getMainContextList().map((item) => {
              if (item.id === previousValue) {
                return {
                  ...item,
                  id: filteredValue,
                  label: `${newValue} (${filteredValue})`,
                };
              }
              return item;
            }),
          );
          return filteredValue;
        },
      },
      delete: {
        onAfterDelete(value) {
          delete settings.prompts[value];
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts = preset.prompts.filter((prompt) => prompt.promptName !== value);
          });
          setMainContextList(getMainContextList().filter((item) => item.id !== value));
        },
      },
      onSelectChange(_, newValue) {
        const newPresetValue = newValue ?? '';
        const promptSetting: PromptSetting | undefined = settings.prompts[newPresetValue];
        if (promptSetting) {
          promptTextarea.value = promptSetting.content ?? '';
          restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(newPresetValue as SystemPromptKey)
            ? 'block'
            : 'none';
          settingsManager.saveSettings();
        }
      },
    });

    // Initial state
    const selectedKey = promptSelect.value;
    const prompSetting: PromptSetting | undefined = settings.prompts[selectedKey];
    if (prompSetting) {
      promptTextarea.value = prompSetting.content ?? '';
      restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(selectedKey as SystemPromptKey)
        ? 'block'
        : 'none';
    }

    // Event listener for textarea change
    promptTextarea.addEventListener('change', () => {
      const selectedKey = promptSelect.value as SystemPromptKey;
      const currentContent = promptTextarea.value;

      const prompSetting: PromptSetting | undefined = settings.prompts[selectedKey];
      if (prompSetting) {
        prompSetting.content = currentContent;
        prompSetting.isDefault = SYSTEM_PROMPT_KEYS.includes(selectedKey)
          ? DEFAULT_PROMPT_CONTENTS[selectedKey] === currentContent
          : false;
        restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(selectedKey) ? 'block' : 'none';
        settingsManager.saveSettings();
      }
    });

    restoreSystemPromptButton.addEventListener('click', async () => {
      const selectedKey = promptSelect.value as SystemPromptKey;
      const defaultContent = DEFAULT_PROMPT_CONTENTS[selectedKey];
      const promptSetting: PromptSetting | undefined = settings.prompts[selectedKey];
      if (promptSetting) {
        const confirm = await globalContext.Popup.show.confirm(
          'Restore Default',
          `Are you sure you want to restore the default for "${promptSetting.label}"?`,
        );
        if (confirm) {
          promptTextarea.value = defaultContent;
          promptTextarea.dispatchEvent(new Event('change'));
        }
      } else {
        st_echo('warning', 'No prompt selected.');
      }
    });
  }

  const showSaveAsWorldInfoCheckbox = settingsContainer.querySelector(
    '#charCreator_showSaveAsWorldInfo',
  ) as HTMLInputElement;
  if (showSaveAsWorldInfoCheckbox) {
    showSaveAsWorldInfoCheckbox.checked = settings.showSaveAsWorldInfoEntry.show;
    showSaveAsWorldInfoCheckbox.addEventListener('change', () => {
      settings.showSaveAsWorldInfoEntry.show = showSaveAsWorldInfoCheckbox.checked;
      settingsManager.saveSettings();
    });
  }

  // Reset Everything Button
  const resetEverythingButton = settingsContainer.querySelector('#charCreator_resetEverything') as HTMLButtonElement;
  resetEverythingButton.addEventListener('click', async () => {
    const confirm = await globalContext.Popup.show.confirm(
      'Reset Everything',
      'Are you sure? This will reset all settings to default and clear your data in popup. This cannot be undone. This is a destructive action.',
    );
    if (confirm) {
      // Clear active session
      sessionService.resetSession();

      // Reset all settings to default
      settingsManager.resetSettings();

      setTimeout(() => {
        st_echo('success', 'Everything has been reset to default. Please reload the page.');
      }, 1500);
    }
  });
}


