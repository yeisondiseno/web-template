import React from 'react';
// Next
import Image from 'next/image';
import type { ImageProps } from 'next/image';
// Styles
import './Img.scss';

type ImgType = ImageProps & {
  srcSet?: string;
};

const Img = ({ alt = '', src, srcSet, className, ...props }: ImgType) => {
  if (!src) return;

  return (
    <picture>
      <source type='image/webp' srcSet={srcSet} />
      <source type='image/png' srcSet={srcSet} />
      <Image alt={alt} src={src} className={`img ${className}`} {...props} />
    </picture>
  );
};

export default Img;
