import React from 'react';
import { Metadata } from 'next';
// Components
import {
  HeroSection,
  AboutUsSection,
  FormSection,
  LastSection,
  ExperienceSection,
} from '@modules/homeModule/components/index';
import { MainCardSection } from '@components/index';

export const metadata: Metadata = {
  description:
    '¡Elevaremos todo tu potencial!confianza, seguridad y salud integral SOMOS DIFERENTES porque primero trabajas tu Interior para reflejar tu exterior Nosotros Espacio integral ¡ALMA es para todas las mujeres, no importa tu nivel deportivo o condición física, lo importante es tu superación, tu salud y enfoque de resto déjalo en nuestras manos para guiarte en lo deportivo.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainCardSection variant='home' />
      <AboutUsSection />
      <ExperienceSection />
      <FormSection />
      <LastSection />
    </>
  );
}
