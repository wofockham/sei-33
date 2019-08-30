import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const _randomUser = () => {
    const students = ['ajtauber', 'iwishjames', 'freddiebutcher', 'gopipatell', 'Herdmangct', 'harrisonmalouf', 'lucyod10', 'lpinzari', 'meowsoso', 'nilanarocha', 'pllenggg', 'Ratsamee', 'victorzw895', 'pkijowska'];

    const randomIndex = Math.floor( Math.random() * students.length );
    const username = students[ randomIndex ];

    props.history.push(`/details/${ username }`);
  };

  return (
    <div className="home">
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _randomUser }>Random user</button>
    </div>
  );
}
