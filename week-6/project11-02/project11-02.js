'use strict';
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Noah Hamblen
      Date: 4/19/25

      Filename: project11-02.js
*/

// Variables for the input fields
let postalCode = document.getElementById('postalCode');
let place = document.getElementById('place');
let region = document.getElementById('region');
let country = document.getElementById('country');

// Event listener for when the user moves focus away (on blur)
postalCode.onblur = function () {
  // Get the postal code and country values entered by the user
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Clear any existing city and state values in the fields
  place.value = '';
  region.value = '';

  // Fetch city and state data using the Zippopotam API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => {
      // Check if the response is successful, otherwise throw an error
      if (!response.ok) {
        throw new Error('Invalid postal code');
      }
      // Parse the response data as JSON
      return response.json();
    })
    .then((json) => {
      // Fill the place and state abbreviation fields with data from the API response
      place.value = json.places[0]['place name'];
      region.value = json.places[0]['state abbreviation'];
    })
    .catch((error) => {
      // Log any errors to the console
      console.error('Error:', error.message);
    });
};
