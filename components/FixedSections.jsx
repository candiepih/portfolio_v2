import styles from '../styles/landing_page_section/LandingPage.module.scss';
import React from 'react';

const FixedSections = () => {
  return (
    <React.Fragment>
      <nav className={styles.navigation}>
        <div className={styles.defaultContainer}>
          <div className={styles.logo}>
            <a href="#"><h1>as</h1></a>
          </div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.mobileContainer}>
          <div className={styles.hamburger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.drawer}>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className={styles.mobileNavsocialLinks}>
              <a href="#"><img src='/icons/facebook.svg' /></a>
              <a href="#"><img src='/icons/whatsapp.svg' /></a>
              <a href="#"><img src='/icons/linkedin.svg' /></a>
              <a href="#"><img src='/icons/github.svg' /></a>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.socialLinks}>
        <a href="#"><img src='/icons/facebook.svg' /></a>
        <a href="#"><img src='/icons/whatsapp.svg' /></a>
        <a href="#"><img src='/icons/linkedin.svg' /></a>
        <a href="#"><img src='/icons/github.svg' /></a>
      </div>
    </React.Fragment>
  );
}

export default FixedSections;
