/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Noah Hamblen
  Date: 4/12/25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Find the table based on table number
  const table = tables.find((t) => t.tableNumber === tableNumber);

  // Check if the table is available
  if (table.isReserved) {
    callback(`Sorry, Table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true; // Mark the table as reserved

    // Delay with setTimeout
    setTimeout(() => {
      callback(`Table ${tableNumber} successfully reserved!`);
    }, time); // time in milliseconds
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById('reservationForm')
  .addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's name and selected table number
    const name = document.getElementById('name').value;
    const tableNumber = parseInt(document.getElementById('tableNumber').value);

    // Call the reserveTable function with a callback that updates the webpage
    reserveTable(
      tableNumber,
      function (message) {
        document.getElementById('message').textContent = message;
      },
      2000
    ); // Wait 2 seconds before showing the success message
  });
