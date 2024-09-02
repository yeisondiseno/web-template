import React from 'react';
// Components
import { Table, DropDown } from '@components/index';
// Constants
import { weekSchedule, days, listDrop } from '@constant/index';
// Styles
import './ScheduleSection.scss';

const daysNotFirstElement = days.slice(1);

const ScheduleSection = () => {
  return (
    <section className='module-alma-schedule bg-white'>
      <div className='max-block' id='schedule'>
        <h3 className='light italic'>CONOCE</h3>
        <h3 className='black'>NUESTROS HORARIOS</h3>
        <p className='module-alma-schedule-text'>
          El horario esta sujeto a cambios. «X» significa que las clases no
          están disponibles en un momento dado. Sábados clase cada 15 días.
        </p>

        <div className='module-alma-schedule-table'>
          <Table head={days} body={weekSchedule} />
        </div>
        <div className='module-alma-schedule-drop'>
          {daysNotFirstElement?.map((day, index) => (
            <DropDown key={day} title={day}>
              <div className='module-alma-schedule-drop-content'>
                {listDrop[index]?.map(({ time, icon }) => (
                  <div
                    key={time + day}
                    className='module-alma-schedule-drop-content-block'
                  >
                    <p>{time}</p>
                    {icon}
                  </div>
                ))}
              </div>
            </DropDown>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
