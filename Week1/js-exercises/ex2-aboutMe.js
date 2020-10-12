/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

//variables
const body = document.querySelector('body');
const nickName = document.getElementById('nickname');
const favoriteFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
const listItems = document.querySelectorAll('ul li');

// DOM manipulation
body.style.fontFamily = 'Arial, sans-serif';

nickName.innerText = 'Tarek Aljabr';
favoriteFood.innerText = 'Fish';
homeTown.innerText = 'Syria';

// iterating the list to add class 'list-item'

listItems.forEach(item => (item.className = 'list-item'));

// creating img element and append it to the page

const myImage = document.createElement('img');

myImage.src = './images/myPhoto.jpg';
myImage.style.margin = 'auto';

body.appendChild(myImage);
