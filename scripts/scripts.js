"use strict";

const userList = new UserList();

userList.add();

userList.getAllUsers();


function UserList() {
  const arr = [];

  this.add = function(){
    const obj = new Users( prompt('Введите полное имя', '') );

    if (obj.null === null) return;
    arr.push(obj);
    return this.add();
  }

  this.getAllUsers = function() {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].firstName + ' ' +
                  arr[i].lastName + ' ' +
                  arr[i].regDate
                 );
    }
  }

  this.array = arr;
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
