/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4 ];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console


// we can use the filter method to get an array of all elements which fulfill the condition, then we use map method to modify those elements by multiply them by 2 !!


const newNumbers2 = myNumbers.filter(num => num % 2 === 0).map(num => num * 2);

console.log(newNumbers2)