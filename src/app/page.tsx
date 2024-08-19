import React from 'react';
// Components
import {
  HeroSection,
  MainCardSection,
  AboutUsSection,
  FormSection,
  LastSection,
  ExperienceSection,
} from '@modules/homeModule/components/index';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainCardSection />
      <AboutUsSection />
      <ExperienceSection />
      <FormSection />
      <LastSection />
    </>
  );
}
