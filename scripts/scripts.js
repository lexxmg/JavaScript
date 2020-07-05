"use strict";

let userNumber,
    randomNumber;

randomNumber = getRandomInt(100);

const counter = makeCounter(3);

userNumber = checkNumber( prompt('Попробуй угадать число', '') );

compatisonNumber(randomNumber, userNumber);


function makeCounter(count) {
  return () => count--;
}

function compatisonNumber(r, n) {
  const i = counter();

  if (i < 1) {
    alert('Колличество попыток, закончилось');
    window.counter = null;
    return;
  }

  if (n === null) {
    return;
  } else if (r < n) {
    return compatisonNumber(r, checkNumber( prompt('Меньше! ' + i, '') ) );
  } else if (r > n) {
    return compatisonNumber(r, checkNumber( prompt('Больше! ' + i , '') ) );
  }
  return alert('Правильно!');
}

function getRandomInt(n) {
  return Math.floor( Math.random() * n );
}

function checkNumber(n) {
  if (n === null) return null;
  if ( isNumber(n) ) {
    return +n;
  } else {
    return checkNumber( prompt('Введите число', '') );
  }
}

function isNumber(n) {
  return !isNaN( parseFloat(n) ) && isFinite(n);
}
