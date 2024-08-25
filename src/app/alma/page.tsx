import React from 'react';
import { Metadata } from 'next';
// Components
import {
  MethodSection,
  ScheduleSection,
  ExperienceSection,
  PlansSection,
  StudentsSection,
  TrainersSection,
} from '@modules/almaModule/components/index';
import { MainCardSection, Hero } from '@components/index';
// Styles
import './almaPage.scss';

export const metadata: Metadata = {
  description:
    'ALMA FITNESS Nuestro Método En 60 minutos descubrirás todo tu potencial de la manera más segura, por medio de clases estructuradas con un número máximo de usuarios (16 a 18 por clase) con 3 a 4 profesionales deportivos a cargo, guiando y exigiendo de forma individual a cada integrante.',
};

const AlmaPage = () => {
  return (
    <>
      <Hero title='ALMA Fitness' backgroundImage='/assets/img/alma-hero.png' />
      <MethodSection />
      <MainCardSection variant='alma' />
      <ScheduleSection />
      <ExperienceSection />
      <PlansSection />
      <StudentsSection />
      <TrainersSection />
    </>
  );
};

export default AlmaPage;
