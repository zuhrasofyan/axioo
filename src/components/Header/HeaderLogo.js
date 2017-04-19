import React, { Component } from 'react';
import logo from '../../img/logo.svg';

class HeaderLogo extends Component {
  render () {
    return (
      <img src={logo} alt="logo" className="App-logo" />
    );
  }
}

export default HeaderLogo;