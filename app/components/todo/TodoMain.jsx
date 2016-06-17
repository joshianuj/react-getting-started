import React from 'react';

//components
import TodoRow from './TodoRow';
import TodoInput from './TodoInput';

export default class TodoMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: this.props.todos || []};
    this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo(item){
    this.setState({todos: this.state.todos.concat([item])});
  }

  render () {
    return (
      <div>
        <h3>TODO List</h3>
        <TodoRow items={this.state.todos} />
        <TodoInput addTodo={this.addTodo} />
      </div>
    );
  }
};

TodoMain.propTypes = {
  todos: React.PropTypes.array
}
