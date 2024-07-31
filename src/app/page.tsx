import { useState } from 'react';
// Components
import { Button, Input, InputGroup, Header, Footer } from '@/components';
// Styles
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <section className='max-block'>
        <h1>
          ¡ELEVAREMOS TODO TU
          <br />
          <span>POTENCIAL!</span>
        </h1>
        <h3>CONTIANZA, SEGURIDAD Y SALUD</h3>
      </section>

      <Footer />
    </main>
  );
}
