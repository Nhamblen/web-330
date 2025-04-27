/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Noah Hamblen
  Date: 4/26/25
  Filename: script.js
*/

'use strict';

// An array of chef objects
let chefs = [
  // Each chef object has a name, specialty, weakness, and restaurantLocation
  {
    name: 'Gordon Ramsay',
    specialty: 'British cuisine',
    weakness: 'Patience',
    restaurantLocation: 'London, UK',
  },
  {
    name: 'Noah Hamblen',
    specialty: 'American cuisine',
    weakness: 'Cooking',
    restaurantLocation: 'Omaha, NE',
  },
  {
    name: 'Guy Fieri',
    specialty: 'Diners',
    weakness: 'Lack of training',
    restaurantLocation: 'Council Bluffs, IA',
  },
];

// Function to retrieve the first chef's information
function retrieveChef1() {
  // Returns a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random 80% chance of success (resolve) and 20% chance of failure (reject)
      Math.random() < 0.8
        ? resolve(chefs[0]) // If resolved, return Chef data
        : reject("Failed to retrieve Chef 1's data."); // If rejected, return an error message
    }, 2000); // 2 second delay
  });
}

// Function to retrieve the second chef's information
function retrieveChef2() {
  // Returns a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random 80% chance of success (resolve) and 20% chance of failure (reject)
      Math.random() < 0.8
        ? resolve(chefs[1]) // If resolved, return Chef data
        : reject("Failed to retrieve Chef 2's data."); // If rejected, return an error message
    }, 3000); // 3 second delay
  });
}

// Function to retrieve the third chef's information
function retrieveChef3() {
  // Returns a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random 80% chance of success (resolve) and 20% chance of failure (reject)
      Math.random() < 0.8
        ? resolve(chefs[2]) // If resolved, return Chef data
        : reject("Failed to retrieve Chef 3's data."); // If rejected, return an error message
    }, 4000); // 4 second delay
  });
}

// Retrieve all chefs' information and update the webpage
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    // Loop through all results (fulfilled or rejected promises)
    results.forEach((result, index) => {
      const sectionId = `chef${index + 1}`; // Create the section ID based on the index (chef1, chef2, chef3)
      const section = document.getElementById(sectionId); // Get the corresponding section in the HTML

      // Check the status of the promise result
      if (result.status === 'fulfilled') {
        // If the promise was fulfilled (successful)
        const chef = result.value; // Get the chef data from the promise's value
        section.innerHTML = `
          <h2>${chef.name}</h2>
          <p><strong>Specialty:</strong> ${chef.specialty}</p>
          <p><strong>Weakness:</strong> ${chef.weakness}</p>
          <p><strong>Location:</strong> ${chef.restaurantLocation}</p>
        `;
      } else {
        // If the promise was rejected (failed)
        section.innerHTML = `<p id="error">${result.reason}</p>`; // Display the error message under the section
      }
    });
  }
);
