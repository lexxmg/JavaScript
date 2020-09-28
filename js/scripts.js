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
        popup('Что то пошло не так, повторите попытку позже.');
      }
    })
    .then( (result) => {
      if (result.count > 0) {
        console.log(result.results[0].mass);
      } else {
        popup('По вашему запросу ничего не райдено.');
      }
    })
    .catch( (err) => {
      console.log(err);
    });
});


function popup(text) {
  const popup = document.querySelector('.popup-container');
  const popupText = document.querySelector('.popup-container__text');

  popupText.innerHTML = text;
  popup.classList.remove('hidden');

  popup.addEventListener('click', event => {
    if (!event.target.classList.contains('popup-container__popup')) {
      popup.classList.add('hidden');
    }
  });

  setTimeout(() => {
    popup.classList.add('hidden');
  }, 5000);
}
