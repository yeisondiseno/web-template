import React from 'react';
// Styles
import './Cover.scss';

type CoverProps = {
  direction: 'r-l' | 'l-r';
};

const Cover = ({ direction }: CoverProps) => (
  <span className={`a-cover ${direction}`} />
);

export default Cover;
