import React from 'react';

//components
import TodoMain from './todo/TodoMain';

import initialTodo from './initialTodo.json';

export default class Content extends React.Component {
  render() {
    return (
      <div className="header">
        <TodoMain todos = {initialTodo.todo} />
      </div>
    )
  }
}
