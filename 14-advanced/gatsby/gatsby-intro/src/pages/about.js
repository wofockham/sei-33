import React from "react";
import Header from '../components/header';

export default () => {
  return (
    <div style={{color: 'teal'}}>
      <Header headerText="About Gatsby" />
      <Header headerText="Some other prop" />
      <p>lorem ipsum imagine there were more fake latin</p>
    </div>
  )
};
