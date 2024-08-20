import React from 'react';
import { Metadata } from 'next';
// Components
import { Hero } from '@components/index';

export const metadata: Metadata = {
  description:
    'Nutrición No somos dietas Nuestra guía nutricional es un paso a paso a un estilo de vida saludable y consciente. Completamente personalizada enfocada en tus necesidades, gustos y requerimientos, pensamos que la adecuada sincronización de una nutrición específica y un entrenamiento guiado y seguro son el camino más eficiente y sano para obtener los resultados',
};

const NutritionPage = () => {
  return (
    <>
      <Hero
        title='ALMA Nutrición'
        backgroundImage='/assets/img/alma-hero.png'
      />
      Nutrition Page
    </>
  );
};

export default NutritionPage;
