"use strict";

const userList = new UserList();

userList.add();

userList.getAllUsers();


function UserList() {
  this.users = [];

  this.add = function(){
    const obj = new Users( prompt('Введите полное имя', '') );

    if (obj.null === null) return;
    this.users.push(obj);
    return this.add();
  }

  this.getAllUsers = function() {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].firstName + ' ' +
                  this.users[i].lastName + ' ' +
                  this.users[i].regDate
                 );
    }
  }
}

function Users(str) {
  if (str === null) {
    this.null = null;
  } else {
    const arr = str.split(' ');
    const date = new Date();

    this.firstName = arr[0];
    this.lastName = arr[1];
    this.regDate = date;
  }
}
