import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';
// const SERVER_URL = '...';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this); // Why? BECAUSE the function needs to use this.anything.

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({secrets: results.data});
        setTimeout( fetchSecrets, 4000 ); // recursion
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, { content: content }).then((result) => {
      console.log( result );
    });
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <Gallery secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  _handleChange(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (secret) => <p key={ secret.id }>{ secret.content }</p> ) }
      </div>
    );
  }
}

export default Secrets;
