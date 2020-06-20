"use strict";

let firstNumber,
    secondNumber;

firstNumber = checkNumber( prompt('Введите число', '') );
secondNumber = checkNumber( prompt('Введите число', '') );

if (firstNumber > secondNumber) {
  alert('Первое чило болье второго');
} else if (firstNumber < secondNumber) {
  alert('Первое число меньше второго');
} else if (firstNumber === secondNumber) {
  alert('Числа равны');
}

function checkNumber(n) {
  if ( isNumber(n) ) {
    return +n;
  }
  alert('Ошибка, нужно ввести число!');
  return checkNumber( prompt('Введите число', '') );
}

function isNumber(n) {
  if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
    return true;
  }
  return false;
}
