import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
// Styles
import './Button.scss';

type Button = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: Button) => {
  return (
    <button {...props} className={`${props.className} btn`}>
      {children}
    </button>
  );
};

export default Button;
