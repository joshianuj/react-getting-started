import TodoMain from './todo/TodoMain';

import initialTodo from './initialTodo.json';

class Content extends React.Component {
  render() {
    return (
      <div className="header">
        <TodoMain todos={initialTodo.todo}/>
      </div>
    )
  }
}

export default Content;
