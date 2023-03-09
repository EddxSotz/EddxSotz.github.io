/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
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
const main_project = {
  title: 'Multi-Post Stories', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industries standard dummy textever since the 1500s, when an unknown printer took a standard dummy text.', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder.png',
};
const project1 = {
  title: 'Website Portfolio', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-2.png',
};
const project2 = {
  title: 'Data Dashboard', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-3.png',
};
const project3 = {
  title: 'Brand website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-4.png',
};
const project4 = {
  title: 'Shopping Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-2.png',
};
const project5 = {
  title: 'School Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-3.png',
};
const project6 = {
  title: 'eLearning Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL: 'images/Img_Placeholder-4.png',
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
const main_project_container = document.querySelector('.featured_project');
const main_card_content = document.querySelector('.main_card');

const main_card_h3 = document.createElement('h3');
main_card_h3.textContent = main_project.title;

const main_card_p = document.createElement('p');
main_card_p.textContent = main_project.description;

const main_card_button = document.createElement('a');
main_card_button.textContent = 'See Project';
main_card_button.className = 'project-button';

const main_card_tags = document.createElement('ul');
main_card_tags.id = 'tags_featured';

let main_card_tag_item = document.createElement('li');
main_card_tag_item.textContent = main_project.features[0];
main_card_tags.appendChild(main_card_tag_item);
main_card_tag_item = document.createElement('li');
main_card_tag_item.textContent = main_project.features[1];
main_card_tags.appendChild(main_card_tag_item);
main_card_tag_item = document.createElement('li');
main_card_tag_item.textContent = main_project.features[2];
main_card_tags.appendChild(main_card_tag_item);

main_card_content.appendChild(main_card_h3);
main_card_content.appendChild(main_card_p);
main_card_content.appendChild(main_card_tags);
main_card_content.appendChild(main_card_button);

const main_project_img = document.createElement('img');
main_project_img.id = 'featured_img';
main_project_img.setAttribute('src', 'images/Img_Placeholder.png');

main_project_container.appendChild(main_card_content);
main_project_container.appendChild(main_project_img);

// main card pop up action
main_card_button.addEventListener('click', () => {
  const popup = document.createElement('div');
  popup.className = 'popup_container';
  popup.classList.add('text_styles');

  const popup_header = document.createElement('div');
  popup_header.className = 'popup_header';
  popup_header.appendChild(main_card_h3);
  popup_header.appendChild(main_card_tags);

  const popup_img = document.createElement('img');
  popup_img.setAttribute('src', 'images/Img_Placeholder.png');

  const live_button = document.createElement('a');
  live_button.textContent = ' See Live';
  live_button.className = 'project-button';

  const source_button = document.createElement('a');
  source_button.textContent = 'See Source';
  source_button.className = 'project-button';

  const see_live_icon = document.createElement('img');
  see_live_icon.setAttribute('src', 'images/Icon-see live.svg'); see_live_icon.setAttribute('style', 'width: 16px; margin-left: 10px');
  const source_icon = document.createElement('img');
  source_icon.setAttribute('src', 'images/Git-Hub.svg'); source_icon.setAttribute('style', 'width: 16px; margin-left: 10px');

  live_button.appendChild(see_live_icon);
  source_button.appendChild(source_icon);

  const popup_info = document.createElement('div');
  popup_info.className = 'popup_info';
  popup_info.appendChild(main_card_p);
  popup_info.appendChild(live_button);
  popup_info.appendChild(source_button);

  const close_button = document.createElement('img');
  close_button.setAttribute('src', 'images/CloseBtn_dark.svg');
  close_button.id = 'close_btn';

  popup.appendChild(close_button);
  popup.appendChild(popup_info);
  popup.appendChild(popup_header);
  popup.appendChild(popup_img);

  document.body.appendChild(popup);
  addBlur();

  close_button.addEventListener('click', () => {
    document.body.removeChild(popup);
    main_card_content.appendChild(main_card_h3);
    main_card_content.appendChild(main_card_p);
    main_card_content.appendChild(main_card_tags);
    main_card_content.appendChild(main_card_button);
    removeBlur();
  });
});

// iterate through each array element and create project card and content dynamically

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

    const popup_header = document.createElement('div');
    popup_header.className = 'popup_header';
    popup_header.appendChild(h4);
    popup_header.appendChild(ul);

    const popup_img = document.createElement('img');
    popup_img.setAttribute('src', `${imgSource}`);

    const live_button = document.createElement('a');
    live_button.textContent = ' See Live';
    live_button.className = 'project-button';

    const see_live_icon = document.createElement('img');
    see_live_icon.setAttribute('src', 'images/Icon-see live.svg'); see_live_icon.setAttribute('style', 'width: 16px; margin-left: 10px');
    live_button.appendChild(see_live_icon);

    const see_source_button = document.createElement('a');
    see_source_button.textContent = 'See source';
    see_source_button.className = 'project-button';

    const source_icon = document.createElement('img');
    source_icon.setAttribute('src', 'images/Git-Hub.svg'); source_icon.setAttribute('style', 'width: 16px; margin-left: 10px');
    see_source_button.appendChild(source_icon);

    const popup_info = document.createElement('div');
    popup_info.className = 'popup_info';
    popup_info.appendChild(parragraph);
    popup_info.appendChild(live_button);
    popup_info.appendChild(see_source_button);

    const close_button = document.createElement('img');
    close_button.setAttribute('src', 'images/CloseBtn_dark.svg');
    close_button.id = 'close_btn';

    popup.appendChild(close_button);
    popup.appendChild(popup_info);
    popup.appendChild(popup_header);
    popup.appendChild(popup_img);

    document.body.appendChild(popup);

    addBlur();

    close_button.addEventListener('click', () => {
      document.body.removeChild(popup);
      div.appendChild(h4);
      div.appendChild(parragraph);
      div.appendChild(ul);
      div.appendChild(button);
      removeBlur();
    });
  });
}