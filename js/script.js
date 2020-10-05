"use strict";

$(function() {
  const field = $('.field'),
        ball = $('.ball'),
        goalLeft = $('.goalLeft'),
        goalRight = $('.goalRight');

  ball.on('click', event => {
    if (ball.position().left === 0) {
      ball.animate({
        top: getRandomIntInclusive(0, field.outerHeight() - ball.outerHeight()),
        left: field.outerWidth()- ball.outerWidth()
      }, 1000, () => {
        console.log(ball.position().top);
      });
    } else {
      ball.animate({
        top: getRandomIntInclusive(0, field.outerHeight() - ball.outerHeight()),
        left: 0
      }, 1000, () => {
        console.log(ball.position().top);
      });
    }

  });
});


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
