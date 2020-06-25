"use strict";

let userNumber,
    randomNumber = 76;

userNumber = checkNumber( prompt('Попробуй угадать число', '') );

compatisonNumber(randomNumber, userNumber);


function compatisonNumber(r, n) {
  if (n === null) {
    return;
  } else if (r < n) {
    return compatisonNumber(r, prompt('Меньше!', '') );
  } else if (r > n) {
    return compatisonNumber(r, prompt('Больше!', '') );
  }
  return alert('Правильно!');
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
