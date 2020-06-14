"use strict";

const START_YEAR = 1900,
      FINICH_YEAR = 2020;

let userSartYear,
    userFinishYear;

userSartYear = +prompt('введите год', '');

while (!userSartYear) {
  alert('Нужно ввсести число');
  userSartYear = +prompt('введите год', '');
}

userFinishYear = +prompt('Введите конечный год', '');

while (!userFinishYear) {
  alert('Нужно ввсести число');
  userFinishYear = +prompt('Введите конечный год', '');
}

while (userSartYear > userFinishYear) {
  userFinishYear = +prompt(`Конечный год ложен быть больше,
    сейчас ${userSartYear} > ${userFinishYear}, введите конечный год`, '');
}

alert(`${userSartYear} - ${userFinishYear}`);

for (let i = userSartYear; i <= userFinishYear; i++) {
  if (i % 4 === 0) {
    if (i % 100 !== 0) {
      console.log(i);
    } else if (i % 400 === 0) {
      console.log(i);
    }
  }
}
