import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
// Styles
import './Alert.scss';

type AlertType = ComponentPropsWithoutRef<'div'> & {
  status: 'alert' | 'warning' | 'info';
  children?: ReactNode;
};

const Alert = ({
  className,
  status = 'info',
  children,
  ...props
}: AlertType) => {
  return (
    <div className={`m-alert ${className} ${status}`} {...props}>
      {children}
    </div>
  );
};

export default Alert;
