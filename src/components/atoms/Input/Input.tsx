'use client';
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  ChangeEvent,
} from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './Input.scss';

type InputType = ComponentPropsWithoutRef<'input'>;

const Input = (
  { ...props }: InputType,
  ref: Ref<HTMLInputElement> | undefined,
) => {
  // Props
  const { onChange, className } = props ?? {};

  // Actions
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitizeHtml(e.target.value);
    onChange?.(e);
  };

  delete props?.onChange;

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
