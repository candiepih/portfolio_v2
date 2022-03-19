import styles from '../../styles/minorSections/Headings.module.scss';

const Headings = ({ name }) => {
  return (
    <div className={styles.headings}>
      <h1>{name}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default Headings;
