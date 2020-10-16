/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

// variables
const upButton = document.querySelector('.increase-length');
const downButton = document.querySelector('.decrease-length');
const timeSelected = document.querySelector('.length-output');
const timerOutput = document.querySelector('.timer-output ');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
let counting = false;
// defualt timer's values
let startingMinutes = parseInt(timeSelected.innerText);
let time = startingMinutes * 60;
// default pause button color is red , cause the timer is not on yet
pause.style.backgroundColor = 'red';

//-------------------------------------------------------------

// functions
// keeps the selected time always updated
function updateTimeSelected() {
  startingMinutes = parseInt(timeSelected.innerText);
  time = startingMinutes * 60;
  let minutes = Math.floor(time / 60);
  let sec = time % 60;
  timerOutput.innerHTML = ` ${minutes.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)} `;
}
// this function will disable the buttons and give them red background color to let the user knows he can't use them while the counting is on
function disableButtons() {
  upButton.removeEventListener('click', addingMinute);
  upButton.style.backgroundColor = 'red';
  downButton.style.backgroundColor = 'red';
  downButton.removeEventListener('click', substractMinute);
  play.style.backgroundColor = 'red';
  pause.style.backgroundColor = 'transparent';
}
// this function will enable the buttons and return thier default background color to let user knows he can use them again
function enableButtons() {
  upButton.addEventListener('click', addingMinute);
  upButton.style.backgroundColor = 'transparent';
  downButton.style.backgroundColor = 'transparent';
  downButton.addEventListener('click', substractMinute);
  play.style.backgroundColor = 'transparent';
  pause.style.backgroundColor = 'red';
}

function addingMinute() {
  // this function adds one minute to the timer selector and updates the timer value
  timeSelected.innerText = parseInt(timeSelected.innerText) + 1;

  // after changing the selected time, we call updatetime function to update the timer.
  updateTimeSelected();
  // max minutes allowed is 50 if the users tried to select 50 or more it will reset to 25
  if (timeSelected.innerText >= 50) {
    timeSelected.innerText = 25;
    timerOutput.innerText = ` ${timeSelected.innerText}:00 `;
  }
}

function substractMinute() {
  // this function substract one minute from the time selector.
  timeSelected.innerText = parseInt(timeSelected.innerText) - 1;

  // after changing the selected time, we call updatetime function to update it
  updateTimeSelected();
  // minmum minutes allowed is 50 if the users tried to select 50 or more it will reset to 25
  if (timeSelected.innerText <= 0) {
    timeSelected.innerText = 25;
    timerOutput.innerText = ` ${timeSelected.innerText}:00 `;
  }
}

function playingAndUpdating() {
  //checking if counting already is on or not, if not then do this ===> :
  if (!counting) {
    // counting now is on ===> true
    counting = true;
    // making the buttons disable while the counting is on
    disableButtons();

    // setting the interval which will be the counter, it will decrement every 1 second
    let starting = setInterval(() => {
      time--;
      let minutes = Math.floor(time / 60);
      let sec = time % 60;
      timeSelected.innerText = ` ${minutes} `;
      timerOutput.innerHTML = ` ${minutes}:${sec} `;
      // checking when the seconds or the minutes is only one number then we add 0 before the number
      if (minutes.toString().length === 1) {
        timerOutput.innerHTML = ` ${minutes.toString().padStart(2, 0)}:${sec} `;
      }
      if (sec.toString().length === 1) {
        timerOutput.innerHTML = ` ${minutes}:${sec.toString().padStart(2, 0)} `;
      }
      // adding an event to the pause button to stop the interval when it's clicked
      pause.addEventListener('click', function() {
        counting = false;
        clearInterval(starting);
        // making the buttons to increase and decrease time and play enabled again
        enableButtons();
      });
      // adding reset function
      stop.addEventListener('click', function() {
        counting = false;
        clearInterval(starting);
        // making the buttons to increase and decrease time and play enabled again
        enableButtons();

        timeSelected.innerText = `${startingMinutes}`;
        timerOutput.innerHTML = `${startingMinutes}:00`;
        updateTimeSelected();
      });

      // when timer ends and reachs 0 then it will print Time's Up message for 2 seconds then it will reset the timer to 25 !!
      if (minutes === 0 && sec === 0) {
        timerOutput.innerHTML = "Times's Up!";
        clearInterval(starting);
        // reseting the timer value to 25 after 2 seconds
        setTimeout(function() {
          counting = false;
          timeSelected.innerText = 25;
          updateTimeSelected();
          // making the buttons to increase and decrease time and play enabled again
          enableButtons();
        }, 2000);
      }
    }, 1000);
  }
}

upButton.addEventListener('click', addingMinute);
downButton.addEventListener('click', substractMinute);
play.addEventListener('click', playingAndUpdating);
