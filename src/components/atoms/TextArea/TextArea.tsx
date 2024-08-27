import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './TextArea.scss';

type TextAreaType = ComponentPropsWithoutRef<'textarea'>;

const TextArea = (
  { ...props }: TextAreaType,
  ref: React.LegacyRef<HTMLTextAreaElement> | undefined,
) => {
  // Props
  const { onChange, className } = props;

  // Actions
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value = sanitizeHtml(e.target.value);
    onChange?.(e);
  };

  delete props.onChange;

  return (
    <textarea
      {...props}
      className={`${className} a-textarea`}
      onChange={onChangeHandler}
      ref={ref}
    />
  );
};

export default forwardRef(TextArea);
