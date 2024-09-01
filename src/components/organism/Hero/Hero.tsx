import React, { ReactNode } from 'react';
// Styles
import './Hero.scss';

type HeroType = {
  title: string;
  backgroundImage: string;
  children?: ReactNode;
};

const Hero = ({ title, backgroundImage, children }: HeroType) => {
  return (
    <section
      className='o-hero'
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h1 className='fade-in'>{title}</h1>
      {children}
    </section>
  );
};

export default Hero;
