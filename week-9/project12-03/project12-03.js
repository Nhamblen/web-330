'use strict';
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Noah Hamblen
      Date: 5/10/25

      Filename: project12-03.js
*/

// Wait until the document is fully loaded
$(document).ready(function () {
  // Attach a click event handler to every <h2> element that is a direct child of an <article>
  $('article > h2').click(function () {
    let heading = $(this); // Store the clicked heading element
    let list = heading.next(); // Get the next sibling element after the heading
    let headingImage = heading.children('img'); // Find the <img> element that is a child of the heading

    list.slideToggle(500); // Toggle the visibility of the list with a sliding animation of 500ms

    let src = headingImage.attr('src'); // Get the current image source

    // If the image source is 'plus.png', change it to 'minus.png', and vice versa
    if (src === 'plus.png') {
      headingImage.attr('src', 'minus.png');
    } else {
      headingImage.attr('src', 'plus.png');
    }
  });
});
