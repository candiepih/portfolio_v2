import styles from "../../styles/fixed_sections/navbar.module.scss";
import Logo from "../sub_components/Logo";

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
        </div>
      </div>
    </div>
  );
}

export default NavBar;
