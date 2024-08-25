import React from 'react';
// Components
import { Check } from '@components/index';
// Constants
import { evolutionList } from '../../constants';
// Styles
import './EvolutionSection.scss';

const EvolutionSection = () => {
  return (
    <section className='module-online-evolution max-block'>
      <h2>EVOLUCIONAMOS</h2>
      <span />
      <div className='module-online-evolution-content'>
        <div className='module-online-evolution-titles'>
          <p>
            Queremos ayudarte a ser saludable, mantenerte activo, mejorar tu
            nivel físico-deportivo y ante todo que seas feliz.
            <br />
            Por esto nuestro método de entrenamiento ALMA se reinventa para que
            entrenes en la comodidad de tu hogar y con las personas que más
            amas!!!.
            <br />
            Nuestro método consta de entrenamientos funcionales de alta y baja
            intensidad, con énfasis en definición y fortalecimiento muscular que
            se pueden realizar en cualquier lugar con Implementación básica o
            sin ella, solo necesitas GANAS.
          </p>
        </div>
        <div className='module-online-evolution-list'>
          <h3 className='c-primary black'>
            QUE OBTIENES CON ALMA FITNESS ONLINE:
          </h3>
          <ul>
            {evolutionList.map((e) => (
              <li key={e}>
                <i>
                  <Check />
                </i>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
