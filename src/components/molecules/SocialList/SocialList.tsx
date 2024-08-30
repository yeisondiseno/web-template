import React from 'react';
import Link from 'next/link';
// Components
import { Youtube, Facebook, Instagram } from '@/components/Icons';
// Styles
import './SocialList.scss';

const socialList = [
  {
    href: 'https://www.youtube.com/channel/UCqfT4jwd-YiAKbGcm-fuUJQ',
    icon: <Youtube />,
    ariaLabel: 'Link Youtube Alma fitness',
  },
  {
    href: 'https://www.facebook.com/almafitnessentrenamiento',
    icon: <Facebook />,
    ariaLabel: 'Link Facebook Alma fitness',
  },
  {
    href: 'https://www.instagram.com/almafitnessentrenamiento/',
    icon: <Instagram />,
    ariaLabel: 'Link Instagram Alma fitness',
  },
];

const SocialList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`m-social-list ${className}`}>
      {socialList.map(({ href, icon, ariaLabel }) => (
        <Link key={href} href={href} target='_blank' aria-label={ariaLabel}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
