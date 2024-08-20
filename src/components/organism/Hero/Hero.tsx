import React from 'react';
// Styles
import './Hero.scss';

type HeroType = {
  title: string;
  backgroundImage: string;
};

const Hero = ({ title, backgroundImage }: HeroType) => {
  return (
    <section
      className='o-hero'
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h1>{title}</h1>
    </section>
  );
};

export default Hero;
