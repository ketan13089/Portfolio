//About.jsx

import React from 'react';
import styles from './About.module.css';
import Sphere from './Sphere';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.abtContent}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos ipsa magnam ratione repellat aliquid vero, minima eaque, enim provident sed sapiente culpa atque rem velit magni voluptas consequuntur quis ut aliquam? Quas voluptate ducimus odio temporibus minus commodi vel non possimus? Nobis amet, cum deleniti laboriosam accusamus ab et.</p>
        <div className={styles.sph}>
          <Sphere />
        </div>
      </div>
    </section>
  );
};

export default About;
