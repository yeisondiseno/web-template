import React from 'react';
import Image from 'next/image';
// Styles
import './MaskCard.scss';

type MaskCardType = {
  label?: string;
  src: string;
};

const MaskCard = ({ label = '', src }: MaskCardType) => {
  return (
    <aside className='m-mask-card'>
      <Image src={src} alt={label} fill className='m-mask-card-img' />
      <p>{label}</p>
    </aside>
  );
};

export default MaskCard;
