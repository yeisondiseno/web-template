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
  },
  {
    href: 'https://www.facebook.com/almafitnessentrenamiento',
    icon: <Facebook />,
  },
  {
    href: 'https://www.instagram.com/almafitnessentrenamiento/',
    icon: <Instagram />,
  },
];

const SocialList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`m-social-list ${className}`}>
      {socialList.map(({ href, icon }) => (
        <Link key={href} href={href} target='_blank'>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
