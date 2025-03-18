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
  };
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');
