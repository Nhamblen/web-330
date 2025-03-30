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
riderName.value = sessionStorage.getItem('riderName');
ageGroup.value = sessionStorage.getItem('ageGroup');
bikeOption.value = sessionStorage.getItem('bikeOption');
routeOption.value = sessionStorage.getItem('routeOption');
accOption.value = sessionStorage.getItem('accOption');
region.value = sessionStorage.getItem('region');
miles.value = sessionStorage.getItem('miles');
comments.value = sessionStorage.getItem('comments');
