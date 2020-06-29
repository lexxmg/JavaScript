"use strict";

const date = new Date();
const WEEK = ['воскресение', 'понедельник', 'вторник', 'среда',
              'четверг', 'пятница', 'суббота'];

const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
               'июля', 'августа', 'октября', 'ноября', 'декабря'];

alert( 'Сегодня ' + date.getDate() + ' ' + MONTH[date.getMonth()] +
       ' ' + date.getFullYear() + ' года, ' + WEEK[date.getDay()] +
       ', ' + getHourText(date.getHours()) +
       ' ' + getMinuteText(date.getMinutes()) +
       ' ' + getSecText(date.getSeconds()) );


setInterval(getTimeText, 1000);


function getTimeText() {
  const d = new Date();
  console.log(`${getHourText(d.getHours())} ${getMinuteText(d.getMinutes())} ${getSecText(d.getSeconds())}`);
}

function getHourText(h) {
  if (h === 1 || h === 21 ) {
    return h + ' час';
  } else if (h > 4 && h < 21 || h === 0) {
    return h + ' часов';
  }
  return h + ' часа';
}

function getMinuteText(m) {
  if (m === 1 || m === 21 || m === 31 || m === 41 || m === 51) {
    return m + ' минута'
  } else if (m > 1 && m < 5 || m > 21 && m < 25 ||
             m > 31 && m < 35 || m > 41 && m < 45 ||
             m > 51 && m < 55) {
    return m + ' минуты';
  }
  return m + ' минут';
}

function getSecText(s) {
  if (s === 1 || s === 21 || s === 31 || s === 41 || s === 51) {
    return s + ' секунда'
  } else if (s > 1 && s < 5 || s > 21 && s < 25 ||
             s > 31 && s < 35 || s > 41 && s < 45 ||
             s > 51 && s < 55) {
    return s + ' секунды';
  }
  return s + ' секунд';
}
