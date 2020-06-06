"use strict";

let myName = prompt('Как тебя зовут?');
let surname = prompt('Укажите фамилию');
let myBirthYear = prompt('Введите ваш год рождения');

let currentYear = 2020;
let age = currentYear - myBirthYear;

if(age < 20){
  alert('Привет ' + myName + ' ' + surname + '!');
} else {
  if(age >= 20 && age < 40) {
    alert('Добрый день ' + myName + ' ' + surname);
  } else {
    alert('Здравствуйте ' + myName + ' ' + surname);
  }
}
