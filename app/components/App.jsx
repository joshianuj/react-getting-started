//components
import Header from './common/Header';
import Footer from './common/Footer';
import Content from './Content';

export default class App extends React.Component {
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
