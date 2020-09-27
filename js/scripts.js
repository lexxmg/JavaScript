'use strict';

const form = document.querySelector('.search__form'),
      persName = document.querySelector('.js-name'),
      persHeight = document.querySelector('.js-height'),
      persMass = document.querySelector('.js-mass'),
      persBirthYear = document.querySelector('.js-birth_year'),
      persFilmCount = document.querySelector('.js-film_count');

const api = 'https://swapi.dev/api/';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let url = api + form.select.value + '/?search=' + form.search.value;

  fetch(url)
    .then( (res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert('ошибка сервера' + res);
      }
    })
    .then( (result) => {
      console.log(result);
    })
    .catch( (err) => {
      console.log(err);
    });
});
