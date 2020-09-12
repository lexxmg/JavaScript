'use strict';

const textPade = document.querySelector('.container__text'),
      btnEdit = document.querySelector('.container-btn__edit'),
      btnSave = document.querySelector('.container-btn__save'),
      btnCansel = document.querySelector('.container-btn__cansel'),
      select = document.querySelector('.form__select');

for (let i = 0; i < localStorage.length; i++) {
  let elOption = document.createElement('option');
  elOption.innerHTML = localStorage.key(i);
  select.append(elOption);
}

select.addEventListener('change', () => {
  console.log(select.value);
  textPade.innerHTML = localStorage.getItem(select.value);
  textStr = localStorage.getItem(select.value);
});

let textStr;
let lastName = new Date();

if (localStorage.length > 0) {
  lastName = localStorage.key(localStorage.length - 1);

  textPade.innerHTML = localStorage.getItem(lastName);
  textStr = localStorage.getItem(lastName);
} else {
  textStr = textPade.innerHTML;
  localStorage.setItem(lastName, textStr);
}

btnEdit.addEventListener('click', () => {
  textPade.setAttribute('contenteditable', 'true');
  btnEdit.setAttribute('disabled', 'disabled');
  btnSave.removeAttribute('disabled');
  btnCansel.removeAttribute('disabled');
});

btnSave.addEventListener('click', () => {
  const date = new Date();
  const textSave = textPade.innerHTML;

  btnSave.setAttribute('disabled', 'disabled');
  btnCansel.setAttribute('disabled', 'disabled');
  btnEdit.removeAttribute('disabled');
  textPade.setAttribute('contenteditable', 'false');

  localStorage.setItem(date, textSave);

  for (let i = 0; i < localStorage.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = localStorage.key(i);
    select.append(elOption);
  }
});

btnCansel.addEventListener('click', () => {
  textPade.innerHTML = textStr;
});
