import Image from "next/image";
import styles from '../../styles/about_section/About.module.scss';
import Headings from "../sub_components/Headings";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <Headings main="About" sub="Myself" />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.details}>
            <p>I specialize mostly in building web and mobile applications and great experiences to the business needs of my clients. I have a great interest in blockchain, machine learning and AI. </p>
            <p>I am looking forward to working on a project that involves the fields soon. I like video games alot, it's sort of like an obsession :-), and hopefully soon i am looking forward to indulge myself in a project of the same. If you are interested we can collaborate on the project.</p>
          </div>
          <div className={styles.buttons}>
            <a href="#"><button className={styles.skillsButton}>SKILL DETAILS</button></a>
            <a href="#"><button className={styles.downloadButton}>DOWNLOAD CV</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
