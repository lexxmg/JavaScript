'use strict';

const text = document.querySelector('.main__text'),
      btn = document.querySelector('.main__btn'),
      btnFetch = document.querySelector('.btn-fetch-js');

btn.addEventListener('click', () => {
  const request = new XMLHttpRequest();

  request.addEventListener('load', () => {
    text.innerHTML = request.responseText;
  });

  request.open('GET', '/data.txt');
  request.send();
});

btnFetch.onclick = () => {
  fetch('/data.txt').then(res => res.text())
    .then(data => console.log(data))
    .catch(err => {
      console.log('err');
      console.log(err.text());
    });
}
