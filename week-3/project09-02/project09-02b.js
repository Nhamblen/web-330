'use strict';
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Noah Hamblen
      Date: 3/30/25

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById('riderName');
let ageGroup = document.getElementById('ageGroup');
let bikeOption = document.getElementById('bikeOption');
let routeOption = document.getElementById('routeOption');
let accOption = document.getElementById('accOption');
let region = document.getElementById('region');
let miles = document.getElementById('miles');
let comments = document.getElementById('comments');

// Retrieve the stored data from sessionStorage and assign it to the form fields
riderName.textContent = sessionStorage.getItem('riderName');
ageGroup.textContent = sessionStorage.getItem('ageGroup');
bikeOption.textContent = sessionStorage.getItem('bikeOption');
routeOption.textContent = sessionStorage.getItem('routeOption');
accOption.textContent = sessionStorage.getItem('accOption');
region.textContent = sessionStorage.getItem('region');
miles.textContent = sessionStorage.getItem('miles');
comments.textContent = sessionStorage.getItem('comments');
