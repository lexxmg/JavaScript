'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

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

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {name: 'Задача 1', checked: true},
        {name: 'Задача 2', checked: true},
        {name: 'Задача 3', checked: false}
      ]
    }
  }

  toggleTodo(key) {
    const todos = this.state.todos.map((todo, i) => {
      if (key === i) {
        return {
          name: todo.name,
          checked: !todo.checked
        }
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  }

  render() {
    return (
      <ol>
        {
          this.state.todos.map((todo, i) => {
            const className = todo.checked ? 'checked' : '';

            return (
              <li
                key={i}
                className={className}
                onClick={() => this.toggleTodo(i)}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('.container'));
