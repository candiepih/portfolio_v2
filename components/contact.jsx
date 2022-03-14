import styles from '../styles/contact_section/Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h1>
            <span>Contact</span>
            <span>Contact Me</span>
          </h1>
        </div>

        <div className={styles.formInfo}>
          <div className={styles.left}>
            <div className={styles.contactCard}>
              <p>Phone <span><img src="/icons/phone.svg" alt="phone" /></span></p>
              <p>+(254)799-224-283</p>
            </div>

            <div className={styles.contactCard}>
              <p>Email <span><img src="/icons/mail.svg" alt="mail" /></span></p>
              <p>mutheeal.am@gmail.com</p>
            </div>

            <div className={styles.contactCard}>
              <p>Location <span><img src="/icons/location.svg" alt="location" /></span></p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className={styles.center}></div>
          <div className={styles.right}>
            <p>
              I'm excited to learn about it, please don't hesitate to
              fill the form and i'll get back to you. You can also leave a
              Hi! and we can communicate more. Don't be a stranger, stranger.
            </p>
            <form method='POST'>
              <input type={'text'} placeholder="Name" className={styles.input} />
              <input type={'email'} placeholder="Email" className={styles.input} />
              <textarea placeholder='Message' />
              <input type="button" value={"Send"} className={styles.button} />
            </form>
          </div>
        </div>
      </div>
      <footer>
        <span>Handcrafted by Me with passion.</span><br />
        Alex Steve. Copyright © all rights reserved 2020
      </footer>
    </div>
  );
}

export default Contact;
