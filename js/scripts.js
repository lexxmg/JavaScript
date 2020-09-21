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

btnFetch.onclick = async () => {
  const res = await fetch('/data.txt');

  if (res.ok) {
    const text = await res.text();
    console.log(text);
  } else {
    console.log(res.status);
  }
}

function xhr(url) {
  return new Promise( (resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('load', () => {
      if (request.status >= 400) {
        reject(request.status);
      } else {
        resolve(request.responseText);
      }  
    });

    request.open('GET', url);
    request.send();
  });
}

const sleep = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
