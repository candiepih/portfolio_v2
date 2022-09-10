import React from 'react';
import Scroll from '../../components/Scroll';
import styles from "../../styles/project_page/ProjectPage.module.scss";
import Link from 'next/link';
import TopBar from './TopBar';

const Project = () => {
  return (
    <React.Fragment>
      <TopBar />
      <Scroll>
        <div className={styles.projectsLanding}>
          <div className={styles.headerDetails}>
            <div className={styles.title}>
              <p className={styles.shortP}>Projects / 04.</p>
              <h1>Buggy Man</h1>
              <p className={styles.detailedP}>
                A 2D game that was created during the annual Game Off game jam 2021 event, following the theme ‘Bug’. Game Off is an annual game jam event, where participants spend the month of November creating games based on a secret theme.
              </p>
            </div>
            <div className={styles.links}>
              <a href='https://github.com/candiepih/BuggyMan' target={"_blank"}>Github <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a>
              <a href='https://candiepih.itch.io/buggy-man' target={"_blank"}>Dowload<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a>
            </div>
          </div>
          <div className={styles.detailsRecap}>
            <div className={styles.detailContainer}>
              <p>Timeline</p>
              <p>Nov 2021 - Nov 2021</p>
            </div>
            <div className={styles.detailContainer}>
              <p>Role</p>
              <p>Developer</p>
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
                  I was responsible for creating the whole game from start to finish within the Game Off period of 1 month.<br /><br />
                  I created sprites and textures using photoshop and imported them to the game engine. I used Unity game engine because
                  of it's simplicity, hence easier to learn (mostly because it's the only engine I've been using and quite familiar with), and also for it's robust tools that can
                  facilitate for 2D game development.
                </p>
              </div>
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.projectDetailsTitle}>
                <p>Tech Stack</p>
              </div>
              <div className={styles.details}>
                <p>Unity Game engine | C# | Photoshop</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.fullImage}>
            <img src='/images/buggyman.png' />
          </div>
          <div className={styles.dividedImages}>
            <div className={styles.image}>
              <img src='/images/buggymanlanding.png' />
            </div>
            <div className={styles.image}>
              <img src='/images/buggyman2.png' />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.container}>
            <Link href='/projects/news-scrapper'>
              <div className={styles.nextProject}>
                <h1>Prev</h1>
                <p><span>03. </span>News Scrapper</p>
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
