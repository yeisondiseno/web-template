'use client';
import { useState } from 'react';
// Components
import { Button, Input, InputGroup } from '@/components';
// Styles
import styles from './page.module.scss';

export default function Home() {
  const [input, setInput] = useState('');

  return (
    <main className={styles.main} style={{ padding: '1rem' }}>
      <h1>First configuration</h1>
      <h2>{input}</h2>
      <Button>Click</Button>
      <br />
      <br />
      <Input placeholder='Text' onChange={(e) => setInput(e.target.value)} />
      <br />
      <br />
      <InputGroup label='Text me' placeholder='Text' />
    </main>
  );
}
