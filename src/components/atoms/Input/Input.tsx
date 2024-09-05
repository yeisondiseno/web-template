import React, { ComponentPropsWithoutRef, forwardRef, LegacyRef } from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './Input.scss';

type InputType = ComponentPropsWithoutRef<'input'>;

const Input = (
  { ...props }: InputType,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  // Props
  const { onChange, className } = props;

  // Actions
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitizeHtml(e.target.value);
    onChange?.(e);
  };

  delete props.onChange;

  return (
    <input
      {...props}
      className={`${className} a-input`}
      onChange={onChangeHandler}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
