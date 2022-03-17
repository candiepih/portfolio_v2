import Image from "next/image";
import styles from '../styles/about_section/About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.innerContainer}>
        <div className={styles.image}>
          <img src="/images/alex-image.png" alt="Alex Steve" />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.headers}>
            <h1><span>About</span><span>About</span></h1>
          </div>
          <p>
            I specialize mostly in building web and mobile applications and great experiences to the
            business needs of my clients. I have a great interest in blockchain, machine learning and
            AI.<br /><br />
            I am looking forward to working on a project that involves the fields soon.
            I like video games alot, it's sort of like an obsession :-), and hopefully soon i am looking forward to indulge myself in a project of the same.
            If you are interested we can collaborate on the project.</p>
          <div className={styles.buttons}>
            <a href="#">
              <button>More details</button>
            </a>
            <a href="#">
              <button>View resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
