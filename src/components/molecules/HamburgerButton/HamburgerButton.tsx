import React, { ComponentPropsWithoutRef } from 'react';
// Style
import './HamburgerButton.scss';

type HamburgerButtonType = ComponentPropsWithoutRef<'button'>;

const HamburgerButton = (props: HamburgerButtonType) => {
  return (
    <button className='m-hamburger-button' {...props}>
      <span />
      <span className='m-hamburger-button-1' />
      <span className='m-hamburger-button-2' />
    </button>
  );
};

export default HamburgerButton;
