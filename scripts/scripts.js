"use strict";

const btn1 = document.querySelector('.inner-1__btn1');
const btn2 = document.querySelector('.inner-1__btn2');

btn1.addEventListener('click', () => alert('click'));
btn2.addEventListener('click', onClick);

function onClick() {
  alert('onClick');
  btn2.style.backgroundColor = 'red';
  btn2.removeEventListener('click', onClick);
}
