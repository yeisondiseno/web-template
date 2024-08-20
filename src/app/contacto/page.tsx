import React from 'react';
import { Metadata } from 'next';
// Components
import { Hero } from '@components/index';

export const metadata: Metadata = {
  description:
    'Información del contacto Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.  Dirección Cra 30 # 4ª-45 Local 9807 Sótano 2 / Medellín Teléfono +57 304 378 7141 Email info@almafitness.com.co Horarios 5AM – 8PM Todos los días Mandanos un mensaje',
};

const ContactPage = () => {
  return (
    <>
      <Hero title='CONTACTO' backgroundImage='/assets/img/contact.jpg' />
      ContactPage Page
    </>
  );
};

export default ContactPage;
