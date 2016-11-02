import Content from './Content';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Content/>
        <div>Footer</div>
      </div>
    )
  }
}

export default App;
