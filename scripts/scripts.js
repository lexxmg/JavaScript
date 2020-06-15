"use strict";
let sumNumber = 0;

do {
  let userNumber = prompt('Ведите число', '');

  if (userNumber == null) break;
  if (!+userNumber) continue;

  sumNumber = sumNumber + Number(userNumber);
} while (true);

alert(sumNumber);
