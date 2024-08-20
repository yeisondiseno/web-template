import React from 'react';
// Components
import {
  HeroAlma,
  MethodSection,
  ScheduleSection,
  ExperienceSection,
} from '@modules/almaModule/components/index';
import { MainCardSection } from '@components/index';
// Styles
import './almaPage.scss';

const AlmaPage = () => {
  return (
    <>
      <HeroAlma />
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
