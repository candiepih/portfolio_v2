import styles from "../../styles/fixed_sections/navbar.module.scss";
import Logo from "../sub_components/Logo";
import SocialLinks from "../sub_components/SocialLinks";
import { useEffect } from "react";
import getActiveScrollbar from "../getScrollbarInstance";
import Link from "next/link";

const NavBar = () => {
  useEffect(async () => {
    const scrollbar = await getActiveScrollbar();
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const aboutLinks = document.querySelectorAll(".aboutLink");
    const projectsLinks = document.querySelectorAll(".projectsLink");
    const contactLinks = document.querySelectorAll(".contactLink");

    const closeOrOpenDrawer = () => {
      const drawer = document.querySelector(`.${styles.drawer}`);
      if (drawer.style.display === 'flex') {
        console.log('display to none');
        drawer.style.display = 'None';
      } else {
        console.log('display to block');
        drawer.style.display = 'flex';
      }
    }


    for (const link of aboutLinks) {
      link.addEventListener('click', () => {
        closeOrOpenDrawer();
        scrollbar.scrollIntoView(document.querySelector("#about"));
      });
    }

    for (const link of projectsLinks) {
      link.addEventListener('click', () => {
        closeOrOpenDrawer();
        scrollbar.scrollIntoView(document.querySelector("#projects"));
      });
    }

    for (const link of contactLinks) {
      link.addEventListener('click', () => {
        closeOrOpenDrawer();
        scrollbar.scrollIntoView(document.querySelector("#contact"));
      });
    }

    hamburger.addEventListener('click', () => {
      closeOrOpenDrawer();
    })
  });

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <div className={styles.navbarLogo}>
          <Logo />
        </div>
      </Link>
      <div className={styles.navbarLinks}>
        <div className={styles.default}>
          <ul>
            <li className="aboutLink"><a href="#about">ABOUT</a></li>
            <li className="projectsLink"><a href="#projects">PROJECTS</a></li>
            <li className="contactLink"><a href="#contact">CONTACT</a></li>
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
              <li className="aboutLink"><a href="#"><span>01/</span>About</a></li>
              <li className="projectsLink"><a href="#"><span>02/</span>Projects</a></li>
              <li className="contactLink"><a href="#"><span>03/</span>Contact</a></li>
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
