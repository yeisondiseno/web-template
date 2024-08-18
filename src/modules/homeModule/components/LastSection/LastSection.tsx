import React from 'react';
import Image from 'next/image';
// Styles
import './LastSection.scss';

const listCards = [
  {
    img: '/assets/img/last-1.png',
    title: 'POBLADO',
    subTitle: 'ED. FOREVER W&L',
  },
  {
    img: '/assets/img/last-2.png',
    title: 'EL RETIRO',
    subTitle: 'MALL PUERTO MADERO',
  },
  {
    img: '/assets/img/last-3.png',
    title: 'ENVIGADO',
    subTitle: 'MALL DISTRITO AVIGNON',
  },
  {
    img: '/assets/img/last-4.png',
    title: 'ONLINE',
    subTitle: 'DESDE CUALQUIER LUGAR',
  },
];

const LastSection = () => {
  return (
    <section className='module-home-last max-block'>
      {listCards.map(({ img, title, subTitle }) => (
        <div key={title} className='module-home-last-card'>
          <Image
            src={img}
            alt={title}
            width={271}
            height={178}
            className='module-home-last-card-img'
          />
          <div className='module-home-last-card-content'>
            <h2 className='bold'>{title}</h2>
            <h5>{subTitle}</h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LastSection;
