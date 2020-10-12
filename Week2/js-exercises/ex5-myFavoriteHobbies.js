/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here
  // creating h1 elemnt to out put the hobbies in html page && the list which will hold the hobbies as items in this list
  let h1 = document.createElement('h1');
  h1.innerText = 'My hobbies';
  document.body.appendChild(h1);
  let hobbiesList = document.createElement('ul');
  
  // looping through the array, create li for each elemnt and append the result to the unorderedlist
  arr.map(hobby => {
    let itemOfList = document.createElement('li');
    itemOfList.innerText = hobby;
    document.body.appendChild(hobbiesList);
    hobbiesList.appendChild(itemOfList);
  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);
