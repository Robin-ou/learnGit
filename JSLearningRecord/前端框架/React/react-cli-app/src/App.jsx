import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.less';
import Header from './pages/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
