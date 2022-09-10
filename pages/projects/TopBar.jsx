import Logo from '../../components/sub_components/Logo';
import styles from "../../styles/project_page/ProjectPage.module.scss";

const TopBar = () => {
  const previousPage = () => {
    window.history.back();
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.container}>
        <Logo color2={"rgba(255, 255, 255, 0.5)"} />
        <div className={styles.backButton} onClick={previousPage}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="50" height="50"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" /></svg>
          <p>BACK</p>
        </div>
      </div>
    </div>);
}

export default TopBar;
