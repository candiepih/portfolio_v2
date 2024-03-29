import Link from 'next/link';
import React from 'react';
import Scroll from '../../components/Scroll';
import TopBar from './TopBar';
import styles from "../../styles/project_page/ProjectPage.module.scss";
import Image from 'next/image';

const Project = () => {
  return (
    <React.Fragment>
      <TopBar />
      <Scroll>
        <div className={styles.projectsLanding}>
          <div className={styles.headerDetails}>
            <div className={styles.title}>
              <p className={styles.shortP}>Projects / 01.</p>
              <h1>Password Safe</h1>
              <p className={styles.detailedP}>
                A web extension for storing and retrieve users passwords. For instance it will suggest a strong password you can use when signing up on webpages, and store it so that it can be used to login to the website when you visit it again.
              </p>
              <p className={styles.detailedP}>The password is safely stored and retrieved automatically when signing in on a webpage, so you don't have to remember it.</p>
            </div>
            <div className={styles.moreDetails}>
              <div className={styles.links}>
                <a href='https://github.com/candiepih/PasswordSafe' target={"_blank"}>Github <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a>
                {/* <a href='#'>Live site <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a> */}
              </div>
            </div>
          </div>
          <div className={styles.detailsRecap}>
            <div className={styles.detailContainer}>
              <p>Timeline</p>
              <p>Jan 2022 - Feb 2022</p>
            </div>
            <div className={styles.detailContainer}>
              <p>Role</p>
              <p>Full-stack developer</p>
            </div>
            <div className={styles.detailContainer}>
              <p>Team</p>
              <p>Personal Project</p>
            </div>
          </div>
        </div>

        <div className={styles.projectDetailsContainer}>
          <div className={styles.sectionDetailsContainer}>

            <div className={styles.projectDetails}>
              <div className={styles.projectDetailsTitle}>
                <p>My <br />Contribution</p>
              </div>
              <div className={styles.details}>
                <p>
                  I was responsible for developing the web extension and foreseen it's developement cycle
                  from project start to end. Work involved creating web extension interface for the user interaction,
                  managing how data was been handled and handling user interactions from the user.<br /><br />
                  I had a great experience working on it and at the same time it was a learning opportunity.
                </p>
              </div>
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.projectDetailsTitle}>
                <p>Tech Stack</p>
              </div>
              <div className={styles.details}>
                <p>Typescript | Javascript | HTML | CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.fullImage}>
            <Image src='/images/passwordSafeLogo.png' layout='fill' />
          </div>
          <div className={styles.dividedImages}>
            <div className={styles.image}>
              <Image src='/images/passwordsafepasswords.png' layout='fill' />
            </div>
            <div className={styles.image}>
              <Image src='/images/passwordsafegenpassword.png' layout='fill' />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.container}>
            <Link href='/projects/cormorant'>
              <div className={styles.nextProject}>
                <h1>Next</h1>
                <p><span>02. </span>Cormorant</p>
              </div>
            </Link>
            <div className={styles.footerDetails}>
              <p>Handcrafted by Me with passion.<br />
                Alex Steve. Copyright © all rights reserved 2020</p>
            </div>
          </div>
        </div>
      </Scroll>
    </React.Fragment>
  );
}

export default Project;
