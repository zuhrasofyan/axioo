import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import HeaderLogo from './Header/HeaderLogo';
import HeaderLinks from './Header/HeaderLinks';

class Header extends Component {
  render () {
    return (
      <header classID="header2">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <HeaderLogo />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <HeaderLinks />
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;