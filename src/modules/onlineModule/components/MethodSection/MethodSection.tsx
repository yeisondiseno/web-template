import React from 'react';
import Image from 'next/image';
// Components
import { Check } from '@components/index';
// Constants
import { methodList } from '../../constants';
// Style
import './MethodSection.scss';

const MethodSection = () => {
  return (
    <section className='module-online-method bg-white'>
      <div className='module-online-method-content max-block'>
        <div className='module-online-method-content-titles'>
          <h2 className='black'>Metodo</h2>
          <ul>
            {methodList.map((e) => (
              <li key={e}>
                <i>
                  <Check />
                </i>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className='module-online-method-content-images'>
          <Image
            alt=''
            src={'/assets/img/online/slide-1.png'}
            width={300}
            height={400}
            className='module-online-method-content-images-1'
          />
          <Image
            alt=''
            src={'/assets/img/online/slide-2.png'}
            width={300}
            height={400}
            className='module-online-method-content-images-2'
          />
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
