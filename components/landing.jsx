import styles from '../styles/landing_page_section/LandingPage.module.scss';
import { useRef, useEffect } from 'react';

const LandingPage = () => {
  const iframeRef = useRef(null);

  return (
    <div className={styles.landingPage}>
      <iframe ref={iframeRef} src='https://my.spline.design/portfolio-22f1372f4cd33b22cb6236895106dd2c/' frameBorder='0' width='100%' height='100%' />
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
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Howdy, I am</p>
          <h1>
            <span>Alex</span><br />
            <span>Steve</span>
          </h1>
        </div>
        <div className={styles.right}>
          <h1>
            <span>Fullstack</span><br />
            <span><span className={styles.spanInner}>Web</span> Developer</span>
          </h1>
          <a href='#'><p><span>About me</span></p></a>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href="#"><img src='/icons/facebook.svg' /></a>
        <a href="#"><img src='/icons/whatsapp.svg' /></a>
        <a href="#"><img src='/icons/linkedin.svg' /></a>
        <a href="#"><img src='/icons/github.svg' /></a>
      </div>
    </div>
  );
}

export default LandingPage;
