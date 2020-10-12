/**
 
 ** Exercise 3: Lemon allergy **
 
  Your mom bought you a basket of fruit, because you 're doing so well in HackYourFuture. How sweet of her!
  However, she forgot that you are allergic to lemons!Let 's quickly dispose of them before you get an attack.

  Write a function that uses the filter array function to take out the lemons.
  Avoid using for loop or forEach.
  Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

 */


function takeOutLemons(basket) {
  // your code goes in here. The output is a string 
  // creating a new array includes all elements except Lemon . used toLowerCase method to exclude lemon with small letter also .
  const filterdBasket  = basket.filter(fruit => fruit.toLowerCase() !== 'lemon')
  // declaring the outputString variable and using join method to have spaces between the filterbasket array's elemnts.
  let outputString = `My mom bought me a fruit basket, containing : ${filterdBasket.join(' ')}`

  return outputString ;

}

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket));