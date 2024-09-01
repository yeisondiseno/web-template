import React from 'react';
// Components
import { Position, Phone, Email, Clock } from '@components/index';
// Styles
import './InformationSection.scss';

const contactList = [
  {
    icon: <Position />,
    title: 'Dirección',
    description: 'Cra 30 # 4ª-45 Local 9807 Sótano 2 / Medellín ',
  },
  {
    icon: <Phone />,
    title: 'Teléfono',
    description: '+57 304 378 7141',
  },
  {
    icon: <Email />,
    title: 'Email',
    description: 'info@almafitness.com.co',
  },
  {
    icon: <Clock />,
    title: 'Horarios',
    description: '5AM - 8PM Todos los días',
  },
];

const InformationSection = () => {
  return (
    <section className='module-contact-information max-block'>
      <h2 className='italic light'>INFORMACIÓN</h2>
      <h2 className='black'> DE CONTACTO</h2>
      <hr className='hr' />
      <div className='module-contact-information-content'>
        {contactList.map(({ icon, title, description }, index) => (
          <aside
            key={title}
            className='module-contact-information-content-card fade-in'
            style={{ animationDelay: index % 2 ? '0.8s' : '' }}
          >
            <i>{icon}</i>
            <div className='module-contact-information-content-card-text'>
              <p>{title}</p>
              <span>{description}</span>
            </div>
          </aside>
        ))}
      </div>
    </section>
  );
};

export default InformationSection;
