import styles from '../../styles/landing_page_section/LandingPage.module.scss';
import getActiveScrollbar from "../getScrollbarInstance";
import { useEffect, useRef } from 'react';

const LandingPage = () => {
  const aboutButton = useRef(null);

  useEffect(async () => {
    const scrollbar = await getActiveScrollbar();
    aboutButton.current.addEventListener('click', () => {
      scrollbar.scrollIntoView(document.querySelector('#about'));
    });
  });

  return (
    <div className={styles.landingPage}>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <img src='/images/alex-image.png' alt='landing_page_image' />
        </div>
      </div>
      <div className={styles.rightSection}>
        <p className={styles.greeting}>Hi, I am,</p>
        <div className={styles.name}>
          <h1><span>Alex</span> Njagi</h1>
        </div>
        <h1 className={styles.title}>A <span>full stack</span><br /><span>Web developer</span></h1>

        <button ref={aboutButton}>
          <p>About Me</p>
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm16,0a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z" /></svg>
        </button>
      </div>
      <div className={styles.scrollIndicator}><p>Scroll</p></div>
    </div>
  );
}

export default LandingPage;
