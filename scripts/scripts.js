'use strict';

const textPade = document.querySelector('.container__text'),
      btnEdit = document.querySelector('.container-btn__edit'),
      btnSave = document.querySelector('.container-btn__save'),
      btnCansel = document.querySelector('.container-btn__cansel'),
      btnDelete = document.querySelector('.container-btn__delete'),
      select = document.querySelector('.container__select');

let textStr;

if (localStorage.length > 0) {
  select.removeAttribute('disabled');

  for (let i = 0; i < localStorage.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = localStorage.key(i);
    select.append(elOption);
  }

  textPade.innerHTML = localStorage.getItem(select.value);
}

select.addEventListener('change', () => {
  textPade.innerHTML = localStorage.getItem(select.value);
});

btnEdit.addEventListener('click', () => {
  textStr = localStorage.getItem(select.value);
  select.setAttribute('disabled', 'disabled');

  textPade.setAttribute('contenteditable', 'true');
  btnEdit.setAttribute('disabled', 'disabled');
  btnSave.removeAttribute('disabled');
  btnCansel.removeAttribute('disabled');
  btnDelete.removeAttribute('disabled');
});

btnSave.addEventListener('click', () => {
  const date = new Date();
  const textSave = textPade.innerHTML;

  btnSave.setAttribute('disabled', 'disabled');
  btnCansel.setAttribute('disabled', 'disabled');
  btnDelete.setAttribute('disabled', 'disabled');
  btnEdit.removeAttribute('disabled');
  textPade.setAttribute('contenteditable', 'false');

  localStorage.setItem(date, textSave);

  select.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = localStorage.key(i);
    select.append(elOption);
  }

  select.removeAttribute('disabled');
  select.value = date;
});

btnCansel.addEventListener('click', () => {
  textPade.innerHTML = textStr;
  select.removeAttribute('disabled');

  btnSave.setAttribute('disabled', 'disabled');
  btnCansel.setAttribute('disabled', 'disabled');
  btnDelete.setAttribute('disabled', 'disabled');
  btnEdit.removeAttribute('disabled');
  textPade.setAttribute('contenteditable', 'false');
});

btnDelete.addEventListener('click', () => {

});
