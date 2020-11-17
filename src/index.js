//import Button from './button/btn.js';
//import './button/btn.css';

const React = require('react');
const ReactDOM = require('react-dom');

const button = (props) => {
  return <button>btn</button>;
}

const Hello = () => {
  return <h2>ReactDOM</h2>;
}

const btn = document.createElement('button');

btn.innerText = 'кнопка';
document.body.append(btn);

ReactDOM.render(<Hello />, document.querySelector('.container'));
