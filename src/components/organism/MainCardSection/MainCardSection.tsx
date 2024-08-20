import React from 'react';
// Constant
import { secondSectionCard } from '@modules/homeModule/constants/homeConstants';
import { MaskCard } from '@components/index';
// Style
import './MainCardSection.scss';

type MainCardSectionType = {
  variant: 'home' | 'alma';
};

const MainCardSection = ({ variant }: MainCardSectionType) => {
  return (
    <section className={`o-main-card  ${variant === 'alma' ? 'white' : ''}`}>
      <div className='max-block'>
        {secondSectionCard.map(({ label, img }) => (
          <MaskCard key={label} label={label} src={img} />
        ))}
      </div>
    </section>
  );
};

export default MainCardSection;
