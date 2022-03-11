import styles from '../styles/Projects.module.scss';

const Projects = () => {
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
              <div className={`${styles.cardImage} ${styles.active}`}>
                <img src='/images/webdev.jpg' alt='project1' />
                <h3><span>Web Development</span><br /><span>Projects</span> </h3>
              </div>
              <div className={styles.cardImage}>
                <img src='/images/gamedev.jpg' alt='project1' />
                <h3><span>Game Development</span><br /><span>Projects</span> </h3>
              </div>
            </div>
            <div className={styles.center}>
            </div>
            <div className={styles.right}>
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
                <a href='#'>Source code<hr /></a>
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
                <a href='#'>Source code<hr /></a>
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
                <a href='#'>Source code<hr /></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
