"use strict";

let firstNumber,
    secondNumber;

firstNumber = prompt('Введите число');

while ( !isNumber(firstNumber) ) {
  err();
  firstNumber = prompt('Введите число');
}

secondNumber = prompt('Введите второе число');

while ( !isNumber(secondNumber) ) {
  err();
  secondNumber = prompt('Введите число');
}

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (firstNumber > secondNumber) {
  alert('Первое чило болье второго');
} else if (firstNumber < secondNumber) {
  alert('Первое число меньше второго');
} else if (firstNumber === secondNumber) {
  alert('Числа равны');
}

function isNumber(n) {
  if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
    return true;
  }
  return false;
}

function err() {
  alert('Ошибка, нужно ввести число!');
}
