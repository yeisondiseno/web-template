import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
// Styles
import './Button.scss';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  width?: 'fit' | 'full';
  children: ReactNode;
};

const Button = ({ width, children, ...props }: ButtonType) => {
  return (
    <button {...props} className={`${props.className} a-btn ${width ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;
