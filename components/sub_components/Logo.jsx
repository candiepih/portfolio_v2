import styles from "../../styles/sub_sections/Logo.module.scss";

const Logo = ({ color1, color2 }) => {
  return (
    <div className={styles.logo}>
      <h1><span style={{ color: color1 }}>AL</span><span style={{ color: color2 }}>EX</span></h1>
    </div>
  );
}

export default Logo;
