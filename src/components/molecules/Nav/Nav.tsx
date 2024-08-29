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

type NavProps = {
  open: boolean;
};

const Nav = ({ open }: NavProps) => {
  // Route
  const pathname = usePathname();

  const validRoute = (href: string) => {
    if (href === pathname) return 'active';
    return '';
  };

  return (
    <menu className={`m-nav ${open ? 'open' : ''}`}>
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
