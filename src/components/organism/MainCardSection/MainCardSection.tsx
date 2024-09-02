import React from 'react';
import Link from 'next/link';
// Constant
import {
  cardsHome,
  cardsAlma,
  CardsType,
} from '@modules/homeModule/constants/homeConstants';
import { MaskCard } from '@components/index';
// Style
import './MainCardSection.scss';

type MainCardSectionType = {
  variant: 'home' | 'alma';
};

const MainCardSection = ({ variant }: MainCardSectionType) => {
  // Data
  const cardDataToMap: CardsType[] = variant === 'home' ? cardsHome : cardsAlma;

  return (
    <section className={`o-main-card  ${variant === 'alma' ? 'white' : ''}`}>
      <div className='max-block '>
        {cardDataToMap.map(({ label, img, link }, index) => (
          <Link
            href={link}
            key={label}
            className='fade-in-scroll'
            style={{ animationDelay: index % 2 ? '' : '0.3s' }}
          >
            <MaskCard label={label} src={img} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainCardSection;
