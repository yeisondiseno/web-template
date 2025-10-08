import React from 'react';
import { Metadata } from 'next';
// Components
import { Button } from '@/components';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <main
      className='max-block'
      style={{ minHeight: '500px', paddingTop: '2rem' }}
    >
      <div>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </div>
    </main>
  );
}
