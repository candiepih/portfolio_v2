import React from 'react';
import Scroll from '../../components/Scroll';
import Logo from '../../components/sub_components/Logo';
import styles from "../../styles/project_page/ProjectPage.module.scss";
import Link from 'next/link';

const Project = () => {
  return (
    <React.Fragment>
      <div className={styles.navigation}>
        <div className={styles.container}>
          <Logo color2={"rgba(255, 255, 255, 0.5)"} />
          <div className={styles.backButton}>
            <a href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="50" height="50"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" /></svg>
              <p>BACK</p>
            </a>
          </div>
        </div>
      </div>
      <Scroll>
        <div className={styles.projectsLanding}>
          <div className={styles.headerDetails}>
            <div className={styles.title}>
              <p className={styles.shortP}>Projects / 03.</p>
              <h1>News Scrapper</h1>
              <p className={styles.detailedP}>
                A API that scrapes different news websites for data and stores the data to be served later through API endpoints. Data consumed can later be
                displayed on web pages or even mobile applications.
              </p>
              <p className={styles.detailedP}>There are a few endpoints available currently,<br /><br />
                <span style={{ color: '#FFFF00', fontWeight: '700' }}>GET /api/news</span> - Retrieves all news available for different categories<br />
                <span style={{ color: '#FFFF00', fontWeight: '700' }}>GET /api/news/technology</span> - Retrieves technology news<br />
                <span style={{ color: '#FFFF00', fontWeight: '700' }}>GET /api/news/politics</span> - Retrieves politics news<br />
                <span style={{ color: '#FFFF00', fontWeight: '700' }}>GET /api/news/top_buzz</span> - Retrieves top buzz and entertainment news<br />
                <span style={{ color: '#FFFF00', fontWeight: '700' }}>GET /api/news/worldnews</span> - Retrieves world news<br />
              </p>
            </div>
            <div className={styles.links}>
              <a href='https://github.com/candiepih/NewsScrapper' target={"_blank"}>Github <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a>
              {/* <a href='#'>Live site <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px"><path d="M 124 1.0019531 C 123.2325 1.0019531 122.46586 1.2958594 121.88086 1.8808594 L 61.880859 61.880859 C 60.710859 63.050859 60.710859 64.949141 61.880859 66.119141 C 62.460859 66.709141 63.23 67 64 67 C 64.77 67 65.539141 66.709141 66.119141 66.119141 L 126.11914 6.1191406 C 127.28914 4.9491406 127.28914 3.0508594 126.11914 1.8808594 C 125.53414 1.2958594 124.7675 1.0019531 124 1.0019531 z M 34 11 C 21.32 11 11 21.32 11 34 L 11 94 C 11 106.68 21.32 117 34 117 L 94 117 C 106.68 117 117 106.68 117 94 L 117 44 C 117 42.34 115.66 41 114 41 C 112.34 41 111 42.34 111 44 L 111 94 C 111 103.37 103.37 111 94 111 L 34 111 C 24.63 111 17 103.37 17 94 L 17 34 C 17 24.63 24.63 17 34 17 L 84 17 C 85.66 17 87 15.66 87 14 C 87 12.34 85.66 11 84 11 L 34 11 z" /></svg></a> */}
            </div>
          </div>
          <div className={styles.detailsRecap}>
            <div className={styles.detailContainer}>
              <p>Timeline</p>
              <p>Jan 2021 - Feb 2021</p>
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
                  I was responsible for developing the web API and foreseen it's developement life cycle
                  from project start to end.<br /><br />
                  I'll explain how it works,<br />I used scrapy an open-source web-crawling framework written in Python
                  to crawl different websites that I provided. After crawling the websites data is saved to a MongoDB
                  database to retrieve it later. <br /><br />When a GET request is sent to the API the data is retrieved and sent
                  to the client based on the endpoint URL. The API uses django rest framework to serve the data. <br /><br />
                  I found it to be in-efficient to query the database on every request. I used Advanced Python Scheduler(APS)
                  to schedule scraping of data after an hour. So it was a good idea to cache the data until the data changed, and
                  Redis helped with this, hence faster response.
                </p>
              </div>
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.projectDetailsTitle}>
                <p>Tech Stack</p>
              </div>
              <div className={styles.details}>
                <p>Python | Django | Scrapy | MongoDB | Redis | APScheduler</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.fullImage}>
            <img src='/images/full.jpg' />
          </div>
          <div className={styles.dividedImages}>
            <div className={styles.image}>
              <img src='/images/img1.jpg' />
            </div>
            <div className={styles.image}>
              <img src='/images/img2.jpg' />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.container}>
            <Link href='/projects/buggy-man'>
              <div className={styles.nextProject}>
                <h1>Next</h1>
                <p><span>04. </span>Buggy Man</p>
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
