import React, { ReactNode } from 'react';
import Link from 'next/link';
// Components
import { Header, Footer } from '@components/index';
// Stiles
import './template.scss';

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Template;
