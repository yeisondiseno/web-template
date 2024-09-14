import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <section className='max-block' style={{ minHeight: '500px', paddingTop: '2rem' }} >

      <p> Hello</p>
    </section>

  );
}
