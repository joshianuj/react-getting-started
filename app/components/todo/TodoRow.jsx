import React from 'react';

export default class TodoRow extends React.Component {
  render () {
    const createItem = (item, index) => {
      return (
        <li key={index}>{item}</li>
      );
    };

    return <ul>{this.props.items.map(createItem)}</ul>
  }
};

TodoRow.propTypes = {
  items: React.PropTypes.array.isRequired
}
