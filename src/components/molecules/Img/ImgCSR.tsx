'use client';
import React, { useState, useEffect } from 'react';
// Type
import type { ImageProps } from 'next/image';
// Utils
import { getBase64Img, loadImg } from '@utils/index';
// Constants
import { baseImg } from './Img.constants';
// Components
import Img from './Img';

type ImgType = ImageProps;

const ImgCSR = ({ src, quality = 70, width, ...props }: ImgType) => {
  const [urlBlur, setUrlBlur] = useState<string>(baseImg);

  const optimizedSrc = loadImg({
    src: src as string,
    width: typeof width === 'number' ? width : 1200,
    quality: quality as number,
  });

  useEffect(() => {
    const loadImage = async () => {
      const { placeholder } = await getBase64Img(src as string);
      setUrlBlur(placeholder);
    };

    loadImage();
  }, [src]);

  return (
    <Img
      src={optimizedSrc}
      srcSet={optimizedSrc}
      quality={quality}
      width={width}
      blurDataURL={urlBlur}
      placeholder='blur'
      {...props}
    />
  );
};

export default ImgCSR;
