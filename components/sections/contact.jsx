import styles from '../../styles/contact_section/Contact.module.scss';
import Headings from '../sub_components/Headings';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.headingContainer}>
        <Headings main="Contact" sub="me" />
      </div>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <p className={styles.boldTitle}>
            Have an <span>idea</span> you
            would like to talk about?
          </p>
          <p className={styles.details}>I'm excited to learn about it, please don't hesitate to fill the form and i'll get back to you as soon as possible. You can also leave a Hi! and we can communicate more.</p>
        </div>
        <div className={styles.rightSection}>
          <form method='post'>
            <div className={styles.inputGroup}>
              <input type='text' name='name' placeholder='Name' />
              <input type='email' name='email' placeholder='Email' />
            </div>
            <div>
              <textarea name='message' placeholder='Message' />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
