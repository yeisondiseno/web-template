import React from 'react';
// Components
import {
  HeroAlma,
  MethodSection,
  ScheduleSection,
} from '@modules/almaModule/components/index';
// Styles
import './almaPage.scss';

const AlmaPage = () => {
  return (
    <>
      <HeroAlma />
      <MethodSection />

      <section>cards</section>
      <ScheduleSection />
      <section>CONOCE NUESTROS HORARIOS</section>
      <section>LA EXPERIENCIA ALMA!</section>
      <section>PLANES Y SEVICIOS</section>
      <section>Estudiantes</section>
      <section>NUESTROS ENTRENADORES¡</section>
    </>
  );
};

export default AlmaPage;
