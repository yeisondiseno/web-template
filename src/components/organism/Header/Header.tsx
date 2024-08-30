import React from 'react';
import Link from 'next/link';
// Components
import { LogoIcon, HeaderNav } from '@components/index';
// Styles
import './Header.scss';

const Header = () => (
  <header className='o-header'>
    <div className='o-header-container max-block'>
      <Link href='./' aria-label='Logo Alma'>
        <LogoIcon width={241} aria-hidden='true' />
      </Link>

      <div className='o-header-nav'>
        <HeaderNav />
      </div>
    </div>
  </header>
);

export default Header;
