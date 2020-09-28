'use strict';

const form = document.querySelector('.search__form');

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
        persData(result.results[0]);
      } else {
        popup('По вашему запросу ничего не райдено.');
      }
    })
    .catch( (err) => {
      console.log(err);
    });
});


function persData(obj) {
  const persName = document.querySelector('.js-name'),
        persHeight = document.querySelector('.js-height'),
        persMass = document.querySelector('.js-mass'),
        persBirthYear = document.querySelector('.js-birth_year'),
        persFilmCount = document.querySelector('.js-film_count');

  persName.innerHTML = obj.name || 'Параметр неизвестен';
  persHeight.innerHTML = obj.height || 'Параметр неизвестен';
  persMass.innerHTML = obj.mass || 'Параметр неизвестен';
  persBirthYear.innerHTML = obj.birth_year || 'Параметр неизвестен';
  persFilmCount.innerHTML = obj.films.length || 'Параметр неизвестен';
}

function popup(text) {
  const popup = document.querySelector('.popup-container');
  const popupText = document.querySelector('.popup-container__text');
  document.body.classList = 'off-scroll';

  popupText.innerHTML = text;
  popup.classList.remove('hidden');

  popup.addEventListener('click', event => {
    if (!event.target.classList.contains('popup-container__popup')) {
      popup.classList.add('hidden');
      document.body.classList = '';
    }
  });

  setTimeout(() => {
    popup.classList.add('hidden');
    document.body.classList = '';
  }, 5000);
}

function liveSearch() {
  let url = api + form.select.value + '/?search=' + form.search.value;

  fetch(url).then( res => {
    if (res.ok) {
      return res.json();
    } else {
      return
    }
  })
  .then(res => {
    if (res.count > 0) {
      return res.results;
    } else {
      return
    }
  })
  .then(result => {
    for (let obj of result) {
      console.log(obj.name);
    }
  });
}
