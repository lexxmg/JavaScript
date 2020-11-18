'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return <button>{props.name}</button>;
}

const Hello = (props) => {
  return <h2>ReactDOM {props.name}</h2>;
}

const App = () => {
  return (
    <div>
      <Hello  name="тест" />
      <Button  name="кнопка React" />
    </div>
  );
}

//const btn = document.createElement('button');

//btn.innerText = 'кнопка';
//document.body.append(btn);

//ReactDOM.render(<Hello  name="тест" />, document.querySelector('.container'));
//ReactDOM.render(<Button  name="кнопка React" />, document.querySelector('.container'));
ReactDOM.render(<App />, document.querySelector('.container'));
