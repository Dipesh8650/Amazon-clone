// === 1. Search bar functionality ===
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== '') {
    alert(`You searched for: "${query}"`);
  } else {
    alert('Please type something to search.');
  }
});

// === 2. Toggle menu for small screens (hamburger icon) ===
const menuBtn = document.querySelector('.panel-all');
const panelOptions = document.querySelector('.panel-options');

menuBtn.addEventListener('click', () => {
  panelOptions.classList.toggle('active');
});

// === 3. Cart button functionality ===
const cart = document.querySelector('.nav-cart');

cart.addEventListener('click', () => {
  alert('Sorry 😅');
});

cart.addEventListener('mouseleave', () => {
  cart.style.color = 'white';
});
