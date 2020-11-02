"use strict";

const colors = require('colors/safe');

console.log( colors.red('test') );
console.log( colors.green.underline('test_2') );

class MyClass {
  constructor() {
    const foo = 1;
    const bar = x => x * x;

    console.log( bar(foo) );
  }
}
