// ==== Show-hide functions declarations ==== //
function show(toSHow) {
  // Remove hide class and add show class
  toSHow.classList.remove('hide');
  toSHow.classList.add('show');
}

function hide(toHide) {
  // Remove show class and add hide class
  toHide.classList.remove('show');
  toHide.classList.add('hide');
}

// ==== Mobile nav open-close ==== //
const container = document.getElementById('mobile-menu-container');
const open = document.getElementById('button-mobile-hamburger');
const close = document.getElementById('button-mobile-close');

open.addEventListener('click', () => show(container));
close.addEventListener('click', () => hide(container));

// ==== Mobile nav menu ==== //
const menuPortfolio = document.getElementById('button-mobile-portfolio');
const menuAbout = document.getElementById('button-mobile-about');
const menuContact = document.getElementById('button-mobile-contact');

menuPortfolio.addEventListener('click', () => hide(container));
menuAbout.addEventListener('click', () => hide(container));
menuContact.addEventListener('click', () => hide(container));
