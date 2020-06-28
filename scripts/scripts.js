"use strict";

const date = new Date();
const WEEK = ['воскресение', 'понедельник', 'вторник', 'среда',
              'четверг', 'пятница', 'суббота'];

const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
               'июля', 'августа', 'октября', 'ноября', 'декабря'];

alert( WEEK[date.getDay()] + ' ' + date.getDate() + ' ' + MONTH[date.getMonth()] );
