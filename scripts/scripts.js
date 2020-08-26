'use strict';

const container = document.body.querySelector('.container'),
      list = container.querySelector('.container__list'),
      form = container.querySelector('.container__form');

list.addEventListener('click', event => {
  if ( event.target.classList.contains('list__item') ) {
    event.target.classList.toggle('list__item--done');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.text.value === '') {
    alert('Поле ввода должно быть заполнено!');
  } else {
    list.insertAdjacentHTML('beforeend', `<li class="list__item">${form.text.value}</li>`);
    form.text.value = '';
  }
});
