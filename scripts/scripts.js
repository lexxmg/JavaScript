"use strict";



try {
  alert( eval( prompt('Введите JS код', "filterByType(4, 'dfg', 7, false, 'hjfl')") ) );
} catch (e) {
  alert('ошибка: ' + e);
}

function filterByType() {
  return [...arguments].filter(e => typeof e === typeof [...arguments][0]);
}

console.log( filterByType(4, 'dfg', 7, false, 'hjfl') );
