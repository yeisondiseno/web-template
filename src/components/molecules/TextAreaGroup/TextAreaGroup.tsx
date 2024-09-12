import React, { ComponentPropsWithoutRef, forwardRef, LegacyRef } from 'react';
// Atoms
import { TextArea } from '@components/atoms/index';
// Styles
import './TextAreaGroup.scss';

type TextGroupType = ComponentPropsWithoutRef<'textarea'> & {
  label?: string;
  error?: string;
};

const TextAreaGroup = (
  { label, error, ...props }: TextGroupType,
  ref: LegacyRef<HTMLTextAreaElement> | undefined,
) => {
  // Props
  const { id } = props;

  return (
    <div className='m-text-area-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <TextArea ref={ref} id={id} {...props} />
      {error && <span className='m-text-area-group-error'>{error}</span>}
    </div>
  );
};

export default forwardRef(TextAreaGroup);
