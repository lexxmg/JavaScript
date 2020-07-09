'use strict';

{
  window.start = function() {
    let userNumber = prompt('Попробуй угадать число', '');
    const randomNumber = getRandomInt(1, 1000);
    const counter = makeCounter(10);
    console.log(userNumber);
    console.log( randomNumber() );

    return (
      function compatisonNumber() {
        const userNum = checkNumber(userNumber);
        const i = counter();
        console.log(userNum);
        console.log(i);

        if (i < 1) {
          alert('Колличество попыток, закончилось! ' +
              'Загадангое число ' + randomNumber() );
      //return;

          alert('Всё заново');
          start();
        }

        if (userNum === null) {
          return;
        } else if (randomNumber() < userNum) {
          userNumber = checkNumber( prompt('Меньше! ' + i, '') );
          return compatisonNumber();
        } else if (randomNumber() > userNum) {
          userNumber = checkNumber( prompt('Больше! ' + i, '') );
          return compatisonNumber();
        }
        return alert('Правильно!');
      }
    )();
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const r = Math.floor( Math.random() * (max - min + 1) ) + min;

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
