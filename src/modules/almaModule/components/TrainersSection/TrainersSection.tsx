import React from 'react';
// Components
import { TrainerCards } from '@components/index';
// Constants
import { trainerListTop, trainerListBottom } from '../../constants';
// Styles
import './TrainersSection.scss';

const TrainersSection = () => {
  return (
    <section className='module-alma-trainers'>
      <div className='bg-white'>
        <div className='module-alma-trainer-titles max-block bg-white'>
          <h3 className='light italic'>¡CONOCE A</h3>
          <h3 className='black'>NUESTROS ENTRENADORES¡</h3>
          <p>
            Avaro y Mónica Con amor, disciplina y mucha constancia son nuestros
            creadores y han perfeccionado nuestra filosofía y método de
            entrenamiento.{' '}
          </p>
        </div>
      </div>
      <div className='max-block'>
        <div className='module-alma-trainer-first-card'>
          {trainerListTop.map((props) => (
            <TrainerCards key={props.title} {...props} />
          ))}
        </div>
        <p className='module-alma-trainer-mid-text'>
          Profesionales en deporte y actividad física, que buscan siempre
          cuidarte guiarte en el proceso de superación y evolución deportiva,
          nuestra premisa siempre será ayudarte a ser mejor para verte mejor!!!.
        </p>
        <div className='module-alma-trainer-last-card'>
          {trainerListBottom.map((props) => (
            <TrainerCards key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
