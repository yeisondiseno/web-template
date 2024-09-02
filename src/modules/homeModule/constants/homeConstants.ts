export type CardsType = {
  label: string;
  img: string;
  link: string;
};

export const cardsHome: CardsType[] = [
  {
    label: 'ALMA Metodo',
    img: '/assets/img/home_1.png',
    link: './alma',
  },
  {
    label: 'ALMA Online',
    img: '/assets/img/home/online.png',
    link: './online',
  },
  {
    label: 'Zona ALMA',
    img: '/assets/img/home/zona.png',
    link: './zona-alma',
  },
];

export const cardsAlma: CardsType[] = [
  {
    label: 'Horarios',
    img: '/assets/img/home_1.png',
    link: '#schedule',
  },
  {
    label: 'Planes',
    img: '/assets/img/alma/home_2.png',
    link: '#plans',
  },
  {
    label: 'Entrenadores',
    img: '/assets/img/alma/trainers.png',
    link: '#trainers',
  },
];

export const carrouselList = [
  { src: '/assets/img/slide-1.png', alt: 'label' },
  { src: '/assets/img/slide-2.png', alt: 'label' },
  { src: '/assets/img/slide-3.png', alt: 'label' },
  { src: '/assets/img/home/slider-4.png', alt: 'label' },
];
