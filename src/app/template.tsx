import React, { ReactNode } from 'react';
// Components
import { Header, Footer } from '@components/index';

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main className='home'>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
