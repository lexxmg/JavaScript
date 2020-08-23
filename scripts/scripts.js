'use strict';

const container = document.body.querySelector('.container'),
      list = container.querySelector('.container__list'),
      inputText = container.querySelector('.container__iput'),
      btn = container.querySelector('.container__btn');

container.addEventListener('click', (event) => {
  if (event.target === btn) {
    if (inputText.value === '') {
      alert('Поле ввода должно быть заполнено!');
    } else {
      const item = document.createElement('li');
      list.append(item);
      item.className = 'list__item';
      item.textContent = inputText.value;
      inputText.value = '';
    }
  }

  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('list__item--done');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && inputText.value) {
    console.log('click');
    btn.click();
  }
});
