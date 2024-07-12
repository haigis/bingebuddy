function clickButtonByText(text) {
    const buttons = Array.from(document.querySelectorAll('button'));
    const button = buttons.find(btn => btn.textContent.trim().toLowerCase() === text.toLowerCase());
    if (button) {
      console.log(`Clicking button with text: ${text}`);
      button.click();
    } else {
      console.log(`Button with text "${text}" not found`);
    }
  }
  
  function clickButtonByIcon(iconName) {
    const svgIcons = Array.from(document.querySelectorAll(`svg[data-icon="${iconName}"]`));
    const button = svgIcons.map(icon => icon.closest('button')).find(btn => btn !== null);
    if (button) {
      console.log(`Clicking button with icon: ${iconName}`);
      button.click();
    } else {
      console.log(`Button with icon "${iconName}" not found`);
    }
  }
  
  function clickBackToBrowse() {
    const backToBrowse = document.querySelector('a.BackToBrowse');
    if (backToBrowse) {
      console.log('Clicking "Back to Browse" link');
      backToBrowse.click();
    } else {
      console.log('"Back to Browse" link not found');
    }
  }
  
  function clickCloseButton() {
    clickButtonByIcon('XStandard');
  }
  
  function closeCurrentTab() {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
  
  function checkAndClickButtons() {
    chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitButton'], (options) => {
      if (chrome.runtime.lastError) {
        console.error('Error retrieving settings:', chrome.runtime.lastError);
        options = { skipIntro: true, nextEpisode: false, exitButton: false };
      } else {
        options = options || { skipIntro: true, nextEpisode: false, exitButton: false };
      }
      console.log('Current options:', options);
  
      if (options.skipIntro) {
        clickButtonByText('Skip intro');
      }
  
      const nextEpisodeButton = Array.from(document.querySelectorAll('button')).find(button => {
        return button.textContent.trim().toLowerCase() === 'next episode';
      });
  
      const hasLeftArrowIcon = !!document.querySelector('svg[data-icon="ArrowLeftStandard"]');
  
      if (options.exitButton && nextEpisodeButton && hasLeftArrowIcon) {
        clickButtonByIcon('ArrowLeftStandard');
        setTimeout(() => {
          clickCloseButton();
          clickBackToBrowse();
          setTimeout(closeCurrentTab, 1000);
        }, 1000);
      } else if (options.nextEpisode && nextEpisodeButton) {
        nextEpisodeButton.click();
      }
    });
  }
  
  const observer = new MutationObserver(checkAndClickButtons);
  observer.observe(document, { childList: true, subtree: true });
  
  // Initial check when the script is loaded
  checkAndClickButtons();
  