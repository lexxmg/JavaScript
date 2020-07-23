"use strict";



function Vehicles(color) {
  this.color = color;
}

Vehicles.prototype.setColor = function(color) {
  this.color = color;
}

function Car(wheels, color) {
  Vehicles.call(this, color);

  this.wheels = wheels;
}

Car.prototype = Object.create(Vehicles.prototype);
Car.prototype.constructor = Vehicles;


function Airplane(wingspan) {
  this.wingspan = wingspan;
}

function Ship(displacement) {
  this.displacement = displacement;
}

const car = new Car(4, 'white');
const v = new Vehicles('black');


let Character = function(settings) {
  this.name = settings.name;
  this.health = settings.health || 100;
  this.exp = settings.exp || 0;
  this.strength = settings.strength || 1;
};

Character.prototype.walk = function(steps) {
  console.log(this.name + ' прошел ' + steps + ' шагов');
};

Character.prototype.run = function(steps) {
  console.log(this.name + ' пробежал ' + 2 * steps + ' шагов');
};


let Human = function(settings) {
  Character.apply(this, arguments); // наследуем все свойства от Character
};

Human.prototype = Object.create(Character.prototype);  // наследуем методы через прототип
Human.prototype.constructor = Character;  // прописываем имя конструктора

Human.prototype.build = function(buildingStrength) {
  this.health += buildingStrength;
};

let human = new Human({name: 'John', health: 10});

console.log(human.health);
human.build(10);
console.log(human.health);
human.walk(10);
human.run(50);
