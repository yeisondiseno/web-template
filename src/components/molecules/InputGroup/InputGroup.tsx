import React, { ComponentPropsWithoutRef } from 'react';
// Atoms
import { Input } from '@components/atoms/index';
// Styles
import './InputGroup.scss';

type InputGroupType = ComponentPropsWithoutRef<'input'> & {
  label?: string;
};

const InputGroup = ({ label, ...props }: InputGroupType) => {
  // Props
  const { id } = props;

  return (
    <div className='m-input-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <Input {...props} />
    </div>
  );
};

export default InputGroup;
