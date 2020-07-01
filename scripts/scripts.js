"use strict";

const users = [
               {name: 'Иван', login: 'ivan', pass: '213re43'},
               {name: 'Александр', login: 'alex', pass: '36jh8'},
               {name: 'Виктория', login: 'vika', pass: '4kh808'}
              ];

const obj = searchObject(users, prompt('Ведите имя', '') );

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


function searchObject(arr, des) {
  for (let i = 0; i < arr.length; i++) {
    for (let param in arr[i]) {
      if (des === arr[i][param]) {
        return arr[i];
      }
    }

    if (i === arr.length - 1) return false;
  }
}
