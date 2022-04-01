import styles from '../../styles/projects_section/Projects.module.scss';
import Headings from '../sub_components/Headings';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <Headings main="Projects" sub="Recent" color="#FFAC11" leftAlign={true} />
          <div className={styles.projectDetails}>
            <p>Some of his recent works and projects</p>
            <p>Work is what keeps me moving, learning and gaining experience. I have shortlisted some of the works that i have indulged myself in lately</p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Link href="/projects/password-safe">
            <div className={styles.card}>
              <div className={styles.number}>
                <p>01.</p>
              </div>
              <div className={styles.details}>
                <p className={styles.name}>Password Safe</p>
                <p className={styles.type}>Web extension</p>
                <p className={styles.date}>JUL 2021 - JUL 2021</p>
              </div>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" /></svg>
              </div>
            </div>
          </Link>

          <div className={styles.card}>
            <div className={styles.number}>
              <p>02.</p>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>Password Safe</p>
              <p className={styles.type}>Web extension</p>
              <p className={styles.date}>JUL 2021 - JUL 2021</p>
            </div>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" /></svg>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.number}>
              <p>03.</p>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>Password Safe</p>
              <p className={styles.type}>Web extension</p>
              <p className={styles.date}>JUL 2021 - JUL 2021</p>
            </div>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" /></svg>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.number}>
              <p>04.</p>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>Password Safe</p>
              <p className={styles.type}>Web extension</p>
              <p className={styles.date}>JUL 2021 - JUL 2021</p>
            </div>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
