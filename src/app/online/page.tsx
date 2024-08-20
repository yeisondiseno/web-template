import React from 'react';
import { Metadata } from 'next';
// Components
import { Hero } from '@components/index';

export const metadata: Metadata = {
  description:
    'EVOLUCIONAMOS Queremos ayudarte a ser saludable, mantenerse activo, mejorar tu nivel físico-deportivo y ante todo que seas feliz. Por esto nuestro método de entrenamiento ALMA se reinventa para que entrenes en la comodidad de tu hogar y con las personas que más amas!!!',
};

const OnlinePage = () => {
  return (
    <>
      <Hero title='ALMA Online' backgroundImage='/assets/img/alma-hero.png' />
      OnlinePage Page
    </>
  );
};

export default OnlinePage;
