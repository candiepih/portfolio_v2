import styles from "../../styles/fixed_sections/navbar.module.scss";
import Logo from "../sub_components/Logo";
import SocialLinks from "../sub_components/SocialLinks";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Logo />
      </div>
      <div className={styles.navbarLinks}>
        <div className={styles.default}>
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className={styles.mobile}>
          <div className={styles.hamburger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.drawer}>
            <ul>
              <li><a href="#"><span>01/</span>About</a></li>
              <li><a href="#"><span>02/</span>Projects</a></li>
              <li><a href="#"><span>03/</span>Contact</a></li>
            </ul>
            <div className={styles.mobileNavsocialLinks}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
