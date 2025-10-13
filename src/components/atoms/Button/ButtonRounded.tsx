import React from 'react';
// Components
import Button from './Button';
// Types
import type { ButtonType } from './Button';

type ButtonRoundedType = ButtonType;

const ButtonRounded = ({ className = '', ...props }: ButtonRoundedType) => {
  return <Button className={`a-btn-rounded ${className}`} {...props} />;
};

export default ButtonRounded;
