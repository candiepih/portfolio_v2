import styles from "../../styles/sub_sections/modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.mailResponseModal}>
      <div className={styles.mailResponseModalContainer}>
        <p className={styles.message}>Your message has been sent succesfully. I'll get back to you soon. Thank you.</p>
        <p className={styles.closeModal}>close</p>
      </div>
    </div>);
}

export default Modal;
