'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Noah Hamblen
      Date: 3/17/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Timer constructor function to create a timer object
function Timer(min, sec) {
  this.min = min; // Stores minutes
  this.sec = sec; // Stores seconds
  this.timeID = null; // Stores the interval ID for the countdown
}

// Method to start or pause the timer
Timer.prototype.runPause = function (minBox, secBox) {
  if (this.timeID) {
    // If the timer is running, stop it
    window.clearInterval(this.timeID);
    this.timeID = null;
  } else {
    // If the timer is not running, start it
    this.timeID = window.setInterval(() => {
      this.countdown(minBox, secBox); // Calls countdown function every second
    }, 1000);
  }
};

// Due to confusing book instructions, I was unsure whether to keep countdown as a separate function, or include it inside of the runPause method. I opted to keep it separate as a method.

// Method to decrease time and update the display
Timer.prototype.countdown = function (minBox, secBox) {
  if (this.sec > 0) {
    this.sec--; // Decreases seconds
  } else if (this.min > 0) {
    this.min--; // Decreases minutes
    this.sec = 59; // Reset seconds to 59
  } else {
    // If the timer reaches zero, stop the countdown
    window.clearInterval(this.timeID);
    this.timeID = null;
  }

  // Update the input fields with the new values
  minBox.value = this.min;
  secBox.value = this.sec;
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');

let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

// Event listener to update minutes when user changes the input field
minBox.addEventListener('change', function () {
  myTimer.min = parseInt(minBox.value);
});

// Event listener to update seconds when user changes the input field
secBox.addEventListener('change', function () {
  myTimer.sec = parseInt(secBox.value);
});

// Event listener to start or pause the timer when the button is clicked
runPauseTimer.addEventListener('click', function () {
  myTimer.runPause(minBox, secBox);
});
