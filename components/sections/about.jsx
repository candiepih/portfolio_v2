import styles from '../../styles/about_section/About.module.scss';
import Headings from "../sub_components/Headings";

const About = () => {
  return (
    <div className={styles.aboutSection} id='about'>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <Headings main="About" sub="Myself" />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.details}>
            <p>I develop websites, web applications and provide great web experiences. I use my experience and skills to be more than just a coder and connect business requirements with modern technology.</p>
            <p>I Graduated with a Diploma in Information Technology in 2019 and started working as a freelancer in mid 2020. I enrolled on a Software development program
              in early 2021 till 2022 to improve my skills as a full stack web developer. </p>
            <p>I've never stopped enganging my passion to help others and solve business problems.
              I have a great interest in building web applications. When i am not building websites applications
              i'm usually creating video game prototypes or playing them, listening to music, improving my previous projects and of course more coding :-).</p>
          </div>
          <div className={styles.buttons}>
            <a href="https://profile.codersrank.io/user/candiepih/" target={"_blank"}><button className={styles.skillsButton}>SKILL DETAILS</button></a>
            <a href="#"><button className={styles.downloadButton}>DOWNLOAD CV</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
