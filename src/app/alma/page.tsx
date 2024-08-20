import React from 'react';
// Components
import {
  MethodSection,
  ScheduleSection,
  ExperienceSection,
} from '@modules/almaModule/components/index';
import { MainCardSection, Hero } from '@components/index';
// Styles
import './almaPage.scss';

const AlmaPage = () => {
  return (
    <>
      <Hero title='ALMA Fitness' backgroundImage='/assets/img/alma-hero.png' />
      <MethodSection />
      <MainCardSection variant='alma' />
      <ScheduleSection />
      <ExperienceSection />
      <section>PLANES Y SEVICIOS</section>
      <section>Estudiantes</section>
      <section>NUESTROS ENTRENADORES¡</section>
    </>
  );
};

export default AlmaPage;
