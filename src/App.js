import React, { Component } from 'react';
import sam from './img/ui-sam.jpg';
import './App.css';

import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout/>
        <img src={sam} alt=""/>
      </div>
    );
  }
}


export default App;
