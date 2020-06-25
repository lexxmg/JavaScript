"use strict";

let userNumber,
    randomNumber = 76;

userNumber = prompt('Попробуй угадать число', '');

while ( !isNumber(userNumber) ) {
  userNumber = prompt('Введите число','');
}



// while (true) {
//   if (userNumber > randomNumber) {
//     userNumber = prompt('Меньше!', '');
//   } else if (userNumber < randomNumber) {
//     userNumber = prompt('Больше!', '');
//   } else if (userNumber === null) {
//     break;
//   }
//
//   alert('Правильно!');
//   break;
// }

function compatisonNumber(r, n) {
  if (r < n) {
    return 'Меньше!';
  } else if (r > n) {
    return 'Больше!';
  }
  return 'Правильно!'
}

function isNumber(n) {
  return !isNaN( parseFloat(n) ) && isFinite(n);
}
