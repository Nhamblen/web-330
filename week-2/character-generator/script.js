/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Noah Hamblen
  Date: 3/23/25
  Filename: script.js
*/

'use strict';

function createCharacter(name, gender, characterClass) {
  return {
    getName: () => name,
    getGender: () => gender,
    getClass: () => characterClass,
  };
}

document.getElementById('generateHero').addEventListener('click', function (e) {
  e.preventDefault();

  // Form values
  const name = document.getElementById('heroName').value;
  const gender = document.getElementById('heroGender').value;
  const characterClass = document.getElementById('heroClass').value;

  // Create character
  const character = createCharacter(name, gender, characterClass);

  // Display character information
  const output = document.getElementById('characterOutput');
  output.innerHTML = `
    <p><strong>Name:</strong> ${character.getName()}</p>
    <p><strong>Gender:</strong> ${character.getGender()}</p>
    <p><strong>Class:</strong> ${character.getClass()}</p>
  `;
});
