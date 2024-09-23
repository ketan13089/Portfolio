import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectItem}>Project 1</div>
        <div className={styles.projectItem}>Project 2</div>
        <div className={styles.projectItem}>Project 3</div>
      </div>
    </section>
  );
};

export default Projects;
