import React from 'react';
// Components
import { Table } from '@components/index';
// Constants
import { weekSchedule } from '@constant/index';
// Styles
import './ScheduleSection.scss';

const ScheduleSection = () => {
  return (
    <section className='module-alma-schedule bg-white'>
      <div className='max-block'>
        <h3 className='light italic'>CONOCE</h3>
        <h3 className='black'>NUESTROS HORARIOS</h3>
        <p className='module-alma-schedule-text'>
          El horario esta sujeto a cambios. «X» significa que las clases no
          están disponibles en un momento dado. Sábados clase cada 15 días.
        </p>

        <Table
          head={[
            'Horario',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
            'Domingo',
          ]}
          body={weekSchedule}
        />
      </div>
    </section>
  );
};

export default ScheduleSection;
