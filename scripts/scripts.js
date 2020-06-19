"use strict";

let firstNumber,
    secondNumber;

firstNumber = prompt('Введите число');

while ( !isNumber(firstNumber) ) {
  alert('Ошибка, нужно ввести число!');
  firstNumber = prompt('Введите число');
}

secondNumber = prompt('Введите второе число');

while ( !isNumber(secondNumber) ) {
  alert('Ошибка, нужно ввести число!');
  secondNumber = prompt('Введите число');
}

firstNumber = Number(firstNumber);   //можно было бы сравнисать строки,
secondNumber = Number(secondNumber); //но с числани наверно правельние

if (firstNumber > secondNumber) {
  alert('Первое чило болье второго');
} else if (firstNumber < secondNumber) {
  alert('Первое число меньше второго');
} else if (firstNumber == secondNumber) {
  alert('Числа равны');
}

function isNumber(n) {
  if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
    return true;
  }
  return false;
}

function err() {
  
}
