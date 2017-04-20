import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(title) {
    this.setState({title});
  }
  render() {
    return(
      <div>
        <Header />
        <Body changeTitle={this.changeTitle} title={this.state.title}/>
      </div>
    );
  }
}

export default Layout;