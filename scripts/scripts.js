"use strict";

const selector = document.querySelector('.container h1');
const texts = document.querySelectorAll('.container p');
const el = document.querySelector('h1');
const btn = document.querySelector('button');
const content = document.querySelector('.container');



const p1 = document.createElement('p');
p1.innerHTML = `<i>текст в новом поараграфе</i>`;
p1.style.textAlign = 'center';
//content.appendChild(p1);
//console.log(content.children[2] + ' 2 дочерний элемент');
//content.insertBefore(p1, content.children[2]);


console.log(el.textContent + ' текст заголовка');
el.textContent = 'Новый текст';
console.log( el.getAttribute('class') + ' класс h1');

el.classList.add('hide');
el.classList.remove('hide');

el.style.color = 'red';

//setInterval( () => el.classList.toggle('hide'), 1000 );

console.log(selector);
console.log(texts);


function click() {
  let count = 1;
  //alert("'убирает color = 'red'");
  //el.style.color = '';
  return function() {
    content.insertBefore(p1, content.children[count]);
    count++;
    if (count === content.children.length) {
      count = 1;
    }
  }
}

//btn.setAttribute('disabled', false);
//btn.onclick = click;
btn.addEventListener('click', click());


for (let i = 0; i < texts.length; i++) {
  //console.log(texts[i].textContent);
  //texts[i].innerHTML = '<span>Новый текст ' + (i + 1) + '</span>';
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
