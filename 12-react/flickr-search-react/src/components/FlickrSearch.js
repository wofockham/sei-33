import React, { Component } from 'react';

class FlickrSearch extends Component {
  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm />
        <Gallery />
      </div>
    );
  }
}

// <SearchForm /> -- class component
class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleInput(event) {
    this.setState({query: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('about to search for', this.state.query);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

// <Gallery />: Functional component -- function expression component
const Gallery = (props) => {
  return (
    <h2>Gallery coming soon</h2>
  );
}


export default FlickrSearch;
