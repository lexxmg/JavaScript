'use strict';

const text = document.querySelector('.main__text'),
      btn = document.querySelector('.main__btn');

btn.addEventListener('click', () => {
  const request = new XMLHttpRequest();

  request.addEventListener('load', () => {
    text.innerHTML = request.responseText;
  });

  request.open('GET', '/data.txt');
  request.send();
});
