"use strict";

const WEEK = ['воскресение', 'понедельник', 'вторник', 'среда',
              'четверг', 'пятница', 'суббота'];

const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
               'июля', 'августа', 'октября', 'ноября', 'декабря'];

alert( getTimeText() );

setInterval(() => console.log( getTimeText() ), 1000);


function getTimeText() {
  const date = new Date();
  return ( 'Сегодня ' + date.getDate() +
           ' ' + MONTH[date.getMonth()] +
           ' ' + date.getFullYear() +
           ' года, ' + WEEK[date.getDay()] +
           ', ' + date.getHours() + ' ' +
           declOfNum(date.getHours(), ['час', 'часа', 'часов']) +
           ' ' + date.getMinutes() + ' ' +
           declOfNum(date.getMinutes(), ['минута', 'минуты', 'минут']) +
           ' ' + date.getSeconds() + ' ' +
           declOfNum(date.getSeconds(), ['секунда', 'секунды', 'секунд']) );
}


function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];

  if (number % 100 > 4 && number % 100 < 20) {
    return titles[2];
  } else if (number % 10 < 5) {
    return titles[cases[number % 10]];
  }
  return titles[2];
}
