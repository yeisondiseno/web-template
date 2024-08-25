import React from 'react';
import Image from 'next/image';
// Styles
import './TrainerCards.scss';

type TrainerCardsProps = {
  img: string;
  imgAlt: string;
  title: string;
  description?: string;
};

const TrainerCards = ({
  img,
  imgAlt,
  title,
  description,
}: TrainerCardsProps) => {
  return (
    <aside className='m-trainer-card'>
      <Image
        src={img}
        alt={imgAlt}
        width={420}
        height={500}
        layout='responsive'
        objectFit='cover'
      />
      <div className='m-trainer-card-content'>
        <h3 className='black'>{title}</h3>
        <p>{description}</p>
        <span className='m-trainer-card-content-line' />
      </div>
    </aside>
  );
};

export default TrainerCards;
