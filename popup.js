document.addEventListener('DOMContentLoaded', () => {
    const skipIntroCheckbox = document.getElementById('skipIntro');
    const nextEpisodeCheckbox = document.getElementById('nextEpisode');
    const exitButtonToggle = document.getElementById('exitButtonToggle');
    const saveIcon = document.getElementById('saveIcon');
  
    // Function to update the UI based on stored settings
    function updateUI(options) {
      console.log('Updating UI with options:', options);
      skipIntroCheckbox.checked = options.skipIntro;
      nextEpisodeCheckbox.checked = options.nextEpisode;
      exitButtonToggle.checked = options.exitButton;
    }
  
    // Function to save the options in storage
    function saveOptions() {
      const options = {
        skipIntro: skipIntroCheckbox.checked,
        nextEpisode: nextEpisodeCheckbox.checked,
        exitButton: exitButtonToggle.checked
      };
  
      console.log('Saving options:', options);
      chrome.storage.sync.set(options, () => {
        if (chrome.runtime.lastError) {
          console.error('Error saving settings:', chrome.runtime.lastError);
        } else {
          console.log('Settings saved:', options);
          showSaveIcon();
        }
      });
    }
  
    // Function to toggle the state of next episode and exit switches
    function toggleNextEpisodeExitState(source) {
      if (source === 'exit' && exitButtonToggle.checked) {
        nextEpisodeCheckbox.checked = false;
      } else if (source === 'next' && nextEpisodeCheckbox.checked) {
        exitButtonToggle.checked = false;
      }
      saveOptions();
    }
  
    // Function to briefly show the save icon
    function showSaveIcon() {
      saveIcon.style.display = 'block';
      setTimeout(() => {
        saveIcon.style.display = 'none';
      }, 1000);
    }
  
    // Add event listeners for changes
    skipIntroCheckbox.addEventListener('change', saveOptions);
    nextEpisodeCheckbox.addEventListener('change', () => {
      toggleNextEpisodeExitState('next');
    });
    exitButtonToggle.addEventListener('change', () => {
      toggleNextEpisodeExitState('exit');
    });
  
    // Initialize UI with current settings
    chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitButton'], (options) => {
      if (chrome.runtime.lastError) {
        console.error('Error retrieving settings:', chrome.runtime.lastError);
        options = { skipIntro: true, nextEpisode: false, exitButton: false };
      } else {
        options = options || { skipIntro: true, nextEpisode: false, exitButton: false };
      }
      console.log('Retrieved options on load:', options);
      updateUI(options);
    });
  });
  