import React from 'react';
// Components
import { Button, PlanCard } from '@components/index';
// Constants
import { planList } from '../../constants/index';
// Style
import './PlansSection.scss';

const PlansSection = () => {
  return (
    <section className='module-alma-plan max-block'>
      <div className='module-alma-plan-description'>
        <h3 className='light'>PLAN INTEGRAL</h3>
        <h3 className=''>PLANES Y SEVICIOS</h3>
        <hr className='hr' />
        <p className='module-alma-plan-text'>
          Planes de entrenamiento con acompañamiento semipersonalizado en grupos
          de 16 a 18 usuarias (Con # De Sesiones Especificas) + Guía Nutricional
          Individual + Toma De Medidas Corporales + Club De Beneficios.
        </p>
        <Button className='fit'>Selecciona tu plan</Button>
      </div>
      <div className='module-alma-plan-plan-content'>
        {planList.map(({ header, footer, list }) => (
          <PlanCard key={header} header={header} footer={footer}>
            <ul>
              {list.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </PlanCard>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
