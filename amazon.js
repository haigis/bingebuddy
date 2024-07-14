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
  
  function clickAmazonNextEpisode() {
    const nextEpisodeButton = document.querySelector('.atvwebplayersdk-nextupcard-button');
    if (nextEpisodeButton) {
      console.log('Found Amazon Prime Video "Next Episode" button');
      setTimeout(() => {
        console.log('Clicking Amazon Prime Video "Next Episode" button');
        nextEpisodeButton.click();
      }, 1000); // Adding a small delay before clicking
    } else {
      console.log('Amazon Prime Video "Next Episode" button not found');
    }
  }
  
  function checkAndClickAmazonButtons() {
    chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitAfterVideo'], (options) => {
      // Set default values if options are undefined
      options = options || { skipIntro: true, nextEpisode: true, exitAfterVideo: false };
  
      if (options.skipIntro) {
        clickButtonByText('Skip Recap');
      }
      if (options.exitAfterVideo) {
        const nextEpisodeButton = document.querySelector('.atvwebplayersdk-nextupcard-button');
        if (nextEpisodeButton) {
          console.log('Next Episode button found for exit. Closing tab shortly.');
          setTimeout(() => {
            chrome.runtime.sendMessage({ action: 'closeTab' });
          }, 1000);
        }
      } else if (options.nextEpisode) {
        clickAmazonNextEpisode();
      }
    });
  }
  
  const observer = new MutationObserver(checkAndClickAmazonButtons);
  observer.observe(document, { childList: true, subtree: true });
  
  // Initial check when the script is loaded
  checkAndClickAmazonButtons();
  