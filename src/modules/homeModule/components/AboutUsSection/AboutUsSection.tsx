import React from 'react';
// Components
import { Divider } from '@components/index';
// Styles
import './AboutUsSection.scss';

const AboutUsSection = () => {
  return (
    <section
      className='module-home-about-us '
      style={{ backgroundImage: 'url("/assets/img/home_fit.png")' }}
    >
      <article className='module-home-about-us-container max-block'>
        <div>
          <h2 className='module-home-about-us-title'>Nosotros</h2>
          <h3 className='module-home-about-us-sub-title'>ESPACIO INTEGRAL</h3>
          <p className='module-home-about-us-text'>
            ¡ALMA es para todas las mujeres, no importa tu nivel deportivo o
            condición física, lo importante es tu superación, tu salud y enfoque
            de resto déjalo en nuestras manos para guiarte en lo deportivo,
            nutricional y mucho mas!
          </p>
        </div>
        <div className='module-home-about-us-right'>
          <h3 className='font-border black fade-in-scroll-right'>
            ELEVA TU POTENCIAL
          </h3>
        </div>
      </article>

      <Divider className='module-home-about-us-divider' />
    </section>
  );
};

export default AboutUsSection;
