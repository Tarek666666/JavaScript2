// Your code goes in here

// variables

const billValue = document.querySelector('.bill-amount');
const serviceQuality = document.querySelector('.service-quality');
const amountPeople = document.querySelector('.people-amount');
const calculateBtn = document.getElementById('submit');
const tipOut = document.querySelector('.tip-output');
const amountPeopleOutput = document.querySelector('.amount-people-output');

function calculateTip() {
  // declaring the variable nubmers to use it when checking if the first and last input are numbers
  let numbers = /^[0-9]+$/;
  // calcuations based on data from user, we get the amount of tip in the variable result to put in the output
  let result = (billValue.value * serviceQuality.value) / 100 / amountPeople.value;
  // first condition all inputs must be filled otherwise program will alert(You need to fill in all the fields!)
  if (billValue.value === '' || amountPeople.value === '' || serviceQuality.value === '') {
    alert('You need to fill in all the fields!');
    // if all inputs filed are filled then we go the second condition, checking if the value of the first and last input is only numbers
  } else if (billValue.value.match(numbers) && amountPeople.value.match(numbers)) {
    tipOut.innerText = `$ ${result.toFixed(2)}`;

    // last condition is to check if amountPeople who are sharing the bill is only 1 then we remove the word each from the output other wise it will stay
    amountPeopleOutput.innerHTML = amountPeople.value > 1 ? 'each' : '';
  
  } else {
    alert('First and last input accept only numbers !!!');
  }
}

calculateBtn.addEventListener('click', calculateTip);
