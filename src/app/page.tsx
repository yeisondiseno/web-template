import React from 'react';
import Image from 'next/image';
// Components
import { Header, Footer } from '@/components';
// Styles
import './page.scss';

const secondSectionCard = [
  {
    label: 'ALMA Metodo',
    img: '/assets/img/home_1.png',
  },
  {
    label: 'ALMA Online',
    img: '/assets/img/home_2.png',
  },
  {
    label: 'Nutrición',
    img: '/assets/img/home_3.png',
  },
];

export default function Home() {
  return (
    <main className='home'>
      <Header />

      <section
        className='home-first max-block'
        style={{ backgroundImage: `url('/assets/img/home_first.png')` }}
      >
        <div className='home-first-content'>
          <h1>
            ¡ELEVAREMOS TODO TU
            <br />
            <span className='home-first-title-big'>POTENCIAL!</span>
          </h1>
          <h3 className='font-border pink'>CONTIANZA, SEGURIDAD Y SALUD</h3>
        </div>
      </section>

      <section className='home-second max-block'>
        {secondSectionCard.map(({ label, img }) => (
          <aside key={label} className='home-second-card'>
            <Image
              src={img}
              alt={label}
              width={677}
              height={450}
              className='home-second-card-img'
            />
            <div className='home-second-card-filter' />
            <p>{label}</p>
          </aside>
        ))}
      </section>

      <Footer />
    </main>
  );
}
