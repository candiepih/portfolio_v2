import styles from '../../styles/contact_section/Contact.module.scss';
import Headings from '../sub_components/Headings';

const Contact = () => {
  return (
    <div className={styles.contact}>
      {/* heading here */}
      <div className={styles.leftSection}>
        <p className={styles.boldTitle}>
          Have an <span>idea</span> you<br />
          would like to<br />
          talk about?
        </p>
        <p>I'm excited to learn about it, please don't hesitate to fill the form and i'll get back to you as soon as possible. You can also leave a Hi! and we can communicate more.</p>
      </div>
      <div className={styles.rightSection}>
        <form method='post'>
          <div className={styles.inputGroup}>
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' />
          </div>
          <textarea name='message' placeholder='Message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
