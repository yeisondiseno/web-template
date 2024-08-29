import React from 'react';

const Clock = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 84 84'
  >
    <mask
      id='a'
      width={82}
      height={82}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M81.522 0H0v81.512h81.522V0Z' />
    </mask>
    <g fill='currentColor' mask='url(#a)'>
      <path d='M0 40.678a40.76 40.76 0 1 1 40.708 40.834A40.776 40.776 0 0 1 0 40.678Zm73.397.098a32.636 32.636 0 1 0-32.68 32.614 32.728 32.728 0 0 0 32.68-32.614Z' />
      <path d='M44.823 36.696h1.155c2.422 0 4.84-.037 7.26.026a4.04 4.04 0 0 1-.01 8.065 480.18 480.18 0 0 1-12.7 0A3.834 3.834 0 0 1 36.728 41c-.047-5.6-.047-11.202 0-16.805a4.037 4.037 0 0 1 8.065.019c.062 3.723.025 7.448.029 11.171v1.31Z' />
    </g>
  </svg>
);

export default Clock;
