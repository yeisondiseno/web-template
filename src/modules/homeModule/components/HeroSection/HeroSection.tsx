import React from 'react';
// Styles
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section
      className='module-home-hero max-block'
      style={{ backgroundImage: `url('/assets/img/home_first.png')` }}
    >
      <div className='module-home-hero-content'>
        <h1>
          ¡ELEVAREMOS TODO TU
          <br />
          <span className='module-home-hero-title-big'>POTENCIAL!</span>
        </h1>
        <h3 className='font-border pink'>CONTIANZA, SEGURIDAD Y SALUD</h3>
      </div>
    </section>
  );
};

export default HeroSection;
