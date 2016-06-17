import React from 'react';

//components
import TodoRow from './TodoRow';
import TodoInput from './TodoInput';

export default class TodoMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: this.props.todos || []};
    this.addTodo = this.addTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }
  
  addTodo(item){
    this.setState({todos: this.state.todos.concat([{
      name: item,
      completed: false
    }]
    )});
  }

  changeTodo(index){
    var temp = this.state.todos[index];
    temp.completed = !temp.completed;
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="container">
        <h3>TODO List</h3>
        <TodoRow items={this.state.todos} changeTodo={this.changeTodo}/>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
};

TodoMain.propTypes = {
  todos: React.PropTypes.array
};
