// ==== Data
const projects = [{
  // Project 1
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 2
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 3
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 4
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 5
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
  technologiesMobile: ['Ruby on Rails', 'css', 'JavaScript'],
  technologiesDesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: '#',
  source: '#',
},
{
  // Project 6
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageMobile: 'images/backgrounds/snapshoot-portfolio.svg',
  imageDesktop: 'images/backgrounds/snapshoot-portfolio-desktop.svg',
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
const showWorkPopup = (index) => {
  // Define the targets
  let workPopup;

  if (window.innerWidth < 768) {
    // If mobile
    workPopup = document.querySelector('#wpc-mobile'); // !! Don't forget to add #wpc-mobile in html
  } else {
    // If desktop
    workPopup = document.querySelector('#wpc-desktop'); // !! Don't forget to add #wpc-desktop in html
  }

  const img = workPopup.querySelector('.work-popup-img'); // !! Don't forget to add .work-popup-img in html
  const title = workPopup.querySelector('h3');
  const tags = workPopup.querySelector('.work-tag-popup');
  const desc = workPopup.querySelector('p');
  const live = workPopup.querySelector('.project-live'); // !! Don't forget to add .project-live in html
  const source = workPopup.querySelector('.project-source'); // !! Don't forget to add .project-source in html

  // Generate contents to the targets
  // Make distiction for mobile and desktop
  let thumb;
  let tech;

  if (window.innerWidth < 768) {
    // If mobile
    thumb = projects[index].imageMobile;
    tech = projects[index].technologiesMobile;
  } else {
    // If desktop
    thumb = projects[index].imageDesktop;
    tech = projects[index].technologiesDesktop;
  }

  // Generate content
  img.src = thumb;
  title.textContent = projects[index].name;
  desc.textContent = projects[index].description;
  live.onclick = () => { window.location = projects[index].live; };
  source.onclick = () => { window.location = projects[index].source; };
  // Special case for the tags:
  // 1. Clear children (li's)
  tags.textContent = '';
  // 2. Loop over the technologies
  let techIndex = 0;
  tech.forEach(() => {
    // 3. Create the element
    const el = document.createElement('li');
    // 4. Add classes
    el.classList.add('grey', 'text-green-dark');
    // 5. Add text
    el.textContent = tech[techIndex];
    // 6. Add the element to the DOM
    tags.appendChild(el);

    techIndex++;
  });

  // Show
  if (window.innerWidth < 768) {
    show(workPopup);
  } else {
    show(workPopup);
  }
};

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
const seeProjectButtons = document.querySelectorAll('.work-show-button');
const buttonIndex = 0;

seeProjectButtons.forEach((button) => {
  button.onclick = () => showWorkPopup(buttonIndex);

  buttonIndex++;
});
