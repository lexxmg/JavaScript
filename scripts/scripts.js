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
      list.insertAdjacentHTML('beforeend', `<li class = "list__item">${inputText.value}</li>`);
      // const item = document.createElement('li');
      // list.append(item);
      // item.className = 'list__item';
      // item.textContent = inputText.value;
      inputText.value = '';
    }
  }

  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('list__item--done');
  }
});

inputText.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    btn.click();
  }
});

function makeElement(el, text, cl) {
  el = document.createElement(el);
  el.innerHTML = text;

  if (cl) {
    el.className = cl;
  }
  return el;
}
