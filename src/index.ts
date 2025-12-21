import { st_echo } from 'sillytavern-utils-lib/config';

import { SessionService } from './services/sessionService.js';
import {
  extensionName,
  initializeSettings,
} from './settings.js';
import { initializeChat } from './chat.js';
import { StorageService } from './services/storageService.js';
import { registerHelpers } from './utils/handlebarsHelpers.js';

import { handleSettingsUI } from './ui/settingsUI.js';
import { handlePopupUI } from './ui/popupUI.js';

import * as Handlebars from 'handlebars';

function importCheck(): boolean {
  if (!(window as any).SillyTavern || !(window as any).SillyTavern.getContext) return false;
  return true;
}

async function main() {
  registerHelpers();

  // Initialize storage first
  const storageService = StorageService.getInstance();
  await storageService.initialize();

  // Initialize session (handles migration)
  const sessionService = SessionService.getInstance();
  await sessionService.initialize();

  handleSettingsUI();
  handlePopupUI();
  initializeChat();
}

if (!importCheck()) {
  st_echo('error', `[${extensionName}] Make sure SillyTavern is loaded correctly.`);
} else {
  initializeSettings().then(() => {
    main();
  });
}
