'use server';
import React from 'react';
// Next
import type { ImageProps } from 'next/image';
// Utils
import { getBase64Img, loadImg } from '@utils/index';
// Components
import Img from './Img';

type ImgType = ImageProps;

const ImgSSR = async ({
  alt = '',
  src,
  quality = 70,
  width,
  ...props
}: ImgType) => {
  const { placeholder: urlBlur } = await getBase64Img(src as string);

  const optSrc = loadImg({
    src: src as string,
    width: typeof width === 'number' ? width : 1200,
    quality: quality as number,
  });

  return (
    <Img
      src={optSrc}
      srcSet={optSrc}
      alt={alt}
      width={width}
      quality={quality}
      blurDataURL={urlBlur}
      placeholder='blur'
      {...props}
    />
  );
};

export default ImgSSR;
