'use client';
import React, { Children, ReactNode, useMemo } from 'react';
// Libraries
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
// Hooks
import { useViewportSize } from '@hooks/index';
// Components
import { PrevButton, NextButton } from './CarrouselArrowButtons';
import { usePrevNextButtons } from './usePrevNextButtons';
// Styles
import './Carousel.scss';

// NOTA: https://www.embla-carousel.com/get-started/react/
// https://codesandbox.io/p/sandbox/embla-carousel-default-react-n5r52x?file=%2Fsrc%2Fcss%2Fembla.css%3A1%2C1-113%2C1

type CarouselType = {
  children: ReactNode;
  options?: EmblaOptionsType;
  slidesToShow?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
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
  // Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { mobile, tablet } = useViewportSize();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Data
  const showSlide = useMemo(() => {
    const viewport = () => {
      if (mobile) return slidesToShow?.mobile;
      if (tablet) return slidesToShow?.tablet;
      return slidesToShow?.desktop;
    };

    return 100 / (viewport() ?? 1);
  }, [mobile, tablet, slidesToShow]);

  const handledHeight = useMemo(() => height ?? 'auto', [height]);
  const handledSpacing = useMemo(() => spacing ?? 0, [spacing]);

  return (
    <section className='m-carousel'>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label='Ir imágen anterior'
      />
      <section className={`m-carousel-embla `}>
        <div className='m-carousel-embla__viewport' ref={emblaRef}>
          <div
            className='m-carousel-embla__container'
            style={{ gap: `${handledSpacing}px` }}
          >
            {Children.map(children, (child, index) => (
              <div
                className='m-carousel-embla__slide'
                key={index}
                style={{ flex: ` 0 0 ${showSlide}%` }}
              >
                <div
                  className='m-carousel-embla__slide__number'
                  style={{ height: `${handledHeight}px` }}
                >
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        aria-label='Ir a siguiente imágen'
      />
    </section>
  );
};

export default Carousel;
