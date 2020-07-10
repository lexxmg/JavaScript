'use strict';

{
  window.makeGame = function() {
    const randomNumber = getRandomInt(1, 1000);
    const counter = makeCounter(10);
    let userNumber = checkNumber( prompt('Введите число', '') );

    return (function game() {
      const i = counter();

      if (i === 0) {
        if ( confirm('Попытки закончались, загаданное число ' + randomNumber() + ' Продолжить?') ) {
          return makeGame();
        } else {
          return;
        }
      } else if (userNumber === null) {
        return;
      } else if (randomNumber() < userNumber) {
        userNumber = checkNumber( prompt('Меньше! ' + i, '') );
        return game();
      } else if (randomNumber() > userNumber) {
        userNumber = checkNumber( prompt('Больше! ' + i, '') );
        return game();
      } else if (randomNumber() === userNumber) {
        return alert('Правильно!');
      }
    })();
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
