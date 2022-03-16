import styles from '../styles/projects_section/Projects.module.scss';
import { useEffect, useRef } from 'react';
import Image from "next/image";

const Projects = () => {
  const webDevRef = useRef(null);
  const gameDevRef = useRef(null);

  useEffect(() => {
    const webDevParent = document.querySelector('#webProjects');
    const gameDevParent = document.querySelector('#gameProjects');
    webDevRef.current.addEventListener('click', () => {
      // toggle for web dev
      if (webDevParent.classList.contains(styles.hide)) {
        webDevParent.classList.remove(styles.hide);
        gameDevParent.classList.add(styles.hide);
      }
    });
    gameDevRef.current.addEventListener('click', () => {
      // toggle for game dev
      if (gameDevParent.classList.contains(styles.hide)) {
        gameDevParent.classList.remove(styles.hide);
        webDevParent.classList.add(styles.hide);
      }
    });
  });


  return (
    <div className={styles.projects}>
      <div className={styles.contentContainer}>
        <div className={styles.headings}>
          <h1>
            <span>Projects</span>
            <span>Projects</span>
          </h1>
        </div>

        <div className={styles.projectContainers}>
          <div className={styles.containers}>
            <div className={styles.left}>
              <div className={`${styles.cardImage} ${styles.active}`} ref={webDevRef}>
                <Image layout='fill' src='/images/webdev.jpg' alt='web development' />
                <div className={styles.textHighlights}>
                  <h3>Web<br />Development</h3>
                  <p>5 Projects</p>
                </div>
              </div>
              <div className={styles.cardImage} ref={gameDevRef}>
                <Image layout='fill' src='/images/gamedev.jpg' alt='game development' />
                <div className={styles.textHighlights}>
                  <h3>Game<br />Development</h3>
                  <p>3 Projects</p>
                </div>
              </div>
            </div>
            <div className={styles.center}>
            </div>
            <div className={styles.right}>
              <div id="webProjects">
                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Password Safe</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>

                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Password Safe</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>

                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Password Safe</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>
              </div>

              <div id='gameProjects' className={styles.hide}>
                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Buggy Man</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>

                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Password Safe</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>

                <div className={styles.card}>
                  <div className={styles.dot}></div>
                  <p className={styles.projectTitle}>Password Safe</p>
                  <div className={styles.details}>
                    <p>Web Extension</p>
                    <p>JUN 2021 - JUL 2021</p>
                    <p>Personal</p>
                  </div>
                  <p className={styles.description}>Work is what keeps me moving, learning and gaining experience.
                    I have shortlisted some of the works that i have indulged myself in lately
                  </p>
                  <p className={styles.skills}>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>SCSS</span>
                  </p>
                  <a href='#'><span>Source code</span></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
