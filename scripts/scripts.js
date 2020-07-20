"use strict";

const car = new Car(4, 'white');


function Vehicles(color) {
  this.color = color;
}

function Car(wheels, color) {
  Vehicles.call(this, color);

  this.wheels = wheels;
}

function Airplane(wingspan) {
  this.wingspan = wingspan;
}

function Ship(displacement) {
  this.displacement = displacement;
}
