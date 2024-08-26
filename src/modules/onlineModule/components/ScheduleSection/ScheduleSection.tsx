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
    <section className='module-online-schedule max-block'>
      <h2 className='italic light'>CONOCE</h2>
      <h2 className='black'>NUESTROS HORARIOS</h2>
      <p>
        Lunes LIVE 6:00 am por Instagram con nuestro Head Coach Álvaro Vanegas.
        JUEVES LIVE pregrabado Horario LIBRE. Este se grabará desde el día
        anterior, para que todas las chicas tengan la posibilidad de hacerlo a
        la hora que deseen El JUEVES.
      </p>

      <Table
        head={days}
        body={weekSchedule}
        className='module-online-schedule-table'
      />

      <div className='module-online-schedule-drop'>
        {daysNotFirstElement?.map((day, index) => (
          <DropDown key={day} title={day}>
            <div className='module-online-schedule-drop-content'>
              {listDrop[index]?.map(({ time, icon }) => (
                <div
                  key={time + day}
                  className='module-online-schedule-drop-content-block'
                >
                  <p>{time}</p>
                  {icon}
                </div>
              ))}
            </div>
          </DropDown>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
