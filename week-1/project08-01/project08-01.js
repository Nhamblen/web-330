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
function timer(min, sec) {
  this.min = min;
  this.sec = sec;
  this.timeID = null;

  timer.prototype.runPause = function (timer, minBox, secBox) {
    if (this.timeID) {
      // if the timer is running, stop it
      window.clearInterval(this.timeID);
      this.timeID = null;
    } else {
      // if the timer is not running, start it
      this.timeID = window.setInterval(() => {
        countdown(minBox, secBox);
      }, 1000);
    }

    function countdown(timer, minBox, secBox) {
      if (timer.seconds > 0) {
        timer.seconds--; // decreases seconds
      } else if (timer.minutes > 0) {
        timer.minutes--; // decreases minutes
        timer.seconds = 59;
      } else {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
      }

      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
    }
  };
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');

let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

minBox.onchange = function () {
  myTimer.minutes = parseInt(minBox.value);
};

secBox.onchange = function () {
  myTimer.minutes = parseInt(secBox.value);
};

runPauseTimer.onclick = function () {
  myTimer.runPause(minBox, secBox);
};
