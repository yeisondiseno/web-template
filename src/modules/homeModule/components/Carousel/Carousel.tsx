'use client';
import React, { Children, ReactNode, useMemo } from 'react';
// Libraries
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
// Components
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarrouselArrowButtons';
// import { useDotButton } from './CarrouselDots';
// Styles
import './Carousel.scss';

// NOTA: https://www.embla-carousel.com/get-started/react/
// https://codesandbox.io/p/sandbox/embla-carousel-default-react-n5r52x?file=%2Fsrc%2Fcss%2Fembla.css%3A1%2C1-113%2C1

type CarouselType = {
  children: ReactNode;
  options?: EmblaOptionsType;
  slidesToShow?: number;
  height?: number;
  spacing?: number;
};

const Carousel = ({
  children,
  options,
  slidesToShow,
  height,
  spacing,
}: CarouselType) => {
  // Data
  const showSlide = useMemo(() => {
    const divided = 100 / (slidesToShow ?? 1);
    return `${divided}%;`;
  }, [slidesToShow]);

  const handledHeight = useMemo(() => height ?? 'auto', [height]);

  const handledSpacing = useMemo(() => spacing ?? 0, [spacing]);

  // Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='carousel'>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <section className={`embla `}>
        <div className='embla__viewport' ref={emblaRef}>
          <div
            className='embla__container'
            style={{ gap: `${handledSpacing}px` }}
          >
            {Children.map(children, (child, index) => (
              <div
                className='embla__slide'
                key={index}
                style={{ flex: ` 0 0 ${showSlide}` }}
              >
                <div
                  className='embla__slide__number'
                  style={{ height: `${handledHeight}px` }}
                >
                  {child}
                </div>
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
