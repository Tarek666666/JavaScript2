/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  // declaring the Ul element so we will be able to append the other created element to it
  let createdUl = document.createElement('ul');

  // looping through the array of books
  for (let book of books) {
    // creating a list element for each book
    let createdLi = document.createElement('li');
    // chaning the HTML content of each li elemnt according to the data we need
    createdLi.innerHTML = ` <image src=${book.url} > <p> Title : ${book.title}  </p> <p> Author : ${
      book.author
    }  </p>  `;
    // checking if the key alreadyRead is true so we make the background of that element green, otherwise it will be red
    if (book.alreadyRead) {
      createdLi.style.backgroundColor = 'green';
    } else {
      createdLi.style.backgroundColor = 'red';
    }

    // last step, appending the created li elements to the ul element which we have declared

    createdUl.appendChild(createdLi);
  }

  // outside the scope of the loop , we return the createdUls variable in order to be able to  append the function to the container div

  return createdUl;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: './images/the-design-of-everything.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: './images/the-most-human.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    url: './images/pragmatic.jpg',
  },
];

createBookList(books);

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
