import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Email from './components/Contact';
import Footer from './components/Footer';
import Data from './Data';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Data={Data}/>
        <Portfolio Data={Data}/>
        <Email Data={Data}/>
        <Footer Data={Data}/>
      </div>
    );
  }
}

export default App;