"use strict";

const selector = document.querySelector('.container h1');
const texts = document.querySelectorAll('.container p');

console.log(selector);
console.log(texts);

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i].textContent);
  texts[i].innerHTML = '<span>Новый текст ' + (i + 1) + '</span>';
}

// const date = new Date(),
//       userName = prompt('Как тебя зовут?'),
//       userSurname = prompt('Укажите фамилию'),
//       userBirthYear = prompt('Введите ваш год рождения'),
//       currentYear = date.getFullYear(),
//       age = currentYear - userBirthYear;
//
// if (age < 20) {
//   alert(`Привет ${userName} ${userSurname}!`);
// } else if (age >= 20 && age < 40) {
//   alert(`Добрый день ${userName} ${userSurname}!`);
// } else {
//   alert(`Здравствуйте ${userName} ${userSurname}!`);
// }
