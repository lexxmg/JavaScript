'use strict';

{
  const randomNumber = getRandomInt(1, 1000);
  const counter = makeCounter(10);


  window.start = function(userNumber) {
    return compatisonNumber(randomNumber, userNumber);
  }

  function compatisonNumber(r, n) {
    n = checkNumber(n);
    const i = counter();

    if (i < 1) {
      alert('Колличество попыток, закончилось! ' +
            'Загадангое число ' + r() );
      return;
    }

    if (n === null) {
      return;
    } else if (r() < n) {
      return compatisonNumber(r, checkNumber( prompt('Меньше! ' + i, '') ) );
    } else if (r() > n) {
      return compatisonNumber(r, checkNumber( prompt('Больше! ' + i , '') ) );
    }
    return alert('Правильно!');
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const r = Math.floor(Math.random() * (max - min + 1)) + min;

    return () => r;
  }

  function makeCounter(count) {
    return () => count--;
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
}
