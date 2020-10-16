"use strict";

class Vehicles {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  set setColor(color) {
    this.color = color;
  }

  set setSpeed(speed) {
    this.speed = speed;
  }

  get allProp() {
    for (let key in this) {
      console.log(key + ' = ' + this[key]);
    }
  }
}

class Car extends Vehicles {
  constructor(wheels, color, speed) {
    super(color, speed);
    this.wheels = wheels;
  }
}

class Airplane extends Vehicles {
  constructor(wingspan, color, speed) {
    super(color, speed);
    this.wingspan = wingspan;
  }
}

class Ship extends Vehicles {
  constructor(displacement, color, speed) {
    super(color, speed);
    this.displacement = displacement;
  }
}

const car = new Car(4, 'white', 120);
const airplane = new Airplane(10, 'white', 1200);
const ship = new Ship(1000, 'gray', 20)

car.allProp;
console.log('измениение цвета');
car.setColor = 'black';
car.setSpeed = '180';
car.allProp;
