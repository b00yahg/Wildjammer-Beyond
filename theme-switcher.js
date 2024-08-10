// Array of background image URLs
const backgroundImages = [
  'https://images.ctfassets.net/swt2dsco9mfe/1Q99ur33fjWePT9vfm9RBP/39269626dd25b4ecda2bee48594041a2/2560x1600-jam-3.jpg',
  'https://images.ctfassets.net/swt2dsco9mfe/14G4ilzoLr30cne2Hrsrjr/97b7bc593b0efb73d270db3813fc6cd8/2560x1600-jam-2.jpg',
  'https://images.ctfassets.net/swt2dsco9mfe/7cDeMiZ88PEZU1Bn3bJ6ta/10b8b398d5874735a63fb40f3cf33cfa/2560x1600-jam-1.jpg',
  'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg',
  'https://assetsio.gnwcdn.com/dnd-5e-spelljammer-adventures-in-space-artwork.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
  'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17218-1920x1200.jpg',
  'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA22104-1920x1200.jpg',
  'https://live.staticflickr.com/65535/52259221868_e86daccb7d_6k.jpg',
  'https://live.staticflickr.com/65535/52211883799_abf0e1909c_6k.jpg',
  'https://static.wikia.nocookie.net/spelljammer/images/0/04/Hs-2007-16-a-large_web.jpg/revision/latest?cb=20210610184324', 
  'https://i.ibb.co/DQkcyhk/OH-time-to-spelljammer-for-sure-waifu2x-noise0-scale4x.png',
  'https://assetsio.gnwcdn.com/spelljammer-dnd-2e-artwork.png?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Dungeons-Dragons-Spelljammer-Pirates-Cropped.jpg',
  'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMDktYWRqLTEzLWcuanBn.jpg',
  'https://images.squarespace-cdn.com/content/v1/5cd1c8e165a707bd044a52b7/1573971953743-NC8MKRWBMOHZZSUFZ4A0/ke17ZwdGBToddI8pDm48kJRqFJ19D4P4EwsC9z3fiewUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkV64dCjSK7Zaaf7dwPYPO_gHf_vjqrS5WJoq1nmwotrP7cJNZlDXbgJNE9ef52e8w/Maria+Angelica+Beatriz+Ramirez+Morelos-Sky+Voyage.jpg?format=1500w',
  'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Spelljammer-Dead-God-Cover.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5',
];

// Array of custom names for the backgrounds
const backgroundNames = [
  "Spelljammer 1", "Spelljammer 2", "Spelljammer 3", "Spelljammer 4", "Spelljammer 5",
  "NASA 1", "NASA 2", "NASA 3", "NASA 4", "NASA 5",
  "Old School 1", "Old School 2", "Old School 3",
  "Misc 1", "Misc 2", "Misc 3"
];

let ships = [];

document.addEventListener('DOMContentLoaded', () => {
  initializePage();
});

// Function to initialize theme
function initializeTheme() {
  const storedDarkMode = localStorage.getItem('darkMode');
  let darkMode = storedDarkMode === null ? false : storedDarkMode === 'true';
  
  document.body.classList.toggle('dark-mode', darkMode);
  document.body.classList.toggle('light-mode', !darkMode);
  updateDynamicClasses();
}

// Function to switch between light and dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode', !isDarkMode);
  localStorage.setItem('darkMode', isDarkMode.toString());
  updateDynamicClasses();
}

// Function to change background image
function changeBackgroundImage(index) {
  document.body.style.backgroundImage = `url('${backgroundImages[index]}')`;
  localStorage.setItem('backgroundImageIndex', index);
}

// Function to create and append background image selector
function createBackgroundImageSelector() {
  const select = document.createElement('select');
  select.id = 'bgImageSelect';
  
  backgroundImages.forEach((_, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = backgroundNames[index] || `Background ${index + 1}`;
    select.appendChild(option);
  });
  
  select.addEventListener('change', (e) => changeBackgroundImage(e.target.value));
  document.body.appendChild(select);
}

// Function to load saved background
function loadSavedBackground() {
  const savedBgIndex = localStorage.getItem('backgroundImageIndex');
  if (savedBgIndex !== null) {
    changeBackgroundImage(parseInt(savedBgIndex));
    const bgSelect = document.getElementById('bgImageSelect');
    if (bgSelect) {
      bgSelect.value = savedBgIndex;
    }
  }
}

// Function to set up event listeners
function setupEventListeners() {
  const themeToggle = document.getElementById('toggleDarkMode');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', filterShips);
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', sortShips);
  }
}

function createCosmicDust() {
  const dustContainer = document.querySelector('.cosmic-dust');
  if (!dustContainer) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'dust-particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.width = `${Math.random() * 2 + 1}px`;
    particle.style.height = particle.style.width;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    dustContainer.appendChild(particle);
  }
}

// Function to apply magical glow effect
function applyMagicalGlow(element) {
  element.classList.add('magical-glow');
}

// Function to apply astral text effect
function applyAstralText(element) {
  element.classList.add('astral-text');
}

// Function to apply constellation background
function applyConstellationBg(element) {
  element.classList.add('constellation-bg');
}

// Function to create a crystal ball element
function createCrystalBall(container) {
  const crystalBall = document.createElement('div');
  crystalBall.className = 'crystal-ball';
  container.appendChild(crystalBall);
}

// Function to apply steampunk input style
function applySteampunkInput(input) {
  input.classList.add('steampunk-input');
}

// Function to create a loading rune
function createLoadingRune(container) {
  const loadingRune = document.createElement('div');
  loadingRune.className = 'loading-rune';
  container.appendChild(loadingRune);
}

// Function to update dynamic classes based on app state
function updateDynamicClasses() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Update button styles
  document.querySelectorAll('button, .magical-glow').forEach(element => {
    element.classList.toggle('dark-mode', isDarkMode);
    element.classList.toggle('light-mode', !isDarkMode);
  });
  
  // Update text styles
  document.querySelectorAll('.astral-text').forEach(element => {
    element.classList.toggle('dark-mode', isDarkMode);
    element.classList.toggle('light-mode', !isDarkMode);
  });
  
  // Update input styles
  document.querySelectorAll('input, select, textarea').forEach(element => {
    element.classList.toggle('dark-mode', isDarkMode);
    element.classList.toggle('light-mode', !isDarkMode);
  });

  // Update ship cards
  document.querySelectorAll('.ship-card').forEach(element => {
    element.classList.toggle('dark-mode', isDarkMode);
    element.classList.toggle('light-mode', !isDarkMode);
  });

  // Apply magical glow to buttons
  document.querySelectorAll('button').forEach(applyMagicalGlow);
  
  // Apply astral text to headings
  document.querySelectorAll('h1, h2, h3').forEach(applyAstralText);
  
  // Apply constellation background to containers
  document.querySelectorAll('.container').forEach(applyConstellationBg);
  
  // Apply steampunk style to inputs
  document.querySelectorAll('input, select, textarea').forEach(applySteampunkInput);
  
  // Create crystal balls in specific containers (example)
  document.querySelectorAll('.crystal-ball-container').forEach(createCrystalBall);
  
  // Create loading runes where needed (example)
  document.querySelectorAll('.loading-container').forEach(createLoadingRune);
}

// Function to load and display the list of ships
function loadShipList() {
  return new Promise((resolve) => {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
      showLoading(loadingIndicator);
    }
    setTimeout(() => {  // Simulating network delay
      try {
        const storedShips = JSON.parse(localStorage.getItem('wildjammerShips')) || {};
        const shipsWithIds = Object.entries(storedShips).map(([id, shipData]) => {
          try {
            return { id, ship: new Ship(shipData) };
          } catch (error) {
            console.error('Error creating Ship object:', error);
            return null;
          }
        }).filter(item => item !== null);
        displayShips(shipsWithIds);
      } catch (error) {
        console.error('Error loading ships:', error);
        displayError('An error occurred while loading the ships. Please try again.');
      } finally {
        if (loadingIndicator) {
          hideLoading(loadingIndicator);
        }
        resolve();
      }
    }, 1000);
  });
}

function displayShips(shipsToDisplay) {
  const shipList = document.getElementById('shipList');
  if (!shipList) {
    console.error('Ship list element not found');
    return;
  }
  shipList.innerHTML = '';
  if (!Array.isArray(shipsToDisplay) || shipsToDisplay.length === 0) {
    shipList.innerHTML = '<p>No ships found. Create a new Wildjammer to get started!</p>';
    return;
  }
  const fragment = document.createDocumentFragment();
  shipsToDisplay.forEach(({id, ship}) => {
    if (!ship || typeof ship !== 'object') {
      console.warn('Invalid ship object encountered');
      return;
    }
    const shipCard = document.createElement('div');
    shipCard.className = 'ship-card';
    shipCard.innerHTML = `
      <div class="ship-card-header">
        <h2 class="ship-name astral-text">${ship.name || 'Unnamed Ship'}</h2>
        <p class="ship-type">${ship.hullType || 'Unknown'} | ${getShipType(ship.hullType) || 'Unknown Type'}</p>
      </div>
      <div class="ship-card-content">
        <p class="ship-captain">Captain: ${ship.captain || 'No Captain Assigned'}</p>
        <div class="ship-actions">
          <a href="wildjammer-view-ship.html?id=${id}" class="magical-glow">VIEW</a>
          <a href="wildjammer-create-ship.html?id=${id}" class="magical-glow">EDIT</a>
          <button onclick="deleteShip('${id}')" class="magical-glow">DELETE</button>
        </div>
      </div>
    `;
    fragment.appendChild(shipCard);
  });
  shipList.appendChild(fragment);
  updateDynamicClasses();
}

function getShipType(hullType) {
  return wildjammerData && wildjammerData.hulls && wildjammerData.hulls[hullType]
    ? wildjammerData.hulls[hullType].type
    : 'Unknown';
}

function displayError(message) {
  const shipList = document.getElementById('shipList');
  if (shipList) {
    shipList.innerHTML = `<p class="error-message">${message}</p>`;
  }
}

function filterShips() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const searchTerm = searchInput.value.toLowerCase();
  const filteredShips = ships.filter(ship => 
    ship.name.toLowerCase().includes(searchTerm) ||
    ship.hullType.toLowerCase().includes(searchTerm) ||
    getShipType(ship.hullType).toLowerCase().includes(searchTerm)
  );
  displayShips(filteredShips);
}

function sortShips() {
  const sortSelect = document.getElementById('sortSelect');
  if (!sortSelect) return;

  const sortValue = sortSelect.value;
  const sortedShips = [...ships].sort((a, b) => {
    switch (sortValue) {
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      case 'sizeAsc':
        return getSizeOrder(a.hullType) - getSizeOrder(b.hullType);
      case 'sizeDesc':
        return getSizeOrder(b.hullType) - getSizeOrder(a.hullType);
      default:
        return 0;
    }
  });
  displayShips(sortedShips);
}

function getSizeOrder(hullType) {
  const sizeOrder = ['Fighter', 'Schooner', 'Sloop', 'Frigate', 'Heavy Frigate', 'Ship of the Line'];
  return sizeOrder.indexOf(getShipType(hullType));
}

function deleteShip(shipId) {
  if (confirm('Are you sure you want to delete this ship?')) {
    const storedShips = JSON.parse(localStorage.getItem('wildjammerShips')) || {};
    delete storedShips[shipId];
    localStorage.setItem('wildjammerShips', JSON.stringify(storedShips));
    loadShipList().then(updateDynamicClasses);
  }
}

function showLoading(container) {
  createLoadingRune(container);
  container.style.display = 'block';
}

function hideLoading(container) {
  const loadingRune = container.querySelector('.loading-rune');
  if (loadingRune) {
    loadingRune.remove();
  }
  container.style.display = 'none';
}

// Event listeners for dynamic class application
document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    applyMagicalGlow(e.target);
  }
});

// Make functions global so they can be called from inline onclick or other scripts
window.deleteShip = deleteShip;
window.toggleDarkMode = toggleDarkMode;
window.updateDynamicClasses = updateDynamicClasses;

// Global function to handle ship creation (if needed)
window.createShip = function(shipData) {
  const storedShips = JSON.parse(localStorage.getItem('wildjammerShips')) || {};
  const newShip = new Ship(shipData);
  storedShips[newShip.id] = newShip.toJSON();
  localStorage.setItem('wildjammerShips', JSON.stringify(storedShips));
  loadShipList().then(updateDynamicClasses);
};

// Global function to handle ship editing (if needed)
window.editShip = function(shipId, updatedData) {
  const storedShips = JSON.parse(localStorage.getItem('wildjammerShips')) || {};
  if (storedShips[shipId]) {
    Object.assign(storedShips[shipId], updatedData);
    localStorage.setItem('wildjammerShips', JSON.stringify(storedShips));
    loadShipList().then(updateDynamicClasses);
  }
};

// Function to initialize the page (can be called from HTML if needed)
window.initializePage = function() {
  initializeTheme();
  createBackgroundImageSelector();
  loadSavedBackground();
  setupEventListeners();
  createCosmicDust();
  loadShipList().then(updateDynamicClasses);
};

// Export functions for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeTheme,
    toggleDarkMode,
    changeBackgroundImage,
    createBackgroundImageSelector,
    createCosmicDust,
    updateDynamicClasses,
    loadShipList,
    filterShips,
    sortShips,
    deleteShip,
    createShip,
    editShip,
    initializePage
  };
}
