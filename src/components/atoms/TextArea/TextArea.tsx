'use client';
import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Styles
import './TextArea.scss';

type TextAreaType = ComponentPropsWithoutRef<'textarea'>;

const TextArea = (
  { ...props }: TextAreaType,
  ref: Ref<HTMLTextAreaElement> | undefined,
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
