class TodoInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({item: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.item);
    this.setState({item: ''}, () => this.refs.item.focus());
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="item"
               onChange={this.onChange}
               value={this.state.item}/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}

export default TodoInput;
