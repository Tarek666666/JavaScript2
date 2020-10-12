/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

('use strict');
// variables
const hoursHand = document.querySelector('.hours-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
const timer = document.createElement('h1');
const container = document.querySelector('.clock-container');

 // styling the output
 timer.style.marginTop = '500px';
 timer.style.color = 'red';
 timer.style.padding = '5px';
 timer.style.background = 'yellow';

// declaring updateTime function, to get the time in hours , minutes and secondes , and adding the animation to the clock's hand
function updateTime() {
  // getting the information
 
  const timeNow = new Date();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();
  const hours = timeNow.getHours();

  // getting the right degrees for each hand
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hours / 12) * 360 + 105;
  // animation
  secHand.style.transform = ` rotateZ(${secondsDegree}deg) `;
  minHand.style.transform = ` rotateZ(${minutesDegree}deg) `;
  hoursHand.style.transform = ` rotateZ(${hoursDegree}deg) `;
  // changing the inner HTML of timer element to print the reslut
  timer.innerText = ` ${hours} : ${minutes} : ${seconds}   `;
  // checking if the seconds and minutes contain only 1 number so we add 0 to prevent getting something like 20:15:5
  if (seconds.toString().length === 1) {
    timer.innerText = ` ${hours} : ${minutes} : ${seconds.toString().padStart(2,0)}   `
  }  if (minutes.toString().length === 1) {
    timer.innerText = ` ${hours} : ${minutes.toString().padStart(2,0)} : ${seconds}   `;
  } if (hours.toString().length === 1) {
    timer.innerText = ` ${hours.toString().padStart(2,0)} : ${minutes} : ${seconds}   `;
  } 
 

  container.appendChild(timer);
  // using setÍnterval function to update our function every 1 sec
  
}

// excuting the function updTime only when DomContent is Loaded

function settingInterval(){
  setInterval(updateTime, 1000)

}

window.addEventListener('DOMContentLoaded', settingInterval );
