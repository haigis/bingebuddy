chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ skipIntro: true, nextEpisode: true, exitButton: false }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error setting initial settings:', chrome.runtime.lastError);
    } else {
      console.log('Initial settings set.');
    }
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "closeTab") {
    chrome.tabs.remove(sender.tab.id);
  }
});
