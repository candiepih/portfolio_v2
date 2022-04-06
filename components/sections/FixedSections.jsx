import React from 'react';
import NavBar from './NavBar';
import Modal from '../sub_components/Modal';

const FixedSections = ({ scrollbar }) => {
  return (
    <React.Fragment>
      <Modal />
      <NavBar scrollbar={scrollbar} />
    </React.Fragment>
  );
}

export default FixedSections;
