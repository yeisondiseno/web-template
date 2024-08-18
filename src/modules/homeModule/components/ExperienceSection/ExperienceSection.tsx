import React from 'react';
import Image from 'next/image';
// Components
import { Button, Carousel } from '@components/index';
// Constant
import { carrouselList } from '@modules/homeModule/constants/homeConstants';
// Styles
import './ExperienceSection.scss';

const ExperienceSection = () => {
  return (
    <section className='module-home-experience '>
      <div className='module-home-experience-content max-block'>
        <h3 className='italic light'>CONOCE Y VIVE</h3>
        <h3>LA EXPERIECIA AMLA</h3>
        <Button className='module-home-experience-button' width='fit'>
          RESERVA TU CLASE
        </Button>
        <Carousel slidesToShow={3} height={477}>
          {carrouselList.map(({ src, alt }) => (
            <Image
              key={src + alt}
              src={src}
              alt={alt}
              width={528}
              height={693}
              objectFit='fit'
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ExperienceSection;
