import React, { Component } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';

class HeaderLinks extends Component {
  render () {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><Glyphicon glyph="home" /> Link1</NavItem>
        <NavItem eventKey={2} href="#"><Glyphicon glyph="home" /> Link2</NavItem>
      </Nav>
    );
  }
}

export default HeaderLinks;