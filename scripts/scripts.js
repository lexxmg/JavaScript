'use strict';

const container = document.body.querySelector('.container'),
      list = container.querySelector('.container__list'),
      form = container.querySelector('.container__form'),
      inputText = container.querySelector('.form__iput'),
      btn = container.querySelector('.form__btn');

list.addEventListener('click', event => {
  event.target.classList.toggle('list__item--done');
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (inputText.value === '') {
    alert('Поле ввода должно быть заполнено!');
  } else {
    list.insertAdjacentHTML('beforeend', `<li class="list__item">${inputText.value}</li>`);
    inputText.value = '';
  }
  //console.log(event);
});
