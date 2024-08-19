import React from 'react';
import Link from 'next/link';
// Components
import { LogoIcon, HeaderNav } from '@components/index';
// Styles
import './Header.scss';

const Header = () => (
  <header className='o-header'>
    <div className='o-header-container max-block'>
      <Link href='./'>
        <LogoIcon width={241} />
      </Link>

      <div className='o-header-nav'>
        <HeaderNav />
      </div>
    </div>
  </header>
);

export default Header;
