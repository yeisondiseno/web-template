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
          {contentList.map(({ title, text, icon }) => (
            <aside key={title}>
              <header className='module-alma-students-content-card'>
                <i>{icon}</i>
                <h2 className='black'>{title}</h2>
              </header>
              <p>{text}</p>
            </aside>
          ))}
        </div>
        <div className='module-alma-students-content-video'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/QUltagyKZtc?si=cttQ1asWzhaw7v_H'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            style={{ border: 'none', width: '100%' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
