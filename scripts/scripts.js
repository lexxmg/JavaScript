"use strict";

const users = [
               {name: 'Иван', login: 'ivan', pass: '213re43'},
               {name: 'Александр', login: 'alex', pass: '36jh8'},
               {name: 'Виктория', login: 'vika', pass: '4kh808'}
              ];
const userName = prompt('Введите свой логин', '');

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  if (userName === users[i]['login']) {
    alert('здравствуйте, ' + users[i]['name']);
    break;
  } else if (i === users.length - 1) {
    alert('Ошибка');
  }
  // for ( let prop in users[i] ) {
  //   console.log(users[i][prop]);
  // }
}
