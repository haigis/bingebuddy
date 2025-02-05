document.addEventListener('DOMContentLoaded', function() {
  const skipIntroCheckbox = document.getElementById('skipIntro');
  const nextEpisodeCheckbox = document.getElementById('nextEpisode');
  const exitButtonToggleCheckbox = document.getElementById('exitButtonToggle');
  const saveIcon = document.getElementById('saveIcon');
  const searchInput = document.getElementById('genreSearch');
  const genreList = document.getElementById('genreList');
  const body = document.querySelector('body');
  const netflixOnlySection = document.getElementById('netflix-only');

  // Function to resize the popup based on content
  function resizePopup() {
    const bodyHeight = document.body.scrollHeight;
    chrome.runtime.sendMessage({ action: 'resizePopup', height: bodyHeight });
  }

  // Load settings from storage and apply them to the checkboxes
  function loadSettings() {
    chrome.storage.sync.get(['skipIntro', 'nextEpisode', 'exitAfterVideo'], function(settings) {
      console.log('Loaded settings:', settings); // Log loaded settings
      skipIntroCheckbox.checked = settings.skipIntro ?? false;
      nextEpisodeCheckbox.checked = settings.nextEpisode ?? false;
      exitButtonToggleCheckbox.checked = settings.exitAfterVideo ?? false;
      resizePopup(); // Resize popup after loading settings
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
      resizePopup(); // Resize popup after saving settings
    });
  }

  // Add event listeners to save settings when checkboxes change
  skipIntroCheckbox.addEventListener('change', saveSettings);
  nextEpisodeCheckbox.addEventListener('change', function() {
    if (nextEpisodeCheckbox.checked) {
      exitButtonToggleCheckbox.checked = false;
    }
    saveSettings();
  });
  exitButtonToggleCheckbox.addEventListener('change', function() {
    if (exitButtonToggleCheckbox.checked) {
      nextEpisodeCheckbox.checked = false;
    }
    saveSettings();
  });

  // Initial load of settings
  loadSettings();

  // Show genre search section only on Netflix
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
    if (url.includes('netflix.com')) {
      netflixOnlySection.classList.remove('hidden');
      resizePopup(); // Resize popup when showing the Netflix-only section
    }
  });

  // Expand the body when the search input is focused
  searchInput.addEventListener('focus', function() {
    body.style.height = '800px';
    resizePopup();
  });

  // Filter genres based on search input
  function renderGenres(genresToRender) {
    genreList.innerHTML = '';
    genresToRender.forEach(genre => {
      const div = document.createElement('div');
      div.className = 'genre-item';
      div.textContent = genre.name;
      div.addEventListener('click', () => {
        window.open(`https://www.netflix.com/browse/genre/${genre.code}`, '_blank');
      });
      genreList.appendChild(div);
    });
    resizePopup(); // Resize popup after rendering genres
  }

  // Load genres from search.js
  renderGenres(genres); // Initial render

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredGenres = genres.filter(genre => genre.name.toLowerCase().includes(query));
    renderGenres(filteredGenres);
  });
});
