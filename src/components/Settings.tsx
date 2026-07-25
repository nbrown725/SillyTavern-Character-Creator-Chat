import React, { FC, useState, useMemo, useCallback } from 'react';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  PresetItem,
  SortableListItemData,
  STButton,
  STPresetSelect,
  STSortableList,
  STTextarea,
} from 'sillytavern-utils-lib/components/react';
import {
  convertToVariableName,
  DEFAULT_PROMPT_CONTENTS,
  DEFAULT_SETTINGS,
  ExtensionSettings,
  MainContextPromptBlock,
  MainContextTemplatePreset,
  MessageRole,
  PromptSetting,
  settingsManager,
  SYSTEM_PROMPT_KEYS,
  SystemPromptKey,
} from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

const globalContext = SillyTavern.getContext();

interface ContextTemplateEditorProps {
  title: string;
  restoreTitle: string;
  presetName: string;
  presets: Record<string, MainContextTemplatePreset>;
  prompts: ExtensionSettings['prompts'];
  onPresetNameChange: (name?: string) => void;
  onPresetsChange: (items: PresetItem[]) => void;
  onListChange: (items: SortableListItemData[]) => void;
  onRestoreDefault: () => void;
}

/** The ordered prompt list UI, shared by the generation and brainstorm templates. */
const ContextTemplateEditor: FC<ContextTemplateEditorProps> = ({
  title,
  restoreTitle,
  presetName,
  presets,
  prompts,
  onPresetNameChange,
  onPresetsChange,
  onListChange,
  onRestoreDefault,
}) => {
  const presetItems: PresetItem[] = Object.keys(presets).map((key) => ({ value: key, label: key }));
  const listItems: SortableListItemData[] = (presets[presetName]?.prompts ?? []).map((prompt) => {
    const promptSetting = prompts[prompt.promptName];
    return {
      id: prompt.promptName,
      label: promptSetting ? `${promptSetting.label} (${prompt.promptName})` : prompt.promptName,
      enabled: prompt.enabled,
      selectValue: prompt.role,
      selectOptions: [
        { value: 'user', label: 'User' },
        { value: 'assistant', label: 'Assistant' },
        { value: 'system', label: 'System' },
      ],
    };
  });

  return (
    <div style={{ marginTop: '10px' }}>
      <div className="title_restorable">
        <span>{title}</span>
        <STButton className="fa-solid fa-undo" title={restoreTitle} onClick={onRestoreDefault} />
      </div>
      <STPresetSelect
        label="Template"
        items={presetItems}
        value={presetName}
        readOnlyValues={['default']}
        onChange={onPresetNameChange}
        onItemsChange={onPresetsChange}
        enableCreate
        enableRename
        enableDelete
      />
      <div style={{ marginTop: '5px' }}>
        <STSortableList items={listItems} onItemsChange={onListChange} showSelectInput showToggleButton />
      </div>
    </div>
  );
};

/** The two context templates, keyed by the settings fields that back each one. */
const TEMPLATE_KINDS = {
  main: { presetKey: 'mainContextTemplatePreset', presetsKey: 'mainContextTemplatePresets' },
  brainstorm: { presetKey: 'brainstormContextTemplatePreset', presetsKey: 'brainstormContextTemplatePresets' },
} as const;

type TemplateKind = keyof typeof TEMPLATE_KINDS;

export const CharacterCreatorSettings: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [selectedSystemPrompt, setSelectedSystemPrompt] = useState<string>(SYSTEM_PROMPT_KEYS[0]);

  const updateAndRefresh = useCallback(
    (updater: (currentSettings: ExtensionSettings) => void) => {
      const currentSettings = settingsManager.getSettings();
      updater(currentSettings);
      settingsManager.saveSettings();
      forceUpdate();
    },
    [forceUpdate],
  );

  // --- Derived Data for UI (Memoized for performance) ---
  const systemPromptItems = useMemo(
    (): PresetItem[] =>
      Object.entries(settings.prompts).map(([key, prompt]) => ({
        value: key,
        label: `${prompt.label} (${key})`,
      })),
    [settings.prompts],
  );

  // --- Handlers for the context templates ---
  // Both templates are the same shape; the kind only selects which pair of settings fields to edit.
  const templateHandlers = (kind: TemplateKind) => {
    const { presetKey, presetsKey } = TEMPLATE_KINDS[kind];
    return {
      onPresetNameChange: (newValue?: string) =>
        updateAndRefresh((s) => {
          s[presetKey] = newValue ?? 'default';
        }),

      onPresetsChange: (newItems: PresetItem[]) =>
        updateAndRefresh((s) => {
          const newPresets: Record<string, MainContextTemplatePreset> = {};
          newItems.forEach((item) => {
            newPresets[item.value] =
              s[presetsKey][item.value] ?? structuredClone(s[presetsKey][s[presetKey]] ?? s[presetsKey]['default']);
          });
          s[presetsKey] = newPresets;
        }),

      onListChange: (newListItems: SortableListItemData[]) =>
        updateAndRefresh((s) => {
          const prompts: MainContextPromptBlock[] = newListItems.map((item) => ({
            promptName: item.id,
            enabled: item.enabled,
            role: (item.selectValue as MessageRole) ?? 'user',
          }));
          s[presetsKey] = {
            ...s[presetsKey],
            [s[presetKey]]: { ...s[presetsKey][s[presetKey]], prompts },
          };
        }),

      onRestoreDefault: async () => {
        const confirm = await globalContext.Popup.show.confirm('Restore default', 'Are you sure?');
        if (!confirm) return;
        updateAndRefresh((s) => {
          s[presetsKey] = {
            ...s[presetsKey],
            default: structuredClone(DEFAULT_SETTINGS[presetsKey]['default']),
          };
          s[presetKey] = 'default';
        });
      },
    };
  };

  // --- Handlers for Prompt Templates ---
  const handleSystemPromptsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newKeys = newItems.map((item) => item.value);
      const oldKeys = Object.keys(s.prompts);
      const deletedKeys = oldKeys.filter((key) => !newKeys.includes(key));

      deletedKeys.forEach((key) => {
        [...Object.values(s.mainContextTemplatePresets), ...Object.values(s.brainstormContextTemplatePresets)].forEach(
          (preset) => {
            preset.prompts = preset.prompts.filter((p) => p.promptName !== key);
          },
        );
      });

      const newPrompts: Record<string, PromptSetting> = {};
      newItems.forEach((item) => {
        newPrompts[item.value] = s.prompts[item.value] ?? { content: '', isDefault: false, label: item.label };
      });
      // @ts-ignore
      s.prompts = newPrompts;
    });
  };

  const handleSystemPromptCreate = (value: string) => {
    const variableName = convertToVariableName(value);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${value}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create a new prompts object
      s.prompts = {
        ...s.prompts,
        [variableName]: { content: s.prompts[selectedSystemPrompt]?.content ?? '', isDefault: false, label: value },
      };

      // A newly created prompt becomes available in both context templates.
      const appendToPresets = (presets: Record<string, MainContextTemplatePreset>) =>
        Object.fromEntries(
          Object.entries(presets).map(([presetName, preset]) => [
            presetName,
            {
              ...preset,
              prompts: [...preset.prompts, { enabled: true, promptName: variableName, role: 'user' as MessageRole }],
            },
          ]),
        );
      s.mainContextTemplatePresets = appendToPresets(s.mainContextTemplatePresets);
      s.brainstormContextTemplatePresets = appendToPresets(s.brainstormContextTemplatePresets);
    });

    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptRename = (oldValue: string, newValue: string) => {
    const variableName = convertToVariableName(newValue);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${newValue}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create new prompts object
      const { [oldValue]: renamedPrompt, ...restPrompts } = s.prompts;
      // @ts-ignore
      s.prompts = {
        ...restPrompts,
        [variableName]: { ...renamedPrompt, label: newValue },
      };

      // Renaming has to follow the prompt into both context templates.
      const renameInPresets = (presets: Record<string, MainContextTemplatePreset>) =>
        Object.fromEntries(
          Object.entries(presets).map(([presetName, preset]) => [
            presetName,
            {
              ...preset,
              prompts: preset.prompts.map((p) => (p.promptName === oldValue ? { ...p, promptName: variableName } : p)),
            },
          ]),
        );
      s.mainContextTemplatePresets = renameInPresets(s.mainContextTemplatePresets);
      s.brainstormContextTemplatePresets = renameInPresets(s.brainstormContextTemplatePresets);
    });

    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    updateAndRefresh((s) => {
      const prompt = s.prompts[selectedSystemPrompt];
      if (prompt) {
        // Create a new prompts object
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...prompt, // Copy existing properties
            content: newContent,
            isDefault: SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt as SystemPromptKey)
              ? DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as SystemPromptKey] === newContent
              : false,
          },
        };
      }
    });
  };

  const handleRestoreSystemPromptDefault = async () => {
    const prompt = settings.prompts[selectedSystemPrompt];
    if (!prompt) return st_echo('warning', 'No prompt selected.');
    const confirm = await globalContext.Popup.show.confirm('Restore Default', `Restore default for "${prompt.label}"?`);
    if (confirm) {
      updateAndRefresh((s) => {
        // Create a new prompts object with the restored content for the selected prompt
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...s.prompts[selectedSystemPrompt],
            content: DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as SystemPromptKey],
          },
        };
      });
    }
  };

  // --- Other Settings & Reset ---
  const handleResetEverything = async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Everything', 'Are you sure? This cannot be undone.');
    if (confirm) {
      settingsManager.resetSettings();
      forceUpdate();
      st_echo('success', 'Settings have been reset.');
    }
  };

  const selectedPrompt = settings.prompts[selectedSystemPrompt];
  const isDefaultSystemPromptSelected = SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt as SystemPromptKey);

  return (
    <div className="charCreator_settings">
      <ContextTemplateEditor
        title="Main Context Template"
        restoreTitle="Restore main context template to default"
        presetName={settings.mainContextTemplatePreset}
        presets={settings.mainContextTemplatePresets}
        prompts={settings.prompts}
        {...templateHandlers('main')}
      />

      <hr style={{ margin: '10px 0' }} />

      <ContextTemplateEditor
        title="Brainstorm Context Template"
        restoreTitle="Restore brainstorm context template to default"
        presetName={settings.brainstormContextTemplatePreset}
        presets={settings.brainstormContextTemplatePresets}
        prompts={settings.prompts}
        {...templateHandlers('brainstorm')}
      />

      <hr style={{ margin: '10px 0' }} />

      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Prompt Templates</span>
          {isDefaultSystemPromptSelected && (
            <STButton
              className="fa-solid fa-undo"
              title="Restore selected prompt to default"
              onClick={handleRestoreSystemPromptDefault}
            />
          )}
        </div>
        <STPresetSelect
          label="Prompt"
          items={systemPromptItems}
          value={selectedSystemPrompt}
          readOnlyValues={SYSTEM_PROMPT_KEYS}
          onChange={(newValue) => setSelectedSystemPrompt(newValue ?? '')}
          onItemsChange={handleSystemPromptsChange}
          onCreate={handleSystemPromptCreate}
          onRename={handleSystemPromptRename}
          enableCreate
          enableRename
          enableDelete
        />
        <STTextarea
          value={selectedPrompt?.content ?? ''}
          onChange={handleSystemPromptContentChange}
          placeholder="Edit the selected prompt template here..."
          rows={6}
          style={{ marginTop: '5px', width: '100%' }}
        />
      </div>

      <hr style={{ margin: '15px 0' }} />

      <label className="checkbox_label" style={{ marginTop: '15px' }}>
        <input
          type="checkbox"
          checked={settings.showSaveAsWorldInfoEntry.show}
          onChange={(e) =>
            updateAndRefresh((s) => {
              s.showSaveAsWorldInfoEntry.show = e.target.checked;
            })
          }
        />
        Show "Save as World Info Entry" option in popup
      </label>

      <hr style={{ margin: '15px 0' }} />

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <STButton className="danger_button" style={{ width: 'auto' }} onClick={handleResetEverything}>
          <i style={{ marginRight: '10px' }} className="fa-solid fa-triangle-exclamation" />I messed up, reset
          everything
        </STButton>
      </div>
    </div>
  );
};
