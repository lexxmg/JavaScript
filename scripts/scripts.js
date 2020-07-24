"use strict";



function Vehicles(color, speed) {
  this.color = color;
  this.speed = speed;
}

Vehicles.prototype.setColor = function(color) {
  this.color = color;
}

Vehicles.prototype.setSpeed = function(speed) {
  this.speed = speed;
}

Vehicles.prototype.getAllProp = function() {
  for (let key in this) {
    if ( this.hasOwnProperty(key) ) {
      console.log(key + ' = ' + this[key]);
    }
  }
}

function Car(wheels, color, speed) {
  Vehicles.call(this, color, speed);

  this.wheels = wheels;
}

Car.prototype = Object.create(Vehicles.prototype);
Car.prototype.constructor = Vehicles;


function Airplane(wingspan, color, speed) {
  Vehicles.call(this, color, speed);

  this.wingspan = wingspan;
}

Airplane.prototype = Object.create(Vehicles.prototype);
Airplane.prototype.constructor = Vehicles;

function Ship(displacement, color, speed) {
  Vehicles.call(this, color, speed);

  this.displacement = displacement;
}

Ship.prototype = Object.create(Vehicles.prototype);
Ship.prototype.constructor = Vehicles;


const car = new Car(4, 'white', 120);
const airplane = new Airplane(10, 'white', 1200);
const ship = new Ship(1000, 'gray', 20)

car.getAllProp();
console.log('измениение цвета');
car.setColor('black');
car.setSpeed('180');
car.getAllProp();
