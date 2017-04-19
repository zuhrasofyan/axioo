import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link1</NavItem>
              <NavItem eventKey={2} href="#">Link2</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
    // return (
    //   <header classID="header">
    //     <div className="container" >
    //       <Row>
    //         <Col lg={6} md={6} sm={6} xs={12} className="logo-wrapper">
    //           <HeaderLogo/>
    //         </Col>
    //         <Col lg={6} md={6} sm={6} xs={12} className="text-right">
    //           <HeaderLinks/>
    //         </Col>
    //       </Row>
    //     </div>
    //   </header>
    // );
  }
}

export default Header;