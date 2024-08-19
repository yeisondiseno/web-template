import React from 'react';
// Styles
import './HeroAlma.scss';

const HeroAlma = () => {
  return (
    <section
      className='module-alma-hero'
      style={{ backgroundImage: `url('/assets/img/alma-hero.png')` }}
    >
      <h1>ALMA Fitness</h1>
    </section>
  );
};

export default HeroAlma;
