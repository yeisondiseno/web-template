import React from 'react';
import Image from 'next/image';
// Constant
import { secondSectionCard } from '@modules/homeModule/constants/homeConstants';
// Style
import './MainCardSection.scss';

const MainCardSection = () => {
  return (
    <section className='module-home-main-card max-block'>
      {secondSectionCard.map(({ label, img }) => (
        <aside key={label} className='module-home-main-card-card'>
          <Image
            src={img}
            alt={label}
            width={677}
            height={290}
            className='module-home-main-card-card-img'
          />
          <p>{label}</p>
        </aside>
      ))}
    </section>
  );
};

export default MainCardSection;
