import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
// Components
import { ChevronDown } from '@/components/Icons';
// Styles
import './Select.scss';

export type SelectType = ComponentPropsWithoutRef<'select'> & {
  options: {
    value: string | number;
    label: string;
  }[];
};

const Select = (
  { className = '', options, ...props }: SelectType,
  ref: Ref<HTMLSelectElement> | undefined,
) => (
  <div className='a-select-container'>
    <select {...props} className={`${className} a-select`} ref={ref}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    <span className='a-select-chevron'>
      <ChevronDown />
    </span>
  </div>
);

export default forwardRef(Select);
