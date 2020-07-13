"use strict";

let users = new Users( prompt('Введите полное имя', '') );
const us = new UserList;
//console.log( us.add(users) );
//console.log( users.str( prompt('Введите полное имя', '') ) );
console.log(users);

function UserList() {
  const arr = [];

  this.add = function(obj){
    arr.push(obj);
    console.log(users);
    return users = new Users;
  }
}

function Users(str) {
  const arr = arr.split(str);
  const date = new Date();

  this.firstName = arr[0];
  this.lastName = arr[1];
  this.regDate = date;
}



//console.log(users);

// const users = [
//                {name: 'Иван', login: 'ivan', pass: '213re43'},
//                {name: 'Александр', login: 'alex', pass: '36jh8'},
//                {name: 'Виктория', login: 'vika', pass: '4kh808'}
//               ];
//
// const obj = users.find( find( prompt('Ведите имя', '') ) );
//
// function find(name) {
//   return function(obj) {
//     for (let key in obj) {
//       if (name === obj[key]) {
//         return true;
//       }
//     }
//   }
// }
//
// if (obj) {
//   const pass = prompt('Введите пароль', '');
//   if (pass === obj.pass) {
//     alert('Здравствуйте, ' + obj.name);
//   } else {
//     alert('Неверный пароль!');
//   }
// } else {
//   alert('Имя не найдено!');
// }
