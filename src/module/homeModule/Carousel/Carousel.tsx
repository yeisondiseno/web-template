'use client';
import React, { Children, ReactNode } from 'react';
// Libraries
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
// Components
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarrouselArrowButtons';
import { useDotButton } from './CarrouselDots';
// Styles
import './Carousel.scss';

// NOTA: https://www.embla-carousel.com/get-started/react/
// https://codesandbox.io/p/sandbox/embla-carousel-default-react-n5r52x?file=%2Fsrc%2Fcss%2Fembla.css%3A1%2C1-113%2C1

type CarouselType = {
  children: ReactNode;
  options?: EmblaOptionsType;
};

const Carousel = ({ children, options }: CarouselType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='carousel'>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <section className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {Children.map(children, (child, index) => (
              <div className='embla__slide' key={index}>
                <div className='embla__slide__number'>{child}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default Carousel;
