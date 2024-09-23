import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p>I am a web developer proficient in React, Tailwind, and other modern technologies...</p>
    </section>
  );
};

export default About;
