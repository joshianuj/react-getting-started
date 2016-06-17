import React from 'react';

//components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div>Content</div>
        <div>Footer</div>
      </div>
    )
  }
}
