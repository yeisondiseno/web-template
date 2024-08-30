import React from 'react';
import Link from 'next/link';
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
        {secondSectionCard.map(({ label, img, link }) => (
          <Link href={link} key={label}>
            <MaskCard label={label} src={img} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainCardSection;
