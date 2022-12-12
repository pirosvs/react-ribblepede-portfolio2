import React from 'react';
import styles from '../styles/Footer.css';

function Footer() {
    return (
      <header style={styles} className="footer">
        <p>
            <a href="https://github.com/pirosvs" style={styles}>Github</a>
            <a href="https://www.linkedin.com/in/damien-armstrong-412319138/" style={styles}>LinkedIn</a>
            <a href="https://twitter.com/" style={styles}>Twitter Homepage</a>
        </p>
      </header>
    );
  }
  
  export default Footer;