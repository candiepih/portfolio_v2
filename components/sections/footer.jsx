import styles from "../../styles/footer/Footer.module.scss";
import SocialLinks from "../sub_components/SocialLinks";
import Logo from "../sub_components/Logo"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionContainer}>
        <div className={styles.content}>
          <Logo />
          <p className={styles.socialLinksInfo}>Find me on</p>
          <div className={styles.socialLinks}>
            <SocialLinks />
          </div>
          <p>Handcrafted by Me with passion.<br />
            Alex Steve. Copyright © all rights reserved 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
