import { st_echo } from 'sillytavern-utils-lib/config';

import {
  CHARACTER_FIELDS,
  CHARACTER_LABELS,
  CharacterFieldName,
} from '../generate.js';
import { SessionService } from '../services/sessionService.js';
import { CharacterController } from '../controllers/characterController.js';
import { UIHelpers } from '../utils/uiHelpers.js';
import { CharacterField } from '../types.js';
import { convertToVariableName } from '../settings.js';

export function setupFieldsUI(popupContainer: HTMLElement, loadCharDropdown: any) {
  const sessionService = SessionService.getInstance();
  const activeSession = sessionService.getSession();

  // Define field configurations
  const fieldConfigs = {
    name: { label: CHARACTER_LABELS.name, rows: 1, large: false, promptEnabled: false },
    description: { label: CHARACTER_LABELS.description, rows: 5, large: true, promptEnabled: true },
    personality: { label: CHARACTER_LABELS.personality, rows: 4, large: true, promptEnabled: true },
    scenario: { label: CHARACTER_LABELS.scenario, rows: 3, large: true, promptEnabled: true },
    first_mes: { label: CHARACTER_LABELS.first_mes, rows: 3, large: true, promptEnabled: true },
    mes_example: { label: CHARACTER_LABELS.mes_example, rows: 6, large: true, promptEnabled: true },
  };

  // Get template and container
  const coreFieldTemplate = popupContainer.querySelector('#charCreator_coreFieldTemplate') as HTMLTemplateElement;
  const draftFieldTemplate = popupContainer.querySelector('#charCreator_draftFieldTemplate') as HTMLTemplateElement;
  const coreFieldsContainer = popupContainer.querySelector('#charCreator_coreFieldsContainer') as HTMLDivElement;
  const draftFieldsList = popupContainer.querySelector('#charCreator_draftFieldsList') as HTMLDivElement;
  const addDraftFieldButton = popupContainer.querySelector('#charCreator_addDraftField') as HTMLButtonElement;
  const exportDraftFieldsButton = popupContainer.querySelector(
    '#charCreator_exportDraftFields',
  ) as HTMLButtonElement;
  const importDraftFieldsButton = popupContainer.querySelector(
    '#charCreator_importDraftFields',
  ) as HTMLButtonElement;

  // Initialize storage for field elements
  const coreFieldElements: Record<
    string,
    {
      textarea: HTMLTextAreaElement;
      button: HTMLButtonElement;
      continueButton: HTMLButtonElement;
      promptTextarea?: HTMLTextAreaElement;
      clearButton?: HTMLButtonElement;
    }
  > = {};

  // Function to get sorted alternate greeting field names
  const getAlternateGreetingFieldNames = (): string[] => {
    return Object.keys(activeSession.fields)
      .filter((key) => key.startsWith('alternate_greetings_'))
      .sort((a, b) => {
        const indexA = parseInt(a.split('_')[2] || '1');
        const indexB = parseInt(b.split('_')[2] || '1');
        return indexA - indexB;
      });
  };

  // Function to render the alternate greetings UI within the core fields container
  let activeTabIndex = 0;
  const renderAlternateGreetingsUI = (parentElement: HTMLElement) => {
    const agTemplate = popupContainer.querySelector(
      '#charCreator_alternateGreetingTabContentTemplate',
    ) as HTMLTemplateElement;
    const tabButtonContainer = parentElement.querySelector('.alternate-greetings-tabs') as HTMLDivElement;
    const contentArea = parentElement.querySelector('.alternate-greetings-content-area') as HTMLDivElement;
    const placeholder = parentElement.querySelector('.no-greetings-placeholder') as HTMLParagraphElement;
    const addButton = parentElement.querySelector('.add-alternate-greeting-button') as HTMLButtonElement;
    const deleteButton = parentElement.querySelector('.delete-alternate-greeting-button') as HTMLButtonElement;
    const sideButtonContainer = parentElement.querySelector('.field-container > div:last-child');
    const generateButton = sideButtonContainer?.querySelector(
      '.generate-alternate-greeting-button',
    ) as HTMLButtonElement;
    const continueButton = sideButtonContainer?.querySelector(
      '.continue-alternate-greeting-button',
    ) as HTMLButtonElement;
    const compareButton = sideButtonContainer?.querySelector(
      '.compare-alternate-greeting-button',
    ) as HTMLButtonElement;
    const clearButton = sideButtonContainer?.querySelector('.clear-alternate-greeting-button') as HTMLButtonElement;

    tabButtonContainer.innerHTML = '';
    contentArea.innerHTML = '';

    const greetingFieldNames = getAlternateGreetingFieldNames();

    const switchTab = (index: number) => {
      activeTabIndex = index;
      tabButtonContainer.querySelectorAll('.alternate-greeting-tab-button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
      contentArea.querySelectorAll('.alternate-greeting-tab-content').forEach((contentDiv, i) => {
        (contentDiv as HTMLElement).style.display = i === index ? 'block' : 'none';
      });
      const hasGreetings = greetingFieldNames.length > 0;
      generateButton.disabled = !hasGreetings;
      continueButton.disabled = !hasGreetings;
      compareButton.disabled = !hasGreetings;
      clearButton.disabled = !hasGreetings;
      deleteButton.disabled = !hasGreetings;
    };

    if (greetingFieldNames.length === 0) {
      placeholder.style.display = 'block';
      contentArea.style.display = 'none';
      generateButton.disabled = true;
      clearButton.disabled = true;
      deleteButton.disabled = true;
    } else {
      placeholder.style.display = 'none';
      contentArea.style.display = 'block';

      greetingFieldNames.forEach((fieldName, index) => {
        const greetingField = activeSession.fields[fieldName];
        if (!greetingField) return;

        // Create Tab Button
        const tabButton = document.createElement('button');
        tabButton.className = 'menu_button alternate-greeting-tab-button';
        const displayNumber = parseInt(fieldName.split('_')[2]) || 1;
        tabButton.textContent = `Greeting ${displayNumber}`;
        tabButton.dataset.index = index.toString();
        tabButton.addEventListener('click', () => switchTab(index));
        tabButtonContainer.appendChild(tabButton);

        // Create Tab Content
        const contentClone = agTemplate.content.cloneNode(true) as DocumentFragment;
        const valueTextarea = contentClone.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement;
        const promptTextarea = contentClone.querySelector(
          '.alternate-greeting-prompt-textarea',
        ) as HTMLTextAreaElement;

        valueTextarea.value = greetingField.value ?? '';
        promptTextarea.value = greetingField.prompt ?? '';
        valueTextarea.rows = 8;

        valueTextarea.addEventListener('change', () => {
          sessionService.updateField(fieldName, { value: valueTextarea.value });
        });

        promptTextarea.addEventListener('change', () => {
          sessionService.updateField(fieldName, { prompt: promptTextarea.value });
        });

        contentArea.appendChild(contentClone);
      });

      switchTab(0);
    }

    const newAddButton = addButton.cloneNode(true) as HTMLButtonElement;
    addButton.parentNode?.replaceChild(newAddButton, addButton);
    const newDeleteButton = deleteButton.cloneNode(true) as HTMLButtonElement;
    deleteButton.parentNode?.replaceChild(newDeleteButton, deleteButton);
    const newGenerateButton = generateButton.cloneNode(true) as HTMLButtonElement;
    generateButton.parentNode?.replaceChild(newGenerateButton, generateButton);
    const newContinueButton = continueButton.cloneNode(true) as HTMLButtonElement;
    continueButton.parentNode?.replaceChild(newContinueButton, continueButton);
    const newCompareButton = compareButton.cloneNode(true) as HTMLButtonElement;
    compareButton.parentNode?.replaceChild(newCompareButton, compareButton);
    const newClearButton = clearButton.cloneNode(true) as HTMLButtonElement;
    clearButton.parentNode?.replaceChild(newClearButton, clearButton);

    newAddButton.addEventListener('click', () => {
      const nextNumber = greetingFieldNames.length + 1;
      const newFieldName = `alternate_greetings_${nextNumber}`;
      sessionService.updateField(newFieldName, { prompt: '', value: '', label: `Alternate Greeting ${nextNumber}` });
      renderAlternateGreetingsUI(parentElement);
      switchTab(greetingFieldNames.length);
    });

    newDeleteButton.addEventListener('click', async () => {
      if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;

      const fieldNameToDelete = greetingFieldNames[activeTabIndex];
      const confirm = await UIHelpers.showConfirmation(
        'Delete Greeting',
        `Are you sure you want to delete Greeting ${activeTabIndex + 1}? This cannot be undone.`,
      );
      if (confirm) {
        const currentSession = sessionService.getSession();
        delete currentSession.fields[fieldNameToDelete];
        
        const subsequentFieldNames = greetingFieldNames.slice(activeTabIndex + 1);
        subsequentFieldNames.forEach((oldName, i) => {
          const newNumber = activeTabIndex + i + 1;
          const newName = `alternate_greetings_${newNumber}`;
          if (oldName !== newName) {
            currentSession.fields[newName] = currentSession.fields[oldName];
            currentSession.fields[newName].label = `Alternate Greeting ${newNumber}`;
            delete currentSession.fields[oldName];
          }
        });

        sessionService.updateSession({ fields: currentSession.fields });
        renderAlternateGreetingsUI(parentElement);
        const newFieldNames = getAlternateGreetingFieldNames();
        if (newFieldNames.length > 0) {
          switchTab(Math.min(activeTabIndex, newFieldNames.length - 1));
        }
      }
    });

    newGenerateButton.addEventListener('click', () => {
      if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
      const targetFieldName = greetingFieldNames[activeTabIndex];
      const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
      const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

      UIHelpers.handleFieldGeneration({
        targetField: targetFieldName,
        button: newGenerateButton,
        textarea: textarea!,
        isDraft: false,
      });
    });

    newContinueButton.addEventListener('click', () => {
      if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
      const targetFieldName = greetingFieldNames[activeTabIndex];
      const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
      const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

      if (!textarea?.value.trim()) {
        st_echo('warning', 'No content to continue from');
        return;
      }

      UIHelpers.handleFieldGeneration({
        targetField: targetFieldName,
        button: newContinueButton,
        textarea: textarea!,
        isDraft: false,
        continueFrom: textarea.value,
      });
    });

    newCompareButton.addEventListener('click', () => {
      if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
      const targetFieldName = greetingFieldNames[activeTabIndex];
      const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
      const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

      if (!textarea?.value.trim()) {
        st_echo('warning', 'No content to compare');
        return;
      }

      const selectedId = loadCharDropdown?.getValues()?.[0];
      if (!selectedId) {
        st_echo('warning', 'Please select a character first to compare against.');
        return;
      }

      const context = SillyTavern.getContext();
      const character = context.characters[parseInt(selectedId)];
      if (!character) {
        st_echo('warning', 'Selected character not found.');
        return;
      }

      const characterGreetings = character.data?.alternate_greetings ?? [];
      const characterValue = characterGreetings[activeTabIndex] ?? '';

      UIHelpers.handleFieldComparison(targetFieldName, textarea.value, characterValue);
    });

    newClearButton.addEventListener('click', () => {
      if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
      const targetFieldName = greetingFieldNames[activeTabIndex];
      const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
      const valueTextarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

      if (activeSession.fields[targetFieldName]) {
        valueTextarea!.value = '';
        sessionService.updateField(targetFieldName, { value: '' });
      }
    });
  };

  // Generate core fields from template
  CHARACTER_FIELDS.forEach((fieldName) => {
    if (!(fieldName in fieldConfigs)) return;
    const config = fieldConfigs[fieldName as keyof typeof fieldConfigs];
    const clone = coreFieldTemplate.content.cloneNode(true) as DocumentFragment;

    const label = clone.querySelector('label') as HTMLLabelElement;
    const textarea = clone.querySelector('.field-value-textarea') as HTMLTextAreaElement;
    const button = clone.querySelector('.generate-field-button') as HTMLButtonElement;
    const continueButton = clone.querySelector('.continue-field-button') as HTMLButtonElement;
    const clearButton = clone.querySelector('.clear-field-button') as HTMLButtonElement;
    const promptTextarea = clone.querySelector('.field-prompt-textarea') as HTMLTextAreaElement;

    textarea.id = `charCreator_field_${fieldName}`;
    promptTextarea.id = `charCreator_prompt_${fieldName}`;
    label.textContent = config.label;
    label.htmlFor = textarea.id;

    textarea.rows = config.rows;

    const fieldData = activeSession.fields[fieldName];
    textarea.value = fieldData?.value ?? '';
    button.dataset.field = fieldName;
    button.title = `Generate ${config.label}`;
    promptTextarea.placeholder = `Enter additional prompt for ${config.label.toLowerCase()}...`;
    promptTextarea.value = fieldData?.prompt ?? '';

    if (!config.promptEnabled) {
      promptTextarea.closest('.field-prompt-container')?.remove();
    }

    if (config.large) {
      textarea.closest('.field-container')?.classList.add('large-field');
    }

    clearButton?.addEventListener('click', () => {
      textarea.value = '';
      textarea.dispatchEvent(new Event('change'));
    });

    coreFieldElements[fieldName] = {
      textarea,
      button,
      continueButton,
      promptTextarea,
      clearButton,
    };

    coreFieldsContainer.appendChild(clone);
  });

  const agTemplateElement = popupContainer.querySelector(
    '#charCreator_alternateGreetingsTemplate',
  ) as HTMLTemplateElement;
  const agContent = agTemplateElement.content.cloneNode(true) as DocumentFragment;
  const agFieldElement = agContent.querySelector('.alternate-greetings-field') as HTMLElement;
  coreFieldsContainer.appendChild(agContent);
  renderAlternateGreetingsUI(agFieldElement);

  const renderDraftField = (fieldName: string, fieldData: CharacterField) => {
    if (!draftFieldTemplate || !draftFieldsList) return;

    const clone = draftFieldTemplate.content.cloneNode(true) as DocumentFragment;
    const fieldDiv = clone.querySelector('.character-field') as HTMLElement;
    const label = clone.querySelector('label') as HTMLLabelElement;
    const textarea = clone.querySelector('.field-value-textarea') as HTMLTextAreaElement;
    const promptTextarea = clone.querySelector('.field-prompt-textarea') as HTMLTextAreaElement;
    const deleteButton = clone.querySelector('.delete-draft-field-button') as HTMLButtonElement;
    const generateButton = clone.querySelector('.generate-field-button') as HTMLButtonElement;
    const continueButton = clone.querySelector('.continue-field-button') as HTMLButtonElement;
    const clearButton = clone.querySelector('.clear-field-button') as HTMLButtonElement;

    fieldDiv.dataset.draftFieldName = fieldName;
    label.textContent = fieldData.label;
    label.htmlFor = `charCreator_draft_field_${fieldName}`;
    textarea.id = `charCreator_draft_field_${fieldName}`;
    textarea.value = fieldData.value ?? '';
    promptTextarea.value = fieldData.prompt ?? '';
    promptTextarea.id = `charCreator_draft_prompt_${fieldName}`;
    promptTextarea.placeholder = `Enter additional prompt for ${fieldData.label}...`;
    deleteButton.dataset.draftFieldName = fieldName;
    generateButton.dataset.field = fieldName;

    clearButton.dataset.draftFieldName = fieldName;
    textarea.addEventListener('change', UIHelpers.createTextChangeHandler(fieldName, true));
    promptTextarea.addEventListener('change', UIHelpers.createPromptChangeHandler(fieldName, true));

    clearButton.addEventListener('click', () => {
      textarea.value = '';
      sessionService.updateDraftField(fieldName, { value: '' });
    });

    deleteButton.addEventListener('click', async () => {
      const confirm = await UIHelpers.showConfirmation(
        'Delete Draft Field',
        `Are you sure you want to delete the draft field "${fieldData.label}"? This cannot be undone.`,
      );
      if (confirm) {
        sessionService.deleteDraftField(fieldName);
        fieldDiv.remove();
      }
    });

    generateButton.addEventListener('click', () => {
      UIHelpers.handleFieldGeneration({
        targetField: fieldName,
        button: generateButton,
        textarea,
        isDraft: true,
      });
    });

    continueButton.addEventListener('click', () => {
      if (!textarea.value.trim()) {
        st_echo('warning', 'No content to continue from');
        return;
      }
      UIHelpers.handleFieldGeneration({
        targetField: fieldName,
        button: continueButton,
        textarea,
        isDraft: true,
        continueFrom: textarea.value,
      });
    });

    draftFieldsList.appendChild(clone);
  };

  const renderAllDraftFields = () => {
    if (!draftFieldsList) return;
    draftFieldsList.innerHTML = '';
    Object.entries(activeSession.draftFields || {}).forEach(([name, data]) => {
      renderDraftField(name, data);
    });
  };

  renderAllDraftFields();

  exportDraftFieldsButton?.addEventListener('click', () => {
    const characterController = CharacterController.getInstance();
    characterController.exportDraftFields();
  });

  importDraftFieldsButton?.addEventListener('click', async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.addEventListener('change', async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const characterController = CharacterController.getInstance();
        await characterController.importDraftFields(file);
        renderAllDraftFields();
      } catch (error: any) {
        st_echo('error', `Failed to import draft fields: ${error.message}`);
      }
    });

    input.click();
  });

  if (addDraftFieldButton) {
    addDraftFieldButton.addEventListener('click', async () => {
      const fieldNameInput = await UIHelpers.showInput('Enter Draft Field Name', '');
      if (!fieldNameInput || !fieldNameInput.trim()) return;
      
      const fieldName = convertToVariableName(fieldNameInput.trim());
      if (!fieldName) {
        st_echo('error', 'Invalid field name provided.');
        return;
      }

      if (activeSession.draftFields[fieldName] || CHARACTER_LABELS[fieldName as CharacterFieldName]) {
        st_echo('warning', `Field name "${fieldName}" already exists.`);
        return;
      }

      sessionService.updateDraftField(fieldName, { value: '', prompt: '', label: fieldNameInput });
      const updatedSession = sessionService.getSession();
      renderDraftField(fieldName, updatedSession.draftFields[fieldName]);
    });
  }

  // Setup core field event listeners
  Object.entries(coreFieldElements).forEach(([fieldName, { textarea, button, continueButton, promptTextarea }]) => {
    const compareButton = textarea
      .closest('.field-container')
      ?.querySelector('.compare-field-button') as HTMLButtonElement;

    if (compareButton) {
      compareButton.addEventListener('click', async () => {
        const selectedCharIndex = loadCharDropdown?.getValues()?.[0];
        const context = SillyTavern.getContext();
        const characterValue = selectedCharIndex
          ? context.characters[parseInt(selectedCharIndex)]?.[fieldName as CharacterFieldName] ??
            context.characters[parseInt(selectedCharIndex)]?.data?.[fieldName] ?? ''
          : '';
        
        await UIHelpers.handleFieldComparison(fieldName, textarea.value, characterValue);
      });
    }

    if (continueButton) {
      continueButton.addEventListener('click', () => {
        if (!textarea.value.trim()) {
          st_echo('warning', 'No content to continue from');
          return;
        }
        UIHelpers.handleFieldGeneration({
          targetField: fieldName as CharacterFieldName,
          button: continueButton,
          textarea,
          continueFrom: textarea.value,
          isDraft: false,
        });
      });
    }
    if (button) {
      button.addEventListener('click', () => {
        UIHelpers.handleFieldGeneration({
          targetField: fieldName as CharacterFieldName,
          button,
          textarea,
          isDraft: false,
        });
      });

      textarea.addEventListener('change', UIHelpers.createTextChangeHandler(fieldName, false));

      if (promptTextarea) {
        promptTextarea.addEventListener('change', UIHelpers.createPromptChangeHandler(fieldName, false));
      }
    }
  });

  return {
    renderAllDraftFields,
    coreFieldElements,
    renderAlternateGreetingsUI,
    coreFieldsContainer,
  };
}


