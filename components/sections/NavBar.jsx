import styles from "../../styles/fixed_sections/navbar.module.scss";
import Logo from "../sub_components/Logo";
import SocialLinks from "../sub_components/SocialLinks";
import { useEffect, useRef } from "react";
import getActiveScrollbar from "../getScrollbarInstance";
import Link from "next/link";

const NavBar = () => {
  const aboutLink = useRef(null);
  const projectsLink = useRef(null);
  const contactLink = useRef(null);

  useEffect(async () => {
    const scrollbar = await getActiveScrollbar();
    aboutLink.current.addEventListener('click', () => {
      scrollbar.scrollIntoView(document.querySelector("#about"));
    });
    projectsLink.current.addEventListener('click', () => {
      scrollbar.scrollIntoView(document.querySelector("#projects"));
    });
    contactLink.current.addEventListener('click', () => {
      scrollbar.scrollIntoView(document.querySelector("#contact"));
    });
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <div className={styles.default}>
          <ul>
            <li ref={aboutLink}><a href="#about">ABOUT</a></li>
            <li ref={projectsLink}><a href="#projects">PROJECTS</a></li>
            <li ref={contactLink}><a href="#contact">CONTACT</a></li>
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
