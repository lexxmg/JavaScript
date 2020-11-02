"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colors = require('colors/safe');

console.log(colors.red('test'));
console.log(colors.green.underline('test_2'));

var MyClass = function MyClass() {
  _classCallCheck(this, MyClass);

  var foo = 1;

  var bar = function bar(x) {
    return x * x;
  };

  console.log(bar(foo));
};