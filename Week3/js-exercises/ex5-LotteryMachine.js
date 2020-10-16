/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  // iterating over the array we just created
  numbers.map(number => {
    // if the number in array is divisible by 3 then call function threeCallback()
    if (number % 3 === 0) {
      threeCallback(number);
    }
    // if the number in array is divisible by 5 then call function fiveCallback()
    if (number % 5 === 0) {
      fiveCallback(number);
    }
    //if the number in array is divisible by 5 && divisible by 3  then call both functions threeCallback() && fiveCallback()
    if (number % 5 === 0 && number % 3 === 0) {
      fiveCallback(number);
      threeCallback(number);
    }
  });
}

function sayThree(number) {
  console.log(`${number} is divisible by 3 so sayThree() is called`);
}
function sayFive(number) {
  console.log(`${number} is divisible by 5 so sayFive() is called`);
}

threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive

// in my code if we made the array between 10 and 15, it will call sayFive , sayThree , sayThree , sayFive ===> then because of 15 is divisible by both 3 & 5
// it will call both functions one more time so it will be
// sayFive , sayThree ,sayThree , sayFive , sayFive , sayThree
