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

// ==== Shorthand function for creating generic elements
// elem = string, classes = array of string(s), parent = DOM element
function addElem(elem, classes, parent) {
  const createdElem = document.createElement(elem);
  classes.forEach((cl) => createdElem.classList.add(cl));
  parent.appendChild(createdElem);

  return createdElem;
}

// ==== Show work popup function
const showWorkPopup = (index) => {
  // Define the targets
  const main = document.querySelector('main');
  let workPopup;
  let workPopupBg;
  let workPopupClose;
  let closeImg;
  let workPopupContentContainer;
  let workPopupTitle;
  let workPopupImg;
  let workPopupTag;
  let workPopupDesc;
  let workPopupBut;
  let seeLiveBtn;
  let seeLiveBtnSpan;
  let seeLiveBtnImg;
  let seeSrcBtn;
  let seeSrcBtnSpan;
  let seeSrcBtnImg;
  let workPopupCloseCntr;
  let workPopupTitleBut;

  if (window.innerWidth < 768) {
    // If mobile
    // 1
    workPopup = document.createElement('div');
    workPopup.classList.add('js-container', 'work-popup-container', 'hide');
    main.appendChild(workPopup);
    // 1.1
    workPopupBg = document.createElement('div');
    workPopupBg.classList.add('work-popup-bg');
    workPopup.appendChild(workPopupBg);
    // 1.1.1
    workPopupClose = document.createElement('a');
    workPopupClose.classList.add('work-popup-close', 'close-button');
    workPopupBg.appendChild(workPopupClose);
    // 1.1.1.1
    closeImg = document.createElement('img');
    closeImg.setAttribute('src', 'images/icons/cancel-button-mobile.svg');
    closeImg.setAttribute('alt', 'cancel-button');
    workPopupClose.appendChild(closeImg);
    // 1.1.2
    workPopupContentContainer = document.createElement('div');
    workPopupContentContainer.classList.add('work-popup-content-container');
    workPopupBg.appendChild(workPopupContentContainer);
    // 1.1.2.1
    workPopupImg = document.createElement('img');
    workPopupImg.classList.add('work-popup-img');
    workPopupImg.setAttribute('src', '');
    workPopupImg.setAttribute('alt', 'project thumbnail');
    workPopupContentContainer.appendChild(workPopupImg);
    // 1.1.2.2
    workPopupTitle = document.createElement('h3');
    workPopupTitle.classList.add('text-blue', 'font-600-32-44');
    workPopupContentContainer.appendChild(workPopupTitle);
    // 1.1.2.3
    workPopupTag = document.createElement('ul');
    workPopupTag.classList.add('work-tag', 'work-tag-popup');
    workPopupContentContainer.appendChild(workPopupTag);
    // 1.1.2.4
    workPopupDesc = document.createElement('p');
    workPopupDesc.classList.add('text-blue-2');
    workPopupContentContainer.appendChild(workPopupDesc);
    // 1.1.2.5
    workPopupBut = document.createElement('div');
    workPopupBut.classList.add('work-popup-buttons');
    workPopupContentContainer.appendChild(workPopupBut);
    // 1.1.2.5.1
    seeLiveBtn = document.createElement('button');
    seeLiveBtn.classList.add('button-1', 'project-live');
    seeLiveBtn.setAttribute('type', 'button');
    workPopupBut.appendChild(seeLiveBtn);
    // 1.1.2.5.1.1
    seeLiveBtnSpan = document.createElement('span');
    seeLiveBtnSpan.textContent = 'See Live';
    seeLiveBtn.appendChild(seeLiveBtnSpan);
    // 1.1.2.5.1.2
    seeLiveBtnImg = document.createElement('img');
    seeLiveBtnImg.setAttribute('src', 'images/icons/see-live.svg');
    seeLiveBtnImg.setAttribute('alt', 'see-live-icon');
    seeLiveBtn.appendChild(seeLiveBtnImg);
    // 1.1.2.5.2
    seeSrcBtn = document.createElement('button');
    seeSrcBtn.classList.add('button-1', 'project-live');
    seeSrcBtn.setAttribute('type', 'button');
    workPopupBut.appendChild(seeSrcBtn);
    // 1.1.2.5.2.1
    seeSrcBtnSpan = document.createElement('span');
    seeSrcBtnSpan.textContent = 'See Source';
    seeSrcBtn.appendChild(seeSrcBtnSpan);
    // 1.1.2.5.2.2
    seeSrcBtnImg = document.createElement('img');
    seeSrcBtnImg.setAttribute('src', 'images/icons/github-white.svg');
    seeSrcBtnImg.setAttribute('alt', 'see-live-icon');
    seeSrcBtn.appendChild(seeSrcBtnImg);
  } else {
    // If desktop
    // 1
    workPopup = document.createElement('div');
    workPopup.classList.add('js-container', 'work-popup-container', 'hide');
    main.appendChild(workPopup);
    // 1.1
    workPopupBg = document.createElement('div');
    workPopupBg.classList.add('work-popup-bg');
    workPopup.appendChild(workPopupBg);
    // 1.1.1
    workPopupContentContainer = document.createElement('div');
    workPopupContentContainer.classList.add('work-popup-content-container');
    workPopupBg.appendChild(workPopupContentContainer);
    // 1.1.1.1
    workPopupCloseCntr = document.createElement('div');
    workPopupCloseCntr.classList.add('work-popup-close-container');
    workPopupContentContainer.appendChild(workPopupCloseCntr);
    // 1.1.1.1.1
    workPopupClose = document.createElement('a');
    workPopupClose.classList.add('work-popup-close', 'close-button');
    workPopupCloseCntr.appendChild(workPopupClose);
    // 1.1.1.1.1.1
    closeImg = document.createElement('img');
    closeImg.setAttribute('src', 'images/icons/cancel-button-desktop.svg');
    closeImg.setAttribute('alt', 'cancel-button');
    workPopupClose.appendChild(closeImg);
    // 1.1.1.2
    workPopupImg = document.createElement('img');
    workPopupImg.classList.add('work-popup-img');
    workPopupImg.setAttribute('src', '');
    workPopupImg.setAttribute('alt', 'project thumbnail');
    workPopupContentContainer.appendChild(workPopupImg);
    // 1.1.1.3
    workPopupTitleBut = document.createElement('div');
    workPopupTitleBut.classList.add('work-popup-title_buttons');
    workPopupContentContainer.appendChild(workPopupTitleBut);
    // 1.1.1.3.1
    workPopupTitle = document.createElement('h3');
    workPopupTitle.classList.add('text-blue', 'font-700-32-44');
    workPopupTitleBut.appendChild(workPopupTitle);
    // 1.1.1.3.2
    workPopupBut = document.createElement('div');
    workPopupBut.classList.add('work-popup-buttons');
    workPopupTitleBut.appendChild(workPopupBut);
    // 1.1.1.3.2.1
    seeLiveBtn = document.createElement('button');
    seeLiveBtn.classList.add('button-1', 'project-live');
    seeLiveBtn.setAttribute('type', 'button');
    workPopupBut.appendChild(seeLiveBtn);
    // 1.1.1.3.2.1.1
    seeLiveBtnSpan = document.createElement('span');
    seeLiveBtnSpan.textContent = 'See Live';
    seeLiveBtn.appendChild(seeLiveBtnSpan);
    // 1.1.1.3.2.1.2
    seeLiveBtnImg = document.createElement('img');
    seeLiveBtnImg.setAttribute('src', 'images/icons/see-live.svg');
    seeLiveBtnImg.setAttribute('alt', 'see-live-icon');
    seeLiveBtn.appendChild(seeLiveBtnImg);
    // 1.1.1.3.2.2
    seeSrcBtn = document.createElement('button');
    seeSrcBtn.classList.add('button-1', 'project-live');
    seeSrcBtn.setAttribute('type', 'button');
    workPopupBut.appendChild(seeSrcBtn);
    // 1.1.1.3.2.2.1
    seeSrcBtnSpan = document.createElement('span');
    seeSrcBtnSpan.textContent = 'See Source';
    seeSrcBtn.appendChild(seeSrcBtnSpan);
    // 1.1.1.3.2.2.2
    seeSrcBtnImg = document.createElement('img');
    seeSrcBtnImg.setAttribute('src', 'images/icons/github-white.svg');
    seeSrcBtnImg.setAttribute('alt', 'see-live-icon');
    seeSrcBtn.appendChild(seeSrcBtnImg);
    // 1.1.1.4
    workPopupTag = document.createElement('ul');
    workPopupTag.classList.add('work-tag', 'work-tag-popup');
    workPopupContentContainer.appendChild(workPopupTag);
    // 1.1.1.5
    workPopupDesc = document.createElement('p');
    workPopupDesc.classList.add('text-blue-2');
    workPopupContentContainer.appendChild(workPopupDesc);
  }

  // Targets
  const img = workPopupImg;
  const title = workPopupTitle;
  const tags = workPopupTag;
  const desc = workPopupDesc;
  const live = seeLiveBtn;
  const source = seeSrcBtn;

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
  tech.forEach((elem, index) => {
    // 3. Create the element
    const el = document.createElement('li');
    // 4. Add classes
    el.classList.add('grey', 'text-green-dark');
    // 5. Add text
    el.textContent = tech[index];
    // 6. Add the element to the DOM
    tags.appendChild(el);
  });

  // Add close function
  workPopupClose.addEventListener('click', () => {
    hide(workPopup);
    main.removeChild(workPopup);
  });

  // Show
  show(workPopup);
};

// ==== Mobile nav
const container = document.getElementById('mobile-menu-container');
const open = document.getElementById('button-mobile-hamburger');
const close = document.getElementById('button-mobile-close');

open.addEventListener('click', () => show(container));
close.addEventListener('click', () => hide(container));

// Mobile nav menu
const menuPortfolio = document.getElementById('button-mobile-portfolio');
const menuAbout = document.getElementById('button-mobile-about');
const menuContact = document.getElementById('button-mobile-contact');

menuPortfolio.addEventListener('click', () => hide(container));
menuAbout.addEventListener('click', () => hide(container));
menuContact.addEventListener('click', () => hide(container));

// ==== Projects section content generator
const workContainer = document.querySelector('.work-container');

projects.forEach((project, index) => {
  const workCard = addElem('li', ['work', 'grey'], workContainer);
  addElem('div', ['work-image'], workCard);
  const workDetails = addElem('div', ['work-details', 'white'], workCard);
  const workTitle = addElem('div', ['work-title'], workDetails);
  const workTitleTxt = addElem('h3', ['text-green-dark'], workTitle);
  workTitleTxt.textContent = project.name;
  const workTags = addElem('ul', ['work-tag'], workDetails);
  let workTag;
  project.technologiesMobile.forEach((tech) => {
    workTag = addElem('li', ['grey', 'text-green-dark'], workTags);
    workTag.textContent = tech;
  });
  const workButton = addElem('button', ['button-1', 'work-show-button'], workDetails);
  workButton.setAttribute('type', 'button');
  workButton.textContent = 'See Project';

  workButton.onclick = () => showWorkPopup(index);
});

// ==== Work popup
const seeProjectButtons = document.querySelectorAll('.work-show-button');

seeProjectButtons.forEach((button, index) => {
  button.onclick = () => showWorkPopup(index);
});

// Form validation
const email = document.querySelector('#form-email'); // Don't forget to fix id typo in html
const validationReport = document.getElementById('validation-report');
const form = document.querySelector('form');
email.addEventListener('input', () => {
  if (/[A-Z]/.test(email.value)) {
    validationReport.textContent = 'email must be all lowercase!';
    form.onsubmit = (e) => e.preventDefault();
    email.reportValidity();
  } else {
    validationReport.textContent = '';
  }
});

