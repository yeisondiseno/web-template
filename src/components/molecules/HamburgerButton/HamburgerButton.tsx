import React from 'react';
// Style
import './HamburgerButton.scss';

const HamburgerButton = () => {
  return (
    <button className='m-hamburger-button'>
      <span />
      <span className='m-hamburger-button-1' />
      <span className='m-hamburger-button-2' />
    </button>
  );
};

export default HamburgerButton;
