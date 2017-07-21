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

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

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
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);

    this.changeTitle = this.changeTitle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopStories(result){
    this.setState({result});
  }

  fetchSearchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e);
  }

  componentDidMount(){
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
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
    const { searchTerm, list, title, result } = this.state;
    if (!result) {return null;}
    return(
      <div className="page">
        <Header />
        <Body changeTitle={this.changeTitle} title={title}/>
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            Search
          />
          <Table
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
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
      <div className="table">
        {list.filter(isSearched(pattern)).map((item) =>

          <div key={ item.objectID } className="table-row">
            <span>
              <a href={ item.url }>{ item.title }</a> &nbsp;
            </span>
            <span>{ item.author } </span>
            <span>{ item.num_comments } </span>
            <span>{ item.points } </span>
            <span>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>

        )}
      </div>
    )
  }
}

class Button extends Component {
  render() {
    const { onClick,
      className = '',
      children } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }
}



export default Layout;