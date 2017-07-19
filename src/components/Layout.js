import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello",
      list: list,
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  changeTitle(title) {
    this.setState({title});
  }
  onDismiss(id) {
    //isNotId ES5
    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    //isNotId ES6
    const isNotId = item => item.objectID !== id;

    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return(
      <div>
        <Header />
        <Body changeTitle={this.changeTitle} title={this.state.title}/>
        
        {this.state.list.map((item) =>

          <div key={ item.objectID }>
            <span>
              <a href={ item.url }>{ item.title }</a> &nbsp;
            </span>
            <span>{ item.author } </span>
            <span>{ item.num_comments } </span>
            <span>{ item.points } </span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)}
                      type="button"
              >
                Dismiss
              </button>
            </span>
          </div>

        )}
      </div>
    );
  }
}

export default Layout;