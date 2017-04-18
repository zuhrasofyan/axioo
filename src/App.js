import React, { Component } from 'react';
import logo from './logo.svg';
import sam from './img/ui-sam.jpg';
import './App.css';
import { Navbar, Jumbotron, Button, Modal, Glyphicon, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowHeader/>
        <img src={sam} alt=""/>
        <ShowModal/>
      </div>
    );
  }
}

class ShowHeader extends Component {
  render() {
    return(
      <header classID="header">
        <div className="container" >
          <Row>
            <Col lg={6} md={6} sm={6} xs={12} className="logo-wrapper">
              <img src={logo} alt="logo" className="App-logo" />
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="text-right">
              <div className="menu-links scroll-me">
                <a href="#header"> <Glyphicon glyph="home" /> </a>
                <a href="#about"> <Glyphicon glyph="home" /></a>
                <a href="#clients"> <Glyphicon glyph="home" /> </a>
                <a href="#contact"> <Glyphicon glyph="home" /> </a>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}

class ShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({showModal:true})
  }
  close() {
    this.setState({showModal:false})
  }

  render() {
    return(
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsClass="btn-custom btn-two"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
