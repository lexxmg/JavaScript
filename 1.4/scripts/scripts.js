"use strict";

const date = new Date(),
      userName = prompt('Как тебя зовут?'),
      userSurname = prompt('Укажите фамилию'),
      userBirthYear = prompt('Введите ваш год рождения'),
      currentYear = date.getFullYear(),
      age = currentYear - userBirthYear;

if (age < 20) {
  alert(`Привет ${userName} ${userSurname}!`);
} else if (age >= 20 && age < 40) {
  alert(`Добрый день ${userName} ${userSurname}!`);
} else {
  alert(`Здравствуйте ${userName} ${userSurname}!`);
}
