import { useState, useEffect, useCallback } from 'react';
import { Popup } from 'sillytavern-utils-lib/components/react';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { MainPopup } from './MainPopup.js';

export const PopupManager = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = useCallback(() => setIsPopupVisible(true), []);
  const closePopup = useCallback(() => setIsPopupVisible(false), []);

  // Expose the opener to the global scope so the injected toolbar icons can call it.
  // Done in an effect rather than during render so it isn't a render side effect, and so the
  // global is cleaned up if this root is ever unmounted.
  useEffect(() => {
    // @ts-ignore
    window.openCharacterCreatorPopup = openPopup;
    return () => {
      // @ts-ignore
      if (window.openCharacterCreatorPopup === openPopup) delete window.openCharacterCreatorPopup;
    };
  }, [openPopup]);

  if (!isPopupVisible) {
    return null;
  }

  return (
    <Popup
      content={<MainPopup />}
      type={POPUP_TYPE.DISPLAY}
      onComplete={closePopup}
      options={{
        large: true,
        wide: true,
      }}
    />
  );
};
