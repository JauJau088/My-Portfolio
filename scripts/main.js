const open = document.getElementById('menu-hamburger-button');
const close = document.getElementById('menu-close-button');
const container = document.getElementById('mobile-menu-container');

open.addEventListener('click', () => {
  // Remove hide class and add show class to the menu container
  container.classList.remove('hide');
  container.classList.add('show');
});

close.addEventListener('click', () => {
  // Remove show class and add hide class to the menu container
  container.classList.remove('show');
  container.classList.add('hide');
});
