import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.heading}>Skills</h2>
            <ul>
                <li><span>React</span></li>
                <li><span>JavaScript</span></li>
                <li><span>HTML/CSS</span></li>
                <li><span>Tailwind CSS</span></li>
                <li><span>Git/GitHub</span></li>
            </ul>
        </section>
    );
};

export default Skills;
