import React from 'react';
// Components
import { SocialList } from '@components/index';
// Styles
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section
      className='module-home-hero'
      style={{ backgroundImage: `url('/assets/img/home_first.png')` }}
    >
      <div className='max-block'>
        <h1 className='black'>
          ¡ELEVAREMOS TODO TU
          <br />
          <span className='module-home-hero-title-big'>POTENCIAL!</span>
        </h1>
        <h3 className='font-border pink'>CONTIANZA, SEGURIDAD Y SALUD</h3>
      </div>
      <SocialList className='module-home-hero-social' />
    </section>
  );
};

export default HeroSection;
