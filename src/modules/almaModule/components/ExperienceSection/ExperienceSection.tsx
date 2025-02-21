import React from 'react';
import Link from 'next/link';
// Constant
import { whatsAppLink } from '@constant/index';
// Components
import { Divider, Button, CoverShadow } from '@components/index';
// Styles
import './ExperienceSection.scss';

const ExperienceSection = () => {
  return (
    <section
      className='module-alma-experience parallax'
      style={{ backgroundImage: `url('/assets/img/experience.jpg')` }}
    >
      <CoverShadow />
      <Divider vertical='top' />
      <div className='module-alma-experience-container  max-block'>
        <h2 className='module-alma-experience-title'>
          ¡Vive
          <br />
          <span className='module-alma-experience-title-bold'>
            LA EXPERIENCIA ALMA!
          </span>
        </h2>
        <p>
          Te esperamos en nuestras ubicaciones en El Poblado, Envigado, y El
          Retiro. Además, puedes disfrutar de nuestras clases en línea.
        </p>

        <Link href={whatsAppLink} target='_blank'>
          <Button>RESERVA TU CLASE</Button>
        </Link>
      </div>
      <Divider vertical='bottom' color='black' horizontal='right' />
    </section>
  );
};

export default ExperienceSection;
