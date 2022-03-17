import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import styles from '../styles/components/scrollbar.module.scss';

const Scroll = ({ children }) => {
  const options = {
    damping: 0.08,
    thumbMinSize: 40,
  }

  const scrollbarContainerRef = useRef(null);

  useEffect(() => {
    Scrollbar.init(scrollbarContainerRef.current, options);
    return () => {
      if (Scrollbar) Scrollbar.destroy(scrollbarContainerRef.current);
    };
  });

  return (
    <div id={styles.scrollbarContainer} ref={scrollbarContainerRef}>
      {children}
    </div>
  );
}

export default Scroll;
