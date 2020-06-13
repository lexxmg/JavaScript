"use strict";

const startYear = 1900,
      finishYear = 2020;

for (let i = startYear; i <= finishYear; i++) {
  if (i % 4 === 0) {
    console.log(i);
  } else if (i % 100 === 0) {
    console.log(i);
  } else if (i % 400 === 0) {
    console.log(i);
  }
}
