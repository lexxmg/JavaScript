'use strict';

const form = document.querySelector('.search__form'),
      input = document.querySelector('.form__input');

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
        throw res.status;
      }
    })
    .then( (result) => {
      if (result.count > 0) {
        persData(result.results[0]);
        input.value = '';
      } else {
        popup('По вашему запросу ничего не райдено.');
      }
    })
    .catch( (err) => {
      console.log(err);
    });
});

input.addEventListener('input' ,liveSearch);

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
      throw res.status;
    }
  })
  .then(res => {
    if (res.count > 0 && input.value) {
      return res.results;
    } else {
      if (document.querySelector('.live-list')) {
        document.querySelector('.live-list').remove();
      }
      throw res.count;
    }
  })
  .then(result => {
    const list = addLiveList(input);
    list.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        input.value = event.target.innerHTML;
        document.querySelector('.live-list').remove();
      }
    });
    for (let obj of result) {
      list.insertAdjacentHTML('afterbegin', `<li>${obj.name}</li>`);
    }
  })
  .catch(err => console.log(' ошибка, ' + err));
}

function addLiveList(input) {
  const coords = input.getBoundingClientRect();

  if (document.querySelector('.live-list')) {
    document.querySelector('.live-list').remove();
  }

  const ul = document.createElement('ul');

  ul.classList.add('live-list');
  ul.style.top = (coords.bottom + pageYOffset + 3) + 'px';
  ul.style.left = (coords.left + pageXOffset) + 'px';
  document.body.append(ul);

  return ul;
}
