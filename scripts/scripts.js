'use strict';

const textPade = document.querySelector('.container__text'),
      btnEdit = document.querySelector('.container-btn__edit'),
      btnSave = document.querySelector('.container-btn__save'),
      btnCansel = document.querySelector('.container-btn__cansel');

let textStr;

if ('text' in localStorage) {
  textPade.innerHTML = localStorage.text;
  textStr = localStorage.text;
} else {
  textStr = textPade.innerHTML;
  localStorage.setItem('text', textStr);
}


btnEdit.addEventListener('click', () => {
  textPade.setAttribute('contenteditable', 'true');
  btnEdit.setAttribute('disabled', 'disabled');
  btnSave.removeAttribute('disabled');
  btnCansel.removeAttribute('disabled');
});

btnSave.addEventListener('click', () => {
  const textSave = textPade.innerHTML;

  btnSave.setAttribute('disabled', 'disabled');
  btnCansel.setAttribute('disabled', 'disabled');
  btnEdit.removeAttribute('disabled');
  textPade.setAttribute('contenteditable', 'false');

  localStorage.setItem('text', textSave);
});

btnCansel.addEventListener('click', () => {
  textPade.innerHTML = textStr;
});
