import React from 'react';
// Styles
import './Divider.scss';

type DividerType = {
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left';
  color?: 'white' | 'black';
  className?: string;
};

const Divider = ({
  className = '',
  vertical = 'bottom',
  horizontal = 'left',
  color = 'white',
}: DividerType) => (
  <div className='a-divider-container'>
    <div
      className={`a-divider ${vertical} ${color} ${horizontal} ${className}`}
    />
  </div>
);

export default Divider;
