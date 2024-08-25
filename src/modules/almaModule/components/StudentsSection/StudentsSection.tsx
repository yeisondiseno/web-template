import React from 'react';
// Constants
import { contentList } from '../../constants';
// Styles
import './StudentsSection.scss';

const StudentsSection = () => {
  return (
    <section className='module-alma-students bg-white'>
      <div className='module-alma-students-content max-block'>
        <div>
          {contentList.map(({ title, text }) => (
            <aside key={title}>
              <header>
                <h3 className='black'>{title}</h3>
              </header>
              <p>{text}</p>
            </aside>
          ))}
        </div>
        <div>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/QUltagyKZtc?si=cttQ1asWzhaw7v_H'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
