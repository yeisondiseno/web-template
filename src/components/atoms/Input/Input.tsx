import React, { ComponentPropsWithoutRef } from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './Input.scss';

type InputType = ComponentPropsWithoutRef<'input'>;

const Input = ({ ...props }: InputType) => {
  // Props
  const { onChange } = props;

  // Actions
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = sanitizeHtml(e.target.value);
    onChange?.(e);
  };

  return (
    <input
      {...props}
      className={`${props.className} a-input`}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
