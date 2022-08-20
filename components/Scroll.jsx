import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import styles from "../styles/sub_sections/scrollbar.module.scss";

const Scroll = ({ children }) => {
  const options = {
    damping: 0.08,
    thumbMinSize: 30,
    alwaysShowTracks: true,
  }

  const scrollbarContainerRef = useRef(null);

  useEffect(() => {
    Scrollbar.init(scrollbarContainerRef.current, options);
  });


  return (
    <div ref={scrollbarContainerRef} id={styles.scrollbarContainer}>
      {children}
    </div>
  );
}

export default Scroll;
