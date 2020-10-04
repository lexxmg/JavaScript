"use strict";

$(function() {
  const field = $('.field'),
        ball = $('.ball');

  const pos = ballPosition(0, 0, field, ball);
  ball.css({
    'display': 'block',
    'top': pos.y,
    'left': pos.x
  });

  ball.on('click', event => {
    const ballPosInnerX = (event.pageX - ball.offset().left) - ball.outerWidth() / 2;
    const ballPosInnerY = (event.pageY - ball.offset().top) - ball.outerHeight() / 2;
    const cootrds = ballPosition(-50 * ballPosInnerX, -50 * ballPosInnerY, field, ball);

    ball.animate({top: cootrds.y, left: cootrds.x}, 1000);
  });


  function ballPosition(x, y, field, ball) {
    const fieldCentrY = field.offset().top + field.outerHeight() / 2;
    const fieldCentrX = field.offset().left + field.outerWidth() / 2;

    if ( x > fieldCentrX ) {
      x = (fieldCentrX - ball.outerWidth() / 2) - field.offset().left;
    }

    if ( x < -fieldCentrX ) {
      x = -(fieldCentrX - ball.outerWidth() / 2) + field.offset().left;
    }

    if ( y > fieldCentrY ) {
      y = (fieldCentrY - ball.outerHeight() / 2) - field.offset().top;
    }

    if ( y < -fieldCentrY ) {
      y = -(fieldCentrY - ball.outerHeight() / 2) + field.offset().top;
    }

    // ball.css({
    //   'display': 'blick',
    //   'top': (fieldCentrY - ball.outerHeight() / 2) + y,
    //   'left': (fieldCentrX - ball.outerWidth() / 2) + x
    // });

    return {
            y: (fieldCentrY - ball.outerHeight() / 2) + y,
            x: (fieldCentrX - ball.outerWidth() / 2) + x
           }
  }
});
