import React, { Component } from 'react';
import logo from './logo.svg';
import sam from './img/ui-sam.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primary">heyho</button>
        <img src={sam} alt=""/>
      </div>
    );
  }
}

export default App;
