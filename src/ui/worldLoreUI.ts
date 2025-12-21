import { buildFancyDropdown } from 'sillytavern-utils-lib';
import { world_names } from 'sillytavern-utils-lib/config';
import { st_echo } from 'sillytavern-utils-lib/config';

import { SessionService } from '../services/sessionService.js';
import { CharacterController } from '../controllers/characterController.js';

export function setupWorldLoreUI(popupContainer: HTMLElement) {
  const sessionService = SessionService.getInstance();
  const activeSession = sessionService.getSession();

  // "Lorebooks to Include" Dropdown
  const worldInfoSelectorContainer = popupContainer.querySelector('#charCreator_worldInfoSelector');
  let allWorldNames: string[] = structuredClone(world_names);
  try {
    if (worldInfoSelectorContainer && allWorldNames.length > 0) {
      buildFancyDropdown('#charCreator_worldInfoSelector', {
        initialList: allWorldNames,
        initialValues: activeSession.selectedWorldNames,
        placeholderText: 'Select lorebooks...',
        enableSearch: allWorldNames.length > 10,
        onSelectChange: (_previousValues: string[], newValues: string[]) => {
          sessionService.updateSession({ selectedWorldNames: newValues });
        },
      });
    } else if (worldInfoSelectorContainer) {
      worldInfoSelectorContainer.textContent = 'No active lorebooks found.';
    }
  } catch (error) {
    console.error('Failed to get active world info:', error);
    if (worldInfoSelectorContainer) {
      worldInfoSelectorContainer.textContent = 'Error loading lorebooks.';
    }
  }

  // Save as World Info Entry Selector
  const saveAsWorldInfoEntrySelector = popupContainer.querySelector(
    '#charCreator_saveAsWorldInfoSelector',
  ) as HTMLSelectElement;

  if (saveAsWorldInfoEntrySelector) {
    const { close } = buildFancyDropdown(saveAsWorldInfoEntrySelector, {
      placeholderText: 'Save as World Info Entry',
      initialList: world_names,
      closeOnSelect: true,
      multiple: false,
      enableSearch: true,
      async onBeforeSelection(_currentValues, proposedValues) {
        if (proposedValues.length === 0) return false;

        const selectedWorldName = proposedValues[0];
        
        try {
          const characterController = CharacterController.getInstance();
          await characterController.saveAsWorldInfo({ selectedWorldName });
        } catch (error: any) {
          st_echo('error', `Failed to create world info entry: ${error.message}`);
        }

        close();
        return false;
      },
    });
  }
}


