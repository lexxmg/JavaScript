"use strict";

const users = [
               {name: 'Иван', login: 'ivan', pass: '213re43'},
               {name: 'Александр', login: 'alex', pass: '36jh8'},
               {name: 'Виктория', login: 'vika', pass: '4kh808'}
              ];

const obj = users.find(function(obj) {
              for (let param in obj) {
                if (this === obj[param]) return true;
              }
            }, prompt('Ведите имя', ''));

if (obj) {
  const pass = prompt('Введите пароль', '');
  if (pass === obj.pass) {
    alert('Здравствуйте, ' + obj.name);
  } else {
    alert('Неверный пароль!');
  }
} else {
  alert('Имя не найдено!');
}
