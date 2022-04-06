// ==== Data
const projects = [{
  // Project 1
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 2
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 3
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 4
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 5
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 6
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: '../images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: '../images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
}];

// ==== Show-hide functions
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

// ==== Show work popup function


// ==== Mobile nav open-close
const container = document.getElementById('mobile-menu-container');
const open = document.getElementById('button-mobile-hamburger');
const close = document.getElementById('button-mobile-close');

open.addEventListener('click', () => show(container));
close.addEventListener('click', () => hide(container));

// ==== Mobile nav menu
const menuPortfolio = document.getElementById('button-mobile-portfolio');
const menuAbout = document.getElementById('button-mobile-about');
const menuContact = document.getElementById('button-mobile-contact');

menuPortfolio.addEventListener('click', () => hide(container));
menuAbout.addEventListener('click', () => hide(container));
menuContact.addEventListener('click', () => hide(container));

// ==== Work popup
const seeProjectButtons = document.querySelectorAll('work-show-button');
const buttonIndex = 0;

seeProjectButtons.forEach((button) => {
  button.addEventListener('click', () => showWorkPopup(indexOf(button)));
});
