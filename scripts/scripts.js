'use strict';

const text = document.querySelector('.container__text'),
      btnEdit = document.querySelector('.container-btn__edit');


btnEdit.addEventListener('click', () => {
  text.setAttribute('contenteditable', 'true');
});
