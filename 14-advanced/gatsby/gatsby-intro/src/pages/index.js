import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <div style={{color: 'purple'}}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby</h1>
      <p>What a time to be alive</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Something random" />
    </div>
  );
};
