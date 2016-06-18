export default class TodoRow extends React.Component {
  render() {
    const createItem = (item, index) => {
      return (
        <li key={index}>
          <input type="checkbox" id={index} checked={item.completed} onChange={()=>this.props.changeTodo(index)}/>
          <label class="toggle" for={index}>{item.name}</label>
        </li>
      );
    };
    return <ul className="todo-list">{this.props.items.map(createItem)}</ul>
  }
};

TodoRow.propTypes = {
  items: React.PropTypes.array.isRequired
};
