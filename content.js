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

function checkAndClickButtons() {
  chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitAfterVideo'], (options) => {
    // Set default values if options are undefined
    options = options || { skipIntro: true, nextEpisode: true, exitAfterVideo: false };

    if (options.skipIntro) {
      clickButtonByText('Skip intro');
    }
    if (options.exitAfterVideo) {
      const nextEpisodeButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === 'next episode');
      if (nextEpisodeButton) {
        clickButtonByIcon('ArrowLeftStandard');
        setTimeout(() => {
          clickButtonByIcon('XStandard');
          setTimeout(() => {
            chrome.runtime.sendMessage({ action: 'closeTab' });
          }, 1000); // Adding delay to ensure the close icon is clicked first
        }, 1000); // Adding delay to ensure the back arrow is clicked first
      }
    } else if (options.nextEpisode) {
      clickButtonByText('Next episode');
    }
  });
}

const observer = new MutationObserver(checkAndClickButtons);
observer.observe(document, { childList: true, subtree: true });

// Initial check when the script is loaded
checkAndClickButtons();
