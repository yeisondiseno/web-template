import React from 'react';
// Components
import { Button, PlanCard } from '@components/index';
// Style
import './PlansSection.scss';

const planList = [
  {
    header: 'PLAN 2X SEMANA',
    footer: '$345.000 / Mensual',
    list: [
      '2 Clases / semana',
      '8 Clases al mes',
      'No incluye Asesoría',
      'Guía Nutricional',
    ],
  },
  {
    header: 'PLAN 3X SEMANA',
    footer: '$385.000 / Mensual',
    list: [
      '2 Clases / semana',
      '12 Clases al mes',
      'Guía Nutricional',
      '+Sábado',
    ],
  },
  {
    header: 'PLAN 4X SEMANA',
    footer: '$430.000 / Mensual',
    list: [
      '4 Clases / semana',
      '16 Clases al mes',
      'Guía Nutricional',
      '+Sábado',
    ],
  },
  {
    header: 'PLAN 5X SEMANA',
    footer: '$455.000 / Mensual',
    list: ['5 Clases / semana', 'Full clases al mes', 'Guía Nutricional'],
  },
  {
    header: 'PLAN PLATINO MIXTO',
    footer: '$410.000 / Mensual',
    list: [
      '3 Clases / semana',
      '12 Clases al mes',
      'Opción combinada',
      'Plan Online DELUXES',
    ],
  },
  {
    header: 'PLAN ESTUDIANTE',
    footer: '$290.000 / Mensual',
    list: [
      '5 Clases / semana',
      'Ful clases al mes',
      'Guía nutricional',
      'Menor de 24 años ',
      'con certificado estudiantil',
    ],
  },
];

const PlansSection = () => {
  return (
    <section className='module-alma-plan max-block'>
      <div>
        <h3 className='light'>PLAN INTEGRAL</h3>
        <h3 className=''>PLANES Y SEVICIOS</h3>
        <hr className='hr' />
        <p className='module-alma-plan-text'>
          Planes de entrenamiento con acompañamiento semipersonalizado en grupos
          de 16 a 18 usuarias (Con # De Sesiones Especificas) + Guía Nutricional
          Individual + Toma De Medidas Corporales + Club De Beneficios.
        </p>
        <Button>Selecciona tu plan</Button>
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
