const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          {/* logo here */}
          <p>Find me on:</p>
          <div className="social-links">
            <a href="#" className={styles.socialLinks}>LinkedIn</a>
            <a href="#" className={styles.socialLinks}>Github</a>
            <a href="#" className={styles.socialLinks}>Twitter</a>
            <a href="#" className={styles.socialLinks}>Whatsapp</a>
          </div>
          <p>Handcrafted by Me with passion.<br />
            Alex Steve. Copyright © all rights reserved 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
