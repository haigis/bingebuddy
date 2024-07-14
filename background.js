chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'closeTab') {
    chrome.tabs.remove(sender.tab.id);
  } else if (request.action === 'resizePopup') {
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { height: request.height + 50 }); // Adding some extra height for padding
    });
  }
});
