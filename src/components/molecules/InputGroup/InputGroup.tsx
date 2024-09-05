import React, { ComponentPropsWithoutRef, forwardRef, LegacyRef } from 'react';
// Atoms
import { Input } from '@components/atoms/index';
// Styles
import './InputGroup.scss';

type InputGroupType = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  error?: string;
};

const InputGroup = (
  { label, error, ...props }: InputGroupType,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  // Props
  const { id } = props;

  return (
    <div className='m-input-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <Input ref={ref} {...props} />
      {error && <span className='m-input-group-error'>{error}</span>}
    </div>
  );
};

export default forwardRef(InputGroup);
