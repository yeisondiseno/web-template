import React, { ReactNode } from 'react';
// Components
import { Portal } from '@components/index';
// Styles
import './Slide.scss';

type SlideType = {
  open?: boolean;
  children: ReactNode;
  handledOpen: () => void;
};

const Slide = ({ open = false, handledOpen, children }: SlideType) => {
  console.log('Slide', open);
  return (
    <Portal show={open} id='portal'>
      <section className='m-slide'>
        <button className='m-slide-close' onClick={handledOpen}>
          x
        </button>
        {children}
      </section>
    </Portal>
  );
};

export default Slide;
