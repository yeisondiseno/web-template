import React from 'react';
import Image from 'next/image';
// Components
import { FormContact } from '@modules/contactModule/components';
// Styles
import './ContactSection.scss';

const ContactSection = () => {
  return (
    <>
      <section className='module-contact-contact '>
        <div className='module-contact-contact-content max-block'>
          <div>
            <h2 className='black'>Déjanos tus datos</h2>
            <p>y nos pondremos en contacto con usted.</p>
            <FormContact />
          </div>
          <div className='module-contact-contact-content-img'>
            <Image
              src={'/assets/img/slide-gallery/2.png'}
              alt={''}
              width={446}
              height={616}
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </div>
      </section>
      <div className='module-contact-contact-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.84657989407!2d-75.561874!3d6.20267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ddd54d2c47%3A0xc52788a5341a0662!2sALMA%20Fitness!5e0!3m2!1ses!2sus!4v1724729259972!5m2!1ses!2sus'
          width='600'
          height='450'
          style={{ border: 0, width: '100%' }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  );
};

export default ContactSection;
