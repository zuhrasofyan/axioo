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

//function isSearched in ES5
// function isSearched(searchTerm) {
//   return function(item) {
//     // The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
//     return !searchTerm ||
//         item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

//function isSearched in ES6
const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

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
    //function isNotId in ES5
    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    //function isNotId in ES6
    const isNotId = item => item.objectID !== id;

    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;
    return(
      <div>
        <Header />
        <Body changeTitle={this.changeTitle} title={this.state.title}/>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          Search
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <div>
        <span>Search Box</span>
        <form>
          {children}
          <input
            type="text"
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map((item) =>

          <div key={ item.objectID }>
            <span>
              <a href={ item.url }>{ item.title }</a> &nbsp;
            </span>
            <span>{ item.author } </span>
            <span>{ item.num_comments } </span>
            <span>{ item.points } </span>
            <span>
              <button onClick={() => onDismiss(item.objectID)}
                      type="button"
              >
                Dismiss
              </button>
            </span>
          </div>

        )}
      </div>
    )
  }
}



export default Layout;