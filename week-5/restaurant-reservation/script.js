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

    // Simulate a delay with setTimeout
    setTimeout(() => {
      callback(`Table ${tableNumber} successfully reserved!`);
    }, time); // time in milliseconds
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById('reservationForm')
  .addEventListener('submit', function (e) {
    // Add your code here
  });
