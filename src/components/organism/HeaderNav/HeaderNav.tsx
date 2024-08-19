'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// Components
import { HamburgerButton, Nav, Slide, LogoIcon } from '@components/index';
// Styles
import './HeaderNav.scss';

const gallery = [
  {
    img: '/assets/img/slide-gallery/1.png',
    alt: 'Alma fitness',
  },
  {
    img: '/assets/img/slide-gallery/2.png',
    alt: 'Alma fitness',
  },
  {
    img: '/assets/img/slide-gallery/2.png',
    alt: 'Alma fitness',
  },
  {
    img: '/assets/img/slide-gallery/1.png',
    alt: 'Alma fitness',
  },
  {
    img: '/assets/img/slide-gallery/2.png',
    alt: 'Alma fitness',
  },
];

const HeaderNav = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav />
      <HamburgerButton onClick={() => setIsOpen(true)} />
      <Slide open={isOpen} handledOpen={() => setIsOpen(false)}>
        <LogoIcon width={240} className='o-header-nav-logo' />
        <p className='o-header-nav-p'>
          ¡ALMA es para todas las mujeres! No importa tu nivel deportivo ni tu
          condición física; lo que verdaderamente importa es tu superación
          personal, tu salud y tu enfoque. Déjanos el resto a nosotros: te
          guiaremos en lo deportivo, lo nutricional ¡y mucho más!
        </p>

        <div className='o-header-nav-gallery'>
          {gallery.map(({ img, alt }, index) => (
            <Image key={alt + index} src={img} alt={alt} fill={true} />
          ))}
        </div>

        <p className='o-header-nav-p bold'>
          Cra 30 # 4ª-45 Local 9807 Sótano 2 / Medellín
        </p>
        <p className='o-header-nav-p'>info@almafitness.com.co</p>
        <p className='o-header-nav-p'>+57 304 378 7141</p>
      </Slide>
    </>
  );
};

export default HeaderNav;
