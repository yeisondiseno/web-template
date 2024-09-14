import React, { ReactNode } from 'react';
import Link from 'next/link';
// Components
import { Header, Footer } from '@components/index';
// Stiles
import './template.scss';

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
