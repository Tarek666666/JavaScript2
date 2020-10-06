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
const FavoriteFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
const allLists = document.querySelectorAll('ul li');

// DOM manipulation
body.style.fontFamily = 'Arial, sans-serif';

nickName.innerText = 'Tarek Aljabr';
FavoriteFood.innerText = 'Fish';
homeTown.innerText = 'Syria';

// iterating the list to add class 'list-item'

allLists.forEach(x => (x.className = 'list-item'));

// creating img element and append it to the page

const myImage = document.createElement('img');

myImage.src = './images/myPhoto.jpg';
myImage.style.margin = 'auto';

body.appendChild(myImage);
