import React, { ReactNode } from 'react';
import Link from 'next/link';
// Constants
import { whatsAppLink } from '@/constant';
// Components
import { Header, Footer, WhatsApp } from '@components/index';
// Stiles
import './template.scss';

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <Link
        href={whatsAppLink}
        target='_blank'
        className='app-t-whats-app'
        aria-label='Escríbenos por WhatsApp'
      >
        <WhatsApp />
      </Link>
    </main>
  );
};

export default Template;
