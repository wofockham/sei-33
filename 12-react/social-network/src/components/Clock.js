import React, { Component } from 'react';

// TODO:
// Create in another file a <Time /> component that shows how many seconds a user has been on this page:
// You loaded this page 19 seconds ago.

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: (new Date()).toString() };

    setInterval(() => {
      this.setState({time: (new Date()).toString() });
    }, 1000);
  }

  render() {
    return (
      <h1>{ this.state.time }</h1>
    );
  }
}

export default Clock;
