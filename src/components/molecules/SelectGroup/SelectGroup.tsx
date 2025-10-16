'use client';
import React, { forwardRef, Ref } from 'react';
// Atoms
import { Select, SelectType } from '@components/atoms/index';
// Styles
import './SelectGroup.scss';

type SelectGroupType = SelectType & {
  label?: string;
  error?: string;
  classGroup?: string;
};

const SelectGroup = (
  { label, error, classGroup = '', ...props }: SelectGroupType,
  ref: Ref<HTMLSelectElement> | undefined,
) => {
  // Props
  const { id } = props;

  return (
    <div className={`m-select-group ${classGroup}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Select ref={ref} id={id} {...props} />
      {error && <span className='m-select-group-error'>{error}</span>}
    </div>
  );
};

export default forwardRef(SelectGroup);
