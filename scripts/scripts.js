"use strict";

const userList = new UserList();

userList.add( new Users( prompt('Введите полное имя', '') ) );

userList.list();


function UserList() {
  const arr = [];

  this.add = function(obj){
    if (obj.null === null) return;
    arr.push(obj);
    this.add( new Users( prompt('Введите полное имя', '') ) );
  }

  this.list = function() {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].firstName + ' ' +
                  arr[i].lastName + ' ' +
                  arr[i].regDate
                 );
    }
  }

  this.array = () => arr;
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
