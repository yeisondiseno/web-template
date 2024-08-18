import React from 'react';
// Next
import Link from 'next/link';
// Styles
import './Nav.scss';

const navList = [
  {
    label: 'ALMA Fitness',
    href: './',
  },
  {
    label: 'ALMA Online',
    href: './online',
  },
  {
    label: 'Nutrición ',
    href: './nutricion',
  },
  {
    label: 'Contacto',
    href: './contacto',
  },
];

const Nav = () => {
  return (
    <menu className='m-nav'>
      <nav>
        <ul className='m-nav-ul'>
          {navList.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                {label}
                <span className={`m-nav-ul-mark `} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Nav;
