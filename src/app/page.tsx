import React from 'react';
// Components
import {
  HeroSection,
  AboutUsSection,
  FormSection,
  LastSection,
  ExperienceSection,
} from '@modules/homeModule/components/index';
import { MainCardSection } from '@components/index';

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
