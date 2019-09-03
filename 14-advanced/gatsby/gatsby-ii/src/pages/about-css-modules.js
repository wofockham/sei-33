import React from 'react';
import styles from "./about-css-modules.module.css";
import Container from '../components/container';

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="The user" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);


export default () => (
  <Container>
    <h1>About CSS modules</h1>
    <p>CSS modules are weird but people will insist you use them</p>
    <User
      username="Groucho"
      avatar="http://www.fillmurray.com/96/96"
      excerpt="No dogs no master" />
      <User
        username="Harpo"
        avatar="http://www.fillmurray.com/98/98"
        excerpt="" />
  </Container>
);
