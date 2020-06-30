"use strict";

const users = [
               {name: 'Иван', login: 'ivan', pass: '213re43'},
               {name: 'Александр', login: 'alex', pass: '36jh8'},
               {name: 'Виктория', login: 'vika', pass: '4kh808'}
              ];

const userName = prompt('Введите свой логин', '');

for (let i = 0; i < users.length; i++) {
  if (userName === users[i]['login']) {
    const userPass = prompt('Ведите пароль', '');
    if (userPass === users[i]['pass']) {
      alert('здравствуйте, ' + users[i]['name']);
    } else {
      alert('Не верный пароль!');
    }
    break;
  } else if (i === users.length - 1) {
    alert('Не верный логин!');
  }
}
