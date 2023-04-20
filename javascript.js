const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-menu');
const title = document.querySelector('.nav_title');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  title.classList.toggle('active');
  toggleButton.classList.add('hide');
  closeButton.classList.add('show');
});

closeButton.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  title.classList.remove('active');
  toggleButton.classList.remove('hide');
  closeButton.classList.remove('show');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  toggleButton.classList.remove('hide');
  closeButton.classList.remove('show');
  navbarLinks.classList.remove('active');
  title.classList.remove('active');
}));

// Dynamic projects section

// define array for storing  object for card content
const arrayElements = [];

// define objects  with content for each project card
const mainProject = {
  title: 'Indie Music Fest', description: 'A complete full fledged responsive website with multiple sections, a separate About page and dinamically generated items. In a few words a stable solid and functional website.', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder.png', link: 'https://relaxed-gecko-38d404.netlify.app/',
};
const project1 = {
  title: 'Awesome Books', description: 'A site mainly focussed on funcionality that stores data on local storage, fully functional.', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-2.png', link: 'https://gilded-stroopwafel-3e21e8.netlify.app/',
};
const project2 = {
  title: 'Data Dashboard', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-3.png',
};
const project3 = {
  title: 'Brand website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-4.png',
};
const project4 = {
  title: 'Shopping Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-2.png',
};
const project5 = {
  title: 'School Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-3.png',
};
const project6 = {
  title: 'eLearning Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['html', 'css', 'Javascript'], imageURL: 'images/Img_Placeholder-4.png',
};

// add objects to array
arrayElements.push(project1);
arrayElements.push(project2);
arrayElements.push(project3);
arrayElements.push(project4);
arrayElements.push(project5);
arrayElements.push(project6);

function addBlur() {
  document.querySelector('header').setAttribute('style', 'filter: blur(5px)');
  document.querySelector('main').setAttribute('style', 'filter: blur(5px)');
  document.querySelector('#Portfolio').setAttribute('style', 'filter: blur(5px)');
  document.querySelector('#About').setAttribute('style', 'filter: blur(5px)');
  document.querySelector('#Contact').setAttribute('style', 'filter: blur(5px)');
  document.querySelector('footer').setAttribute('style', 'filter: blur(5px)');
}

function removeBlur() {
  document.querySelector('header').removeAttribute('style', 'filter: blur(5px)');
  document.querySelector('main').removeAttribute('style', 'filter: blur(5px)');
  document.querySelector('#Portfolio').removeAttribute('style', 'filter: blur(5px)');
  document.querySelector('#About').removeAttribute('style', 'filter: blur(5px)');
  document.querySelector('#Contact').removeAttribute('style', 'filter: blur(5px)');
  document.querySelector('footer').removeAttribute('style', 'filter: blur(5px)');
}

// Dynamic content for main featured project card
/* eslint-disable prefer-destructuring */
const mainProjectContainer = document.querySelector('.featured_project');
const mainCardContent = document.querySelector('.main_card');

const mainCardH3 = document.createElement('h3');
mainCardH3.textContent = mainProject.title;

const mainCardP = document.createElement('p');
mainCardP.textContent = mainProject.description;

const mainCardButton = document.createElement('a');
mainCardButton.textContent = 'See Project';
mainCardButton.className = 'project-button';

const mainCardTags = document.createElement('ul');
mainCardTags.id = 'tags_featured';

let mainCardTagItem = document.createElement('li');
mainCardTagItem.textContent = mainProject.features[0];
mainCardTags.appendChild(mainCardTagItem);
mainCardTagItem = document.createElement('li');
mainCardTagItem.textContent = mainProject.features[1];
mainCardTags.appendChild(mainCardTagItem);
mainCardTagItem = document.createElement('li');
mainCardTagItem.textContent = mainProject.features[2];
mainCardTags.appendChild(mainCardTagItem);

mainCardContent.appendChild(mainCardH3);
mainCardContent.appendChild(mainCardP);
mainCardContent.appendChild(mainCardTags);
mainCardContent.appendChild(mainCardButton);

const mainProjectImg = document.createElement('img');
mainProjectImg.id = 'featured_img';
mainProjectImg.setAttribute('src', 'images/Img_Placeholder.png');

mainProjectContainer.appendChild(mainCardContent);
mainProjectContainer.appendChild(mainProjectImg);

// main card pop up action
mainCardButton.addEventListener('click', () => {
  const popup = document.createElement('div');
  popup.className = 'popup_container';
  popup.classList.add('text_styles');

  const popupHeader = document.createElement('div');
  popupHeader.className = 'popup_header';
  popupHeader.appendChild(mainCardH3);
  popupHeader.appendChild(mainCardTags);

  const popupImg = document.createElement('img');
  popupImg.setAttribute('src', 'images/Img_Placeholder.png');

  const liveButton = document.createElement('a');
  liveButton.textContent = ' See Live';
  liveButton.className = 'project-button';
  liveButton.setAttribute('href', `${mainProject.link}`);

  const sourceButton = document.createElement('a');
  sourceButton.textContent = 'See Source';
  sourceButton.className = 'project-button';
  sourceButton.setAttribute('href', 'https://github.com/EddxSotz/Capstone-Project-1');

  const seeLiveIcon = document.createElement('img');
  seeLiveIcon.setAttribute('src', 'images/Icon-see live.svg'); seeLiveIcon.setAttribute('style', 'width: 16px; margin-left: 10px');
  const sourceIcon = document.createElement('img');
  sourceIcon.setAttribute('src', 'images/Git-Hub.svg'); sourceIcon.setAttribute('style', 'width: 16px; margin-left: 10px');

  liveButton.appendChild(seeLiveIcon);
  sourceButton.appendChild(sourceIcon);

  const popupInfo = document.createElement('div');
  popupInfo.className = 'popup_info';
  popupInfo.appendChild(mainCardP);
  popupInfo.appendChild(liveButton);
  popupInfo.appendChild(sourceButton);

  const closeButton = document.createElement('img');
  closeButton.setAttribute('src', 'images/Icon - Cancel.svg');
  closeButton.id = 'close_btn';

  popup.appendChild(closeButton);
  popup.appendChild(popupInfo);
  popup.appendChild(popupHeader);
  popup.appendChild(popupImg);

  document.body.appendChild(popup);
  addBlur();

  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
    mainCardContent.appendChild(mainCardH3);
    mainCardContent.appendChild(mainCardP);
    mainCardContent.appendChild(mainCardTags);
    mainCardContent.appendChild(mainCardButton);
    removeBlur();
  });
});

// iterate through each array element and create project card and content dynamically
/* eslint-disable prefer-destructuring */

for (let i = 0; i < arrayElements.length; i += 1) {
// create the div element dinamically for each card
  const div = document.createElement('div');
  div.className = 'card_content';

  // create an h2 element dinamically
  const h4 = document.createElement('h4');
  h4.textContent = arrayElements[i].title;
  div.appendChild(h4);

  // create a parragraph element dinamically
  const parragraph = document.createElement('p');
  parragraph.textContent = arrayElements[i].description;
  div.appendChild(parragraph);

  // create an ul element to add list items
  const ul = document.createElement('ul');

  // create several li items and append them to ul element
  let li = document.createElement('li');
  li.textContent = arrayElements[i].features[0];
  li.className = 'tags';
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = arrayElements[i].features[1];
  li.className = 'tags';
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = arrayElements[i].features[2];
  li.className = 'tags';
  ul.appendChild(li);

  // Append the ul element containing all the li items
  div.appendChild(ul);

  // create button element
  const button = document.createElement('a');
  button.textContent = 'See Project';
  button.className = 'project-button';
  div.appendChild(button);

  // set the background image for all divs created
  const imgSource = arrayElements[i].imageURL;

  div.style.backgroundImage = `url('${imgSource}')`;
  div.style.backgroundRepeat = 'no-repeat';
  div.style.backgroundPosition = 'center';
  div.style.backgroundSize = 'Cover';

  // append the whole div to the container
  document.querySelector('.grid-container').appendChild(div);

  // Pop up action
  button.addEventListener('click', () => {

    const popup = document.createElement('div');
    popup.className = 'popup_container';
    popup.classList.add('text_styles');

    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup_header';
    popupHeader.appendChild(h4);
    popupHeader.appendChild(ul);

    const popupImg = document.createElement('img');
    popupImg.setAttribute('src', `${imgSource}`);

    const liveButton = document.createElement('a');
    liveButton.textContent = ' See Live';
    liveButton.className = 'project-button';
    liveButton.setAttribute('href', `${arrayElements[i].link}`);

    const seeLiveIcon = document.createElement('img');
    seeLiveIcon.setAttribute('src', 'images/Icon-see live.svg'); seeLiveIcon.setAttribute('style', 'width: 16px; margin-left: 10px');
    liveButton.appendChild(seeLiveIcon);

    const seeSourceButton = document.createElement('a');
    seeSourceButton.textContent = 'See source';
    seeSourceButton.className = 'project-button';
    seeSourceButton.setAttribute('href', 'https://github.com/EddxSotz/Awesome-Books-ES6');

    const sourceIcon = document.createElement('img');
    sourceIcon.setAttribute('src', 'images/Git-Hub.svg'); sourceIcon.setAttribute('style', 'width: 16px; margin-left: 10px');
    seeSourceButton.appendChild(sourceIcon);

    const popupInfo = document.createElement('div');
    popupInfo.className = 'popup_info';
    popupInfo.appendChild(parragraph);
    popupInfo.appendChild(liveButton);
    popupInfo.appendChild(seeSourceButton);

    const closeButton = document.createElement('img');
    closeButton.setAttribute('src', 'images/Icon - Cancel.svg');
    closeButton.id = 'close_btn';

    popup.appendChild(closeButton);
    popup.appendChild(popupInfo);
    popup.appendChild(popupHeader);
    popup.appendChild(popupImg);

    document.body.appendChild(popup);

    addBlur();

    closeButton.addEventListener('click', () => {
      document.body.removeChild(popup);
      div.appendChild(h4);
      div.appendChild(parragraph);
      div.appendChild(ul);
      div.appendChild(button);
      removeBlur();
    });
  });
}

// form validations
const user = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('text_box');
const form = document.getElementById('contact_form');
const reset = document.getElementById('reset');

const containsUpper = /[A-Z]/g;
let emailValue = '';

email.addEventListener('input', () => {
  emailValue = email.value;
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Invalid email address');
  } else {
    email.setCustomValidity('');
  }
});

function emailUpperChecker() {
  const foundUpper = emailValue.match(containsUpper);
  if (!foundUpper) {
    return false;
  }
  return true;
}

form.addEventListener('input', () => {
  const formData = {
    name: user.value,
    email: email.value,
    message: textarea.value,
  };
  if (formData) {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }
});

const storedData = localStorage.getItem('contactForm');

if (storedData) {
  const tempData = JSON.parse(storedData);
  user.value = tempData.name;
  email.value = tempData.email;
  textarea.value = tempData.message;
}
reset.addEventListener('click', () => {
  localStorage.removeItem('contactForm');
});

form.addEventListener('submit', (event) => {
  if (emailUpperChecker() === true) {
    event.preventDefault();
    email.setCustomValidity('Needs to be lowercase');
  }
  if (!email.validity.valid) {
    event.preventDefault();
  }
});
