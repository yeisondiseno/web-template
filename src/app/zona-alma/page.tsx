import React from 'react';
import { Metadata } from 'next';
// Components
import { Hero } from '@components/index';
// Styles
import './AlmaZonePage.scss';

export const metadata: Metadata = {
  description:
    'Nutrición No somos dietas Nuestra guía nutricional es un paso a paso a un estilo de vida saludable y consciente. Completamente personalizada enfocada en tus necesidades, gustos y requerimientos, pensamos que la adecuada sincronización de una nutrición específica y un entrenamiento guiado y seguro son el camino más eficiente y sano para obtener los resultados',
};

const AlmaZonePage = () => {
  return (
    <>
      <Hero title='ZONA ALMA' backgroundImage='/assets/img/nutrition.jpg'>
        <div className='p-alma-zone'>
          <h4 className='light'>
            ¡Estamos preparando algo muy especial para ti!
          </h4>
          <h2>esperalo muy pronto...</h2>
        </div>
      </Hero>
    </>
  );
};

export default AlmaZonePage;
