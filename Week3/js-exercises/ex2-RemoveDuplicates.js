/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

function removeDuplicates(array) {
  // making a copy of the given array
  let copy = [...array];
  // deleting all elemnts in the given array
  array.splice(0, array.length);
  // looping through the copied array to check if the elemnt is not already existed in the array then we push, this way we get rid of the duplications
  for (let i = 0; i < copy.length; i++) {
    if (!array.includes(copy[i])) {
      array.push(copy[i]);
    }
  }
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
removeDuplicates(letters);
// this condition is never gonna be true, cause here we are comparing the reference in the memory of tow arrays, it wont be true
if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) console.log('Hooray!');

// printing the variable letters into the console to make sure that my function worked propely 
console.log(letters);

// another solution : this way we dont change the original array, instead we are returning a new array without the duplicates
function removeDupicates2(array){

let removedArray = new Set(array) ;

return removedArray;

};

console.log(removeDupicates2(letters));


