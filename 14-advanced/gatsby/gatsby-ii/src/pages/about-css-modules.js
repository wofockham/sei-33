import React from 'react';
import styles from "./about-css-modules.module.css";
import Container from '../components/container';

console.log( styles );

export default () => (
  <Container>
    <h1>About CSS modules</h1>
    <p>CSS modules are weird but people will insist you use them</p>
  </Container>
);
