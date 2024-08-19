'use client';
import React from 'react';
// Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Styles
import './Nav.scss';

const navList = [
  {
    label: 'ALMA Fitness',
    href: '/alma',
  },
  {
    label: 'ALMA Online',
    href: '/online',
  },
  {
    label: 'Nutrición ',
    href: '/nutricion',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
];

const Nav = () => {
  // Route
  const pathname = usePathname();

  const validRoute = (href: string) => {
    if (href === pathname) return 'active';
    return '';
  };

  return (
    <menu className='m-nav'>
      <nav>
        <ul className='m-nav-ul'>
          {navList.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={`${validRoute(href)}`}>
                {label}
                <span className={`m-nav-ul-mark`} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Nav;
