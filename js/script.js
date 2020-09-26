'use strict';

const formSearch = document.querySelector('.search_form'),
      inputSearch = document.querySelector('#person_search_input'),
      btn = document.querySelector('#search_request_btn'),
      result = document.querySelector('.search_result');

let json;

// Сохраняем адрес API
var api = "https://swapi.dev/api/";

btn.addEventListener('click', () => {
  const search = inputSearch.value;
  const url = api + "people/?search=" + search;

  getRequest(url, (res) => {
    json = JSON.parse(res);

    if (json.count === 0) {
      alert("К сожалению, данные не получены по запросу: " + url);
      return;
    }

    alert("Найдено персонажей:" + json.count);

    result.innerHTML = '';

    for (let obj of json.results) {
      const li = document.createElement('li');
      li.innerHTML = obj.name;

      result.append(li);
    }

  }, (err) => {
    alert(
      "Произошла ошибка при получении ответа от сервера:\n\n" +
        JSON.parse(err).message
    );
  });
});

result.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'LI') {
    for (let obj of json.results) {
      if (obj.name === target.innerHTML) {
        pers_name.innerHTML = obj.name;
        height.innerHTML = obj.height;
        mass.innerHTML = obj.mass;
        birth_year.innerHTML = obj.birth_year;
        films_count.innerHTML = obj.films.length;
      }
    }
  }
});

let timerId = 0;

inputSearch.addEventListener('input', () => {
  const coordSearch = inputSearch.getBoundingClientRect();
  const search = inputSearch.value;
  const url = api + "people/?search=" + search;

  if (search === '') {
    if ( document.querySelector('.live-search') ) {
      document.querySelector('.live-search').remove();
    }
  }

  if (timerId) {
    clearTimeout(timerId);
  }

  function foo() {
    getRequest(url, (res) => {
      json = JSON.parse(res);

      if (json.count > 0 && search !== '') {
        if ( document.querySelector('.live-search') ) {
          document.querySelector('.live-search').remove();
        }

        const ul = document.createElement('ul');
        ul.classList.add('live-search');
        ul.style.top = (coordSearch.bottom + pageYOffset + 3) + 'px';
        ul.style.left = (coordSearch.left + pageXOffset) + 'px';
        document.body.prepend(ul);

        for (let obj of json.results) {
          const li = document.createElement('li');
          li.innerHTML = obj.name;

          li.addEventListener('click', () => {
            inputSearch.value = li.innerHTML;
            ul.remove();
          });

          ul.append(li);
        }
      } else {
        if ( document.querySelector('.live-search') ) {
          document.querySelector('.live-search').remove();
        }
      }

    }, (err) => {

    });
  }

  timerId = setTimeout(foo, 500);
});


function getRequest(url, callback, err) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      callback(xhr.response);
    } else {
      err(xhr.response);
      return;
    }
  });

  xhr.open("get", url);
  xhr.send();
}
