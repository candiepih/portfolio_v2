import SocialLinksStyles from '../../styles/fixed_sections/social_links.module.scss';
import React from 'react';
import SocialLinks from '../sub_components/SocialLinks';
import NavBar from './NavBar';

const FixedSections = () => {
  return (
    <React.Fragment>
      <div className={SocialLinksStyles.socialLinks}>
        <SocialLinks flexDirection="column" />
      </div>
      <NavBar />
    </React.Fragment>
  );
}

export default FixedSections;
