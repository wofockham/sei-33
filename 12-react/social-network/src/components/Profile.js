import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { name, age, motto, pic } = this.props; // destructuring
    return (
      <div className="profile">
        <h2>{ name }</h2>
        <h3>{ age }</h3>
        <p>{ motto }</p>
        <img src={ pic } alt={ `A collection of pixels of ${ name }` } />
      </div>
    );
  }
}

export default Profile;
