/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

-----------------------------

1- variable a is decalred in the global scope
2- variable x is declared also in the global scope, and assigend its value to a function, inside this function the same variable (a) is given 
      a new value which is 12;
3-then  this function will return a closure that has acces to the variables in the parent function, then the nested function will look first at 
    its local scope searching for variable (a)
when it cant find it in the local scope, it will go to the upper scope /since it has access to it/,
     here it finds the variable (a) with value 12 so it will alert this variable.
if the variable (a) is also  not exsisted in the upper function scope then it will look at the global scope and will find it but this time 
    with value of 10 so it will print it.

*/

let a = 10;

const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

