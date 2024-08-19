import React, { ReactNode } from 'react';
// Components
import { Header, Footer } from '@components/index';

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
