import React, { ComponentPropsWithoutRef } from 'react';
// Styles
import './CoverShadow.scss';

type CoverShadowType = ComponentPropsWithoutRef<'div'>;

const CoverShadow = (props: CoverShadowType) => (
  <div className={`a-cover-shadow`} {...props} />
);

export default CoverShadow;
