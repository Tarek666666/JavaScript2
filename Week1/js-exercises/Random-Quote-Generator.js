// variables

const outPutField = document.querySelector('.quote-output');
const button = document.querySelector('.gererator');
const writerOutput = document.querySelector('.writer');

// array of quotes

const listOfQuote = [
  {
    quote: 'How many cares one loses when one decides not to be something but to be someone .',
    writer: '-Gabrielle “Coco” Chanel',
  },
  {
    quote:
      'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind .',
    writer: '-Dr. Seuss',
  },
  {
    quote: 'Do your own thing on your own terms and get what you came here for .',
    writer: '-Oliver James',
  },
  { quote: 'Flatter yourself critically .', writer: '-Willis Goth Regier' },
  {
    quote: 'Do what you feel in your heart to be right, for you’ll be criticized anyway .',
    writer: '-Eleanor Roosevelt',
  },
  {
    quote:
      'Whenever you find yourself on the side of the majority, it is time to pause and reflect .',
    writer: '-Mark Twain',
  },
];

let printRandomQuote = function() {
  // creating a random index, to use it to select a random quote from the array
  let randomIndex = Math.floor(Math.random() * listOfQuote.length);

  // assiging the result of the random quote to variabels to use them when appending the result to the html
  let quoteOutput = listOfQuote[randomIndex].quote;
  let writer = listOfQuote[randomIndex].writer;

  writerOutput.innerText = writer;
  outPutField.innerText = quoteOutput;
};

// adding our function to the button using addeventlistener method

button.addEventListener('click', printRandomQuote);
