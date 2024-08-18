import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './Input.scss';

type InputType = ComponentPropsWithoutRef<'input'>;

const Input = (
  { ...props }: InputType,
  ref: React.LegacyRef<HTMLInputElement> | undefined,
) => {
  // Props
  const { onChange } = props;

  // Actions
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitizeHtml(e.target.value);
    onChange?.(e);
  };

  delete props.onChange;

  return (
    <input
      {...props}
      className={`${props.className} a-input`}
      onChange={onChangeHandler}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
