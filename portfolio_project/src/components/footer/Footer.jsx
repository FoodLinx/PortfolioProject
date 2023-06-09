import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.social}></div>
      <div className={styles.contact}></div>
    </div>
  );
};

export default Footer;
