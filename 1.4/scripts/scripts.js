"use strict";
let date = new Date();

let userName = prompt('Как тебя зовут?');
let surname = prompt('Укажите фамилию');
let userBirthYear = prompt('Введите ваш год рождения');

let currentYear = date.getFullYear();
let age = currentYear - userBirthYear;

if (age < 20) {
  alert(`Привет ${userName} ${surname}!`);
} else if (age >= 20 && age < 40) {
  alert('Добрый день ' + userName + ' ' + surname);
} else {
  alert('Здравствуйте ' + userName + ' ' + surname);
}
