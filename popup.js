document.addEventListener('DOMContentLoaded', function() {
  const skipIntroCheckbox = document.getElementById('skipIntro');
  const nextEpisodeCheckbox = document.getElementById('nextEpisode');
  const exitButtonToggleCheckbox = document.getElementById('exitButtonToggle');
  const saveIcon = document.getElementById('saveIcon');

  // Load settings from storage and apply them to the checkboxes
  function loadSettings() {
    chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitAfterVideo'], function(settings) {
      console.log('Loaded settings:', settings); // Log loaded settings
      skipIntroCheckbox.checked = settings.skipIntro ?? false;
      nextEpisodeCheckbox.checked = settings.nextEpisode ?? false;
      exitButtonToggleCheckbox.checked = settings.exitAfterVideo ?? false;
    });
  }

  // Save settings to storage
  function saveSettings() {
    const settings = {
      skipIntro: skipIntroCheckbox.checked,
      nextEpisode: nextEpisodeCheckbox.checked,
      exitAfterVideo: exitButtonToggleCheckbox.checked
    };
    chrome.storage.sync.set(settings, function() {
      console.log('Saved settings:', settings); // Log saved settings
      // Show save icon briefly
      saveIcon.style.display = 'block';
      setTimeout(() => {
        saveIcon.style.display = 'none';
      }, 1000);
    });
  }

  // Add event listeners to save settings when checkboxes change
  skipIntroCheckbox.addEventListener('change', saveSettings);
  nextEpisodeCheckbox.addEventListener('change', saveSettings);
  exitButtonToggleCheckbox.addEventListener('change', saveSettings);

  // Initial load of settings
  loadSettings();
});

document.getElementById('genreSearch').addEventListener('input', function() {
  const input = this.value.toLowerCase();
  const suggestions = genres.filter(genre => genre.name.toLowerCase().includes(input));
  const suggestionBox = document.getElementById('autocomplete-list');
  
  suggestionBox.innerHTML = '';
  
  suggestions.forEach(genre => {
    const div = document.createElement('div');
    div.className = 'autocomplete-suggestion';
    div.textContent = genre.name;
    div.addEventListener('click', () => {
      window.open(`https://www.netflix.com/browse/genre/${genre.code}`, '_blank');
    });
    suggestionBox.appendChild(div);
  });
});
