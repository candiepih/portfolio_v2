import styles from '../../styles/fixed_sections/social_links.module.scss';
import React from 'react';
import SocialLinks from '../sub_components/SocialLinks';
import NavBar from './NavBar';

const FixedSections = ({ scrollbar }) => {
  return (
    <React.Fragment>
      <div className={styles.socialLinks}>
        <SocialLinks flexDirection="column" />
      </div>
      <NavBar scrollbar={scrollbar} />
    </React.Fragment>
  );
}

export default FixedSections;
