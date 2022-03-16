import styles from '../styles/landing_page_section/LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <iframe src='https://my.spline.design/portfolio-22f1372f4cd33b22cb6236895106dd2c/' frameBorder='0' width='100%' height='100%' />
      <nav className={styles.navigation}>
        <div className={styles.innerContainer}>
          <div className={styles.logo}>
            <a href="#"><h1>as</h1></a>
          </div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Howdy, I am</p>
          <h1>
            <span>Alex</span><br />
            <span>Steve</span>
          </h1>
        </div>
        <div className={styles.right}>
          <h1>
            <span>Fullstack</span><br />
            <span><span className={styles.spanInner}>Web</span> Developer</span>
          </h1>
          <a href='#'><p>About me</p></a>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href="#"><img src='/icons/facebook.svg' /></a>
        <a href="#"><img src='/icons/whatsapp.svg' /></a>
        <a href="#"><img src='/icons/linkedin.svg' /></a>
        <a href="#"><img src='/icons/github.svg' /></a>
      </div>
    </div>
  );
}

export default LandingPage;
