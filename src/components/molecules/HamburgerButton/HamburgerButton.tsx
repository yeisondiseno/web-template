import React, { ComponentPropsWithoutRef } from 'react';
// Style
import './HamburgerButton.scss';

type HamburgerButtonType = ComponentPropsWithoutRef<'button'> & {
  open: boolean;
};

const HamburgerButton = ({ open, ...props }: HamburgerButtonType) => {
  return (
    <button
      className={`m-hamburger-button ${open ? 'open' : ''}`}
      aria-label='Abrir menú'
      {...props}
    >
      <span />
      <span className='m-hamburger-button-1' />
      <span className='m-hamburger-button-2' />
    </button>
  );
};

export default HamburgerButton;
