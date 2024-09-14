'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// Components
import {
  HamburgerButton,
  Nav,
  Slide,
  LogoIcon,
  SocialList,
} from '@components/index';
// Styles
import './HeaderNav.scss';


const HeaderNav = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav open={isOpen} />
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} open={isOpen} />
      <Slide
        open={isOpen}
        handledOpen={() => setIsOpen(false)}
        className='o-header-nav-desktop'
      >
        <LogoIcon width={240} className='o-header-nav-logo' />
          <p>Hello</p>
        <SocialList />
      </Slide>
    </>
  );
};

export default HeaderNav;
