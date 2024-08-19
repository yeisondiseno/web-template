import React from 'react';
import Link from 'next/link';
// Components
import { Youtube, Facebook, Instagram } from '@/components/Icons';
// Styles
import './SocialList.scss';

const socialList = [
  {
    href: './',
    icon: <Youtube />,
  },
  {
    href: './',
    icon: <Facebook />,
  },
  {
    href: './',
    icon: <Instagram />,
  },
];

const SocialList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`m-social-list ${className}`}>
      {socialList.map(({ href, icon }) => (
        <Link key={href} href={href}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
