import React from 'react';
import styles from './Projects.module.css';
import voxFoxImg from '../assets/vox-fox.jpg';
import amzn from '../assets/amazon.jpg';
import netflix from '../assets/netflix.png';


const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
  <h2 className={styles.heading}>My Projects</h2>
  <div className={styles.projectGrid}>
    <div className={styles.projectItem}>
      <img src={voxFoxImg} alt="Project VoxFox" className={styles.projectImage} />
      <div className={styles.projectDetails}>
        <a href='https://voxfox.netlify.app/' target='_blank' className={styles.proHead}>VoxFox</a>
        <p>A description of this amazing project.</p>
      </div>
    </div>
    <div className={styles.projectItem}>
    <img src={amzn} alt="Project demo1" className={styles.projectImage} />
      <div className={styles.projectDetails}>
      <a href='https://github.com/ketan13089/Raahein' target='_blank' className={styles.proHead}>Raahein</a>
      <p>A description of this cool project.</p>
      </div>
    </div>
    <div className={styles.projectItem}>
    <img src={netflix} alt="Project demo" className={styles.projectImage} />
      <div className={styles.projectDetails}>
      <a href='https://github.com/ketan13089/CricCatalyst' target='_blank' className={styles.proHead}>CriCatalyst</a>
      <p>A description of this wonderful project.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;
