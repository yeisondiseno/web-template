import React from 'react';
// Components
import { HamburgerButton, Nav } from '@/components/molecules';
// Styles
import './Header.scss';

const Header = () => {
  return (
    <header className='o-header max-block'>
      <div>Logo</div>

      <Nav />

      <HamburgerButton />
    </header>
  );
};

export default Header;
