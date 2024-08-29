import React, { ReactNode } from 'react';
// Components
import { Portal } from '@components/index';
// Styles
import './Slide.scss';

type SlideType = {
  open?: boolean;
  className?: string;
  handledOpen: () => void;
  children: ReactNode;
};

const Slide = ({
  open = false,
  className = '',
  handledOpen,
  children,
}: SlideType) => (
  <Portal show={open} id='portal'>
    <section className={`m-slide ${className}`}>
      <button className='m-slide-close' onClick={handledOpen}>
        x
      </button>
      {children}
    </section>
  </Portal>
);

export default Slide;
