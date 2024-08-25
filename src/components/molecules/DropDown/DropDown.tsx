'use client';
import React, { ReactNode, useState } from 'react';
// Components
import { ChevronDown } from '@components/index';
// Styles
import './DropDown.scss';

type DropDownProps = {
  title: string;
  children: ReactNode;
};

const DropDown = ({ title, children }: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='m-drop-down'>
      <button className='m-drop-down-header' onClick={() => setOpen(!open)}>
        {title}
        <i className={`${open && 'open'}`}>
          <ChevronDown />
        </i>
      </button>
      <div className={`m-drop-down-body ${open && 'open'}`}>{children}</div>
    </div>
  );
};

export default DropDown;
