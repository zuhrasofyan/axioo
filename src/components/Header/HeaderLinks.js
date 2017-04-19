import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class HeaderLinks extends Component {
  render () {
    return (
      <div className="menu-links scroll-me">
        <a href="#header"> <Glyphicon glyph="home" /> </a>
        <a href="#about"> About </a>
        <a href="#clients"> <Glyphicon glyph="home" /> </a>
        <a href="#contact"> <Glyphicon glyph="home" /> </a>
      </div>
    );
  }
}

export default HeaderLinks;