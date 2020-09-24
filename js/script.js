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


/*
  // Таким образом формируется строка вида:
  // https://swapi.dev/api/people/?search=obi

  // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
  var request = new XMLHttpRequest();

  // Назначаем обработчик события load для запроса
  request.addEventListener("load", function () {
    // отображаем в консоли текст ответа сервера
    console.log(request.response);

    // парсим его из JSON-строки в JavaScript-объект
    var response = JSON.parse(request.response);

    // Проверяем статус-код, который прислал сервер
    // 200 — это ОК, остальные — ошибка или не подходят
    if (request.status !== 200) {
      alert(
        "Произошла ошибка при получении ответа от сервера:\n\n" +
          response.message
      );
      return;
    }

    // Проверяем, если поле имя в ответе на запрос
    if (response.count == 0) {
      alert("К сожалению, данные не получены по запросу: " + url);
      return;
    }

    // Если все в порядке, то отображаем количество результатов поиска
    alert("Найдено персонажей:" + response.count);

  });

  // Обработчик готов, можно отправлять запрос
  // Открываем соединение и отправляем
  request.open("get", url);
  request.send();
*/
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
