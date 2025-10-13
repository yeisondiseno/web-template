import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
// Styles
import './Button.scss';

// Data Object
const variantList = {
  normal: 'a-btn-normal',
  secondary: 'a-btn-secondary',
};
const widthList = {
  fit: 'a-btn-fit',
  full: 'a-btn-full',
};

export type ButtonType = ComponentPropsWithoutRef<'button'> & {
  width?: 'fit' | 'full';
  variant?: 'normal' | 'secondary';
  children: ReactNode;
};

const Button = ({
  width,
  variant = 'normal',
  children,
  className = '',
  ...props
}: ButtonType) => {
  // Data
  const variantClass = variantList[variant];
  const widthClass = width ? widthList[width] : '';

  return (
    <button
      {...props}
      className={`${className} a-btn ${variantClass} ${widthClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
