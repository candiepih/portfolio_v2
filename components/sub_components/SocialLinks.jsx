import styles from '../../styles/sub_sections/SocialLinks.module.scss';

const SocialLinks = ({ flexDirection }) => {
  return (
    <div className={styles.socialLinks} style={{ flexDirection }}>
      <div className={styles.linkContainers}>
        <a href="https://twitter.com/MutheealAm" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="twitter" />
        </a>
      </div>
      <div className={styles.linkContainers}>
        <a href="https://wa.me/+254799224283" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
      <div className={styles.linkContainers}>
        <a href="https://www.linkedin.com/in/alex-njagi/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div className={styles.linkContainers}>
        <a href="https://github.com/candiepih" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="github" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
