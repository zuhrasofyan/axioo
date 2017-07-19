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

function isSearched(searchTerm) {
  return function(item) {
    // The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
    return !searchTerm ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello",
      list: list,
      searchTerm: '',
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return(
      <div>
        <Header />
        <Body changeTitle={this.changeTitle} title={this.state.title}/>

        <span>Search Box</span>
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        
        {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) =>

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