/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

/*      this function takes one parameter, then adds one to this parameter and return it, so when we call f1(x) or f1(9) this way we passed
the x as a parameter, it will take this argument and adds
   one to it and return it, in our case we cant see the result because we just called f1(x), but if we tried to log the function to the console like
   console.log(f1(x)) ====> output // wil be 10 . but it will not change the original variable x , so when we log x into the console we get 9       */

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

/* in this example f2() takes an object as a parameter, and it's chaning the value of it's key, however the variable is declared with const, its keys
can still be changed or even added, everytime we excute this function f2(y) it will add one to it's x key, and any changes made in this function will effect
the original object, for example we can add another key if we add val.z = 5, this way the original object will have z key with value of 5  */

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);


console.log(y);
