"use strict";

$(function() {
  const field = $('.field'),
        ball = $('.ball'),
        goalLeft = $('.goal-left'),
        goalRight = $('.goal-right'),
        popup = $('.popup-container ');
        
  ball.on('click', event => {
    if (ball.position().left === 0) {
      ball.animate({
        top: getRandomIntInclusive(0, field.outerHeight() - ball.outerHeight()),
        left: field.outerWidth()- ball.outerWidth()
      }, 1000, () => {
        if (ball.position().top >= goalLeft.position().top && ball.position().top - ball.outerHeight() <= goalLeft.position().top) {
          popup.removeClass('popup-container--hidden');
          setTimeout( () => {
            popup.addClass('popup-container--hidden');
          }, 2000);
        }
      });
    } else {
      ball.animate({
        top: getRandomIntInclusive(0, field.outerHeight() - ball.outerHeight()),
        left: 0
      }, 1000, () => {
        if (ball.position().top >= goalLeft.position().top && ball.position().top - ball.outerHeight() <= goalLeft.position().top) {
          popup.removeClass('popup-container--hidden');
          setTimeout( () => {
            popup.addClass('popup-container--hidden');
          }, 2000);
        }
      });
    }

  });
});


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
