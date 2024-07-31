import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
// Styles
import './Button.scss';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={`${props.className} a-btn`}>
      {children}
    </button>
  );
};

export default Button;
