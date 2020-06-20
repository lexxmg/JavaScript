"use strict";

let userSartYear,
    userFinishYear;

userSartYear = integerNumber( prompt('введите год', '') );
userFinishYear = integerNumber( prompt('введите год', '') );

while (userSartYear > userFinishYear) {
  userFinishYear = +prompt(`Конечный год дожен быть больше,
    сейчас ${userSartYear} > ${userFinishYear}, введите конечный год`, '');
}

alert(`${userSartYear} - ${userFinishYear}`);

for (let i = userSartYear; i <= userFinishYear; i++) {
  if ( isLeapYear(i) ) console.log(i);
}

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0);
}

function integerNumber(n) {
  if ( Number(n) ) {
    return n;
  }

  alert('Ошибка');
  return integerNumber( prompt('введите год', '') );
}
