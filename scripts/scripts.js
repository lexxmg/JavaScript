"use strict";

class One {
  constructor() {

  }

  print() {
    console.log('one!');
  }
}

class Two extends One {
  constructor() {
    super();
  }

  print() {
    super.print();
    console.log('two!');
  }
}

const one = new One();
const two = new Two();

one.print();
two.print();
