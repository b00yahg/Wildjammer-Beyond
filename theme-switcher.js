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
  // Add more image URLs as needed
];

// Array of custom names for the backgrounds
const backgroundNames = [
  "Spelljammer 1", "Spelljammer 2", "Spelljammer 3", "Spelljammer 4", "Spelljammer 5",
  "NASA 1", "NASA 2", "NASA 3", "NASA 4", "NASA 5",
  "Old School 1", "Old School 2", "Old School 3",
  "Misc 1", "Misc 2", "Misc 3"
];

// Function to switch between light and dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Function to change background image
function changeBackgroundImage(index) {
  document.body.style.backgroundImage = `url('${backgroundImages[index]}')`;
  localStorage.setItem('backgroundImageIndex', index);
}

// Updated function to create and append background image selector
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

function createCosmicDust() {
  const dustContainer = document.querySelector('.cosmic-dust');
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

// Initialize theme and background
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  const darkMode = localStorage.getItem('darkMode') === 'true';
  document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');

  // Create background image selector
  createBackgroundImageSelector();

  // Set initial background image
  const savedBgIndex = localStorage.getItem('backgroundImageIndex');
  if (savedBgIndex !== null) {
    changeBackgroundImage(parseInt(savedBgIndex));
    document.getElementById('bgImageSelect').value = savedBgIndex;
  }

  // Add event listener to theme toggle button
  const themeToggle = document.getElementById('toggleDarkMode');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
  }

  // Create cosmic dust effect
  createCosmicDust();
});
