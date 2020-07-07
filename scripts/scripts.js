"use strict";


{
  window.userNumber = prompt('Попробуй угадать число', '');
}

{
  const randomNumber = getRandomInt(100);
  const counter = makeCounter(10);
  const userNumber = checkNumber(window.userNumber);

  compatisonNumber(randomNumber, userNumber);


  function makeCounter(count) {
    return () => count--;
  }

  function compatisonNumber(r, n) {
    const i = counter();

    if (i < 1) {
      alert('Колличество попыток, закончилось');
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

  function getRandomInt(n) {
    const r = Math.floor( Math.random() * n );

    return () => r;
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
