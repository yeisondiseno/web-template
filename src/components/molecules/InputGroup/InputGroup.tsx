'use client';
import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
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
  ref: Ref<HTMLInputElement> | undefined,
) => {
  // Props
  const { id } = props;

  return (
    <div className='m-input-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <Input ref={ref} id={id} {...props} />
      {error && <span className='m-input-group-error'>{error}</span>}
    </div>
  );
};

export default forwardRef(InputGroup);
