const open = document.getElementById('button-mobile-hamburger');
const close = document.getElementById('button-mobile-close');
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
