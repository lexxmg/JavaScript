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
  textPade.setAttribute('contenteditable', 'true');

  btnEnabled(btnSave, btnCansel, btnDelete);
  btnDisabled(select, btnEdit);
});

btnSave.addEventListener('click', () => {
  const date = new Date();
  const textSave = textPade.innerHTML;

  textPade.setAttribute('contenteditable', 'false');

  localStorage.setItem(date, textSave);

  select.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = localStorage.key(i);
    select.append(elOption);
  }

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(select, btnEdit);

  select.value = date;
});

btnCansel.addEventListener('click', () => {
  textPade.innerHTML = textStr;
  textPade.setAttribute('contenteditable', 'false');

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(select, btnEdit);

});

btnDelete.addEventListener('click', () => {
  localStorage.removeItem(select.value);

  select.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = localStorage.key(i);
    select.append(elOption);
  }

  textPade.innerHTML = localStorage.getItem(select.value);

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(select, btnEdit);
  
  textPade.setAttribute('contenteditable', 'false');
});

function btnDisabled() {
  for (let obj of arguments) {
    obj.setAttribute('disabled', 'disabled');
  }
}

function btnEnabled() {
  for (let obj of arguments) {
    obj.removeAttribute('disabled');
  }
}
