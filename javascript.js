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

//     Dynamic projects section    

  //define array for storing  object for card content
let arrayElements = [];

  //define objects  with content for each project card
let project1 = {title: 'Website Portfolio', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-2.png'};
let project2 = {title: 'Data Dashboard', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-3.png'};
let project3 = {title: 'Brand website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-4.png'};
let project4 = {title: 'Shopping Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-2.png'};
let project5 = {title: 'School Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-3.png'};
let project6 = {title: 'eLearning Website', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus saepe quae dolore', features: ['HTML', 'CSS', 'Javascript'], imageURL:'images/Img_Placeholder-4.png'};


//add objects to array 
arrayElements.push(project1);
arrayElements.push(project2);
arrayElements.push(project3);
arrayElements.push(project4);
arrayElements.push(project5);
arrayElements.push(project6);


  //iterate through each array element
for(let i=0; i<arrayElements.length; i++){
   
  //create the div element dinamically for each card
let div = document.createElement('div');
div.className = 'card_content';

//create an h2 element dinamically 
let h4 = document.createElement('h4');
h4.textContent = arrayElements[i].title;
div.appendChild(h4);

//create a parragraph element dinamically
let parragraph = document.createElement('p');
parragraph.textContent = arrayElements[i].description;
div.appendChild(parragraph);


//create an ul element to add list items 
let ul = document.createElement('ul');

//create several li items and append them to ul element 
let li = document.createElement('li');
li.textContent = arrayElements[i].features[0];
ul.appendChild(li);

li = document.createElement('li');
li.textContent = arrayElements[i].features[1];
ul.appendChild(li);
  
li = document.createElement('li');
li.textContent = arrayElements[i].features[2];
ul.appendChild(li);

// Append the ul element containing all the li items
div.appendChild(ul);


//create button element 
let button = document.createElement('a');
button.textContent = 'See Project';
button.className ='project-button'
div.appendChild(button);

  /*
  //create a img element and add inside div on desktop size
let img = document.createElement('img');
img.setAttribute('src', 'https://free-images.com/lg/b3ac/instagram_social_media_web.jpg')
div.appendChild(img);
  */

  //set the background image for all divs created
let imgSource = arrayElements[i].imageURL;
  
div.style.backgroundImage = `url('${imgSource}')`;
div.style.backgroundRepeat = "no-repeat"
div.style.backgroundPosition = "center"
div.style.backgroundSize = "Cover"

//append the whole div to the container 
document.querySelector(".grid-container").appendChild(div);
}

//Pop up action

button.addEventListener('click', () => {
  
});