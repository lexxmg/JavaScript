"use strict";

let userSartYear,
    userFinishYear;

userSartYear = integerNumber( prompt('введите год', '') );
userFinishYear = integerNumber( prompt('введите год', '') );

if (userSartYear < userFinishYear) {
  allLeapYear(userSartYear, userFinishYear);
} else {
  allLeapYear(userFinishYear, userSartYear);
}


function allLeapYear(a, b) {
  for (let i = a; i <= b; i++) {
    if ( isLeapYear(i) ) console.log(i);
  }
}

function isLeapYear(y) {
  return ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);
}

function integerNumber(n) {
  if ( Number(n) ) return +n;

  alert('Ошибка');
  return integerNumber( prompt('введите год', '') );
}
