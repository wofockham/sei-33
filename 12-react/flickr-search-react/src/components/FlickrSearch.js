import React, { Component } from 'react';
import jsonp from 'jsonp-es6'; // Usually this is: axios
import _ from 'underscore';

class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q) {
    console.log('Searching Flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json'
    };

    const generateURL = (p) => {
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // Change the q to something else for different sizes -- see docs
      ].join('');
    };

    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then((results) => {
      const images = _(results.photos.photo).map( generateURL );
      this.setState({images: images});
    });
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery images={ this.state.images } />
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
    this.props.onSubmit(this.state.query);
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

// Fat arrow with implicit return;
const Image = (props) => <img src={ props.url } width="150" height="150" alt="A piccy from Flickr" />;

// <Gallery />: Functional component -- function expression component
const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => <Image url={url} key={url} /> ) }
    </div>
  );
}


export default FlickrSearch;
