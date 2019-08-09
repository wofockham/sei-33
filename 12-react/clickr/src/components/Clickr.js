import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
    this.incrementClicks = this.incrementClicks.bind( this );
  }

  incrementClicks() {
    // this.state.clicks += 1; // Mutation: won't work
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    return (
      <button onClick={ this.incrementClicks }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
