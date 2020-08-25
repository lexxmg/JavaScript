'use strict';

const container = document.body.querySelector('.container'),
      list = container.querySelector('.container__list'),
      form = container.querySelector('.container__form'),
      btn = container.querySelector('.form__btn');

list.addEventListener('click', event => {
  event.target.classList.toggle('list__item--done');
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
