import React from 'react';

//components
import TodoMain from './todo/TodoMain';

//constants
import appConstants  from '../constants/appConstants';

export default class Content extends React.Component {
  render() {
    return (
      <div className="header">
        <TodoMain todos = {appConstants.initialTodoList} />
      </div>
    )
  }
}
