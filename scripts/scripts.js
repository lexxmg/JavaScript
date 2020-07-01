"use strict";

const users = [
               {name: 'Иван', login: 'ivan', pass: '213re43'},
               {name: 'Александр', login: 'alex', pass: '36jh8'},
               {name: 'Виктория', login: 'vika', pass: '4kh808'}
              ];

const userName = prompt('Найти', '');

search: for (let i = 0; i < users.length; i++) {
  for (let param in users[i]) {
    if ( userName === users[i][param] ) {
      console.log('Обект № ' + i);
      console.log(users[i]);
      break search;
    }
  }
  if (i === users.length -1) {
    alert('Свпадений не найдено!!');
  }
}
