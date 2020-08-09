"use strict";

const btn1 = document.querySelector('.inner-1__btn1');
const btn2 = document.querySelector('.inner-1__btn2');
const link = document.querySelector('.inner-1__link');
const textarea = document.querySelector('.inner-2__textarea');
const keyCode = document.querySelector('.inner-2__text');
const coords = document.querySelector('.inner-3__block');
const coordsText = coords.textContent;

btn1.addEventListener('click', () => alert('click'));
btn2.addEventListener('click', onClick);

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event);
  alert('Нажата ссылка');
});

textarea.addEventListener('keydown', function(e) {
  console.log(e.keyCode);

  if (e.keyCode === 13) {
    e.preventDefault();
    keyCode.innerHTML = '<b>Запрещено нажимать!!</b>';
  } else {
    keyCode.innerHTM = 'Код нажатой кнопки: ' + e.keyCode;
  }
});

coords.addEventListener('mousedown', function() {
  console.log('mousedoun');
});

coords.addEventListener('mouseup', function() {
  console.log('mouseup');
});

coords.addEventListener('mouseover', () => {
  console.log('mouseover');
});

coords.addEventListener('mouseout', () => {
  console.log('mouseout');
  coords.textContent = coordsText;
});

coords.addEventListener('mousemove', (e) => {
  console.log('X:' + e.screenX + ' ' + 'Y:' + e.screenY);
  coords.textContent = 'X:' + e.screenX + ' ' + 'Y:' + e.screenY;
});

function onClick() {
  alert('onClick');
  btn2.style.backgroundColor = 'red';
  btn2.removeEventListener('click', onClick);
}
