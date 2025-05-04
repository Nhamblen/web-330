/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Noah Hamblen
  Date: 5/3/25
  Filename: script.js
*/

'use strict';

// Array of movie objects
const movies = [
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    synopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },

  {
    title: 'The Joker',
    director: 'Todd Phillips',
    year: 2019,
    synopsis:
      'A troubled comedian named Arthur Fleck descends into madness and transforms into the criminal known as the Joker, sparking chaos and unrest across the city.',
  },

  {
    title: 'IT',
    director: 'Andrés Muschietti',
    year: 2017,
    synopsis:
      'A group of kids in Derry confront a terrifying shape-shifting clown that feeds on their fears.',
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject('Movie not found.');
      }
    }, 1000); // 1-second delay
  });
}

document
  .getElementById('movie-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const input = document.getElementById('title-input').value.trim();
    const title = document.getElementById('movie-title');
    const director = document.getElementById('movie-director');
    const year = document.getElementById('movie-year');
    const synopsis = document.getElementById('movie-synopsis');
    const error = document.getElementById('error-message');

    // Clear previous content
    title.textContent = '';
    director.textContent = '';
    year.textContent = '';
    synopsis.textContent = '';
    error.textContent = '';

    try {
      const movie = await fetchMovie(input);
      title.textContent = movie.title;
      director.textContent = movie.director;
      year.textContent = movie.year;
      synopsis.textContent = movie.synopsis;
    } catch (err) {
      error.textContent = err;
    }
  });
