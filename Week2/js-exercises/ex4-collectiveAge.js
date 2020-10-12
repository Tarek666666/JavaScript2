/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 
 */

function collectiveAge(people) {
  // return the sum of age for all the people
  // creating array includes all ages
  const ages = people.map(x => x.age);
  // using reduce  to get the total of all ages in the array 
  let   totalAges = ages.reduce((x,y) => x + y , 0)

  return totalAges;
}

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));