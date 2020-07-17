"use strict";

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
}

function Manager(firstName, lastName) {
  User.apply(this, arguments);

  this.seyHello = function() {
    alert('Здравствуйте');
  }

  this.changeName = function(name) {
    this.firstName = name;
  }
}

const u = new User('John', 'Doe');
const m = new Manager('Jene', 'Doe');
