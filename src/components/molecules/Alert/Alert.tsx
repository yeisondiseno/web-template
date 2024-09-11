import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
// Styles
import './Alert.scss';

type AlertType = ComponentPropsWithoutRef<'div'> & {
  status: 'error' | 'warning' | 'info';
  children?: ReactNode;
};

const Alert = ({
  className,
  status = 'info',
  children,
  ...props
}: AlertType) => {
  return (
    <div className={`m-alert fade-in ${className} ${status}`} {...props}>
      {children}
    </div>
  );
};

export default Alert;
