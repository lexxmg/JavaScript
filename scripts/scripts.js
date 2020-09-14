'use strict';

const textPade = document.querySelector('.container__text'),
      btnEdit = document.querySelector('.container-btn__edit'),
      btnSave = document.querySelector('.container-btn__save'),
      btnCansel = document.querySelector('.container-btn__cansel'),
      btnDelete = document.querySelector('.container-btn__delete'),
      select = document.querySelector('.container__select');

let textStr;
const data = new LocalData();

if (localStorage.length > 0) {
  select.removeAttribute('disabled');

  data.addArray( JSON.parse( localStorage.getItem('data') ) );

  for (let i = 0; i < data.all.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = data.keyIndex(i);
    select.append(elOption);
  }

  select.value = localStorage.getItem('lastEdit');
  textPade.innerHTML = data.getData(select.value);
}

select.addEventListener('change', () => {
  textPade.innerHTML = data.getData(select.value);
  localStorage.setItem('lastEdit', select.value);
});

btnEdit.addEventListener('click', () => {
  textStr = textPade.innerHTML;
  textPade.setAttribute('contenteditable', 'true');

  btnEnabled(btnSave, btnCansel, btnDelete);
  btnDisabled(select, btnEdit);
});

btnSave.addEventListener('click', () => {
  const textSave = textPade.innerHTML;

  textPade.setAttribute('contenteditable', 'false');

  data.setData(textSave);
  localStorage.setItem('data', JSON.stringify(data.all));

  select.innerHTML = '';

  for (let i = 0; i < data.all.length; i++) {
    let elOption = document.createElement('option');
    elOption.innerHTML = data.keyIndex(i);
    select.append(elOption);
  }

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(select, btnEdit);

  select.value = data.keyIndex(data.all.length - 1);

  localStorage.setItem('lastEdit', select.value);
});

btnCansel.addEventListener('click', () => {
  textPade.innerHTML = textStr;
  textPade.setAttribute('contenteditable', 'false');

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(select, btnEdit);
});

btnDelete.addEventListener('click', () => {
  data.remove(select.value);
  localStorage.setItem('data', JSON.stringify(data.all));

  if (data.all.length > 0) {
    select.innerHTML = '';

    for (let i = 0; i < data.all.length; i++) {
      let elOption = document.createElement('option');
      elOption.innerHTML = data.keyIndex(i);
      select.append(elOption);
    }

    btnEnabled(select);

    textPade.innerHTML = data.getData(select.value);
    localStorage.setItem('lastEdit', select.value);
  } else {
    localStorage.removeItem('data');
    localStorage.removeItem('lastEdit');
    textPade.innerHTML = 'Этот текст можно редактировать.';
    select.innerHTML = '';
  }

  btnDisabled(btnSave, btnCansel, btnDelete);
  btnEnabled(btnEdit);

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

function LocalData() {
  this.all = [];

  this.setData = function(text) {
    const obj = {};
    obj[new Date()] = text;

    this.all.push(obj);
  }

  this.getData = function(name) {
    for (let obj of this.all) {
      if (name in obj) {
        return obj[name];
      }
    }
  }

  this.remove = function(name) {
    for (let i = 0; i < this.all.length; i++) {
      if (name in this.all[i]) {
        this.all.splice(i, 1);
      }
    }
  }

  this.keyIndex = function(i) {
    for (let key in this.all[i]) {
      return key;
    }
  }

  this.addArray = function(array) {
    this.all = array;
  }
}
