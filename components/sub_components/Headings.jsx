import styles from '../../styles/sub_sections/Headings.module.scss';

const Headings = ({ main, sub, leftAlign, color }) => {
  return (
    <div className={styles.headings} style={{ color }}>
      {leftAlign && <p style={{ textAlign: "left" }}>{sub}</p>}
      <h1>{main}</h1>
      {!leftAlign && <p>{sub}</p>}
    </div>
  );
}

export default Headings;
