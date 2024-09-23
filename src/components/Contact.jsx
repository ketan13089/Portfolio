import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact Me</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
