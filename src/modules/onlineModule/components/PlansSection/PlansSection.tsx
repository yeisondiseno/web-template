import React from 'react';
import Link from 'next/link';
// Constants
import { whatsAppLink } from '@constant/index';
// Components
import { Button, PlanCard, CoverShadow } from '@components/index';
// Styles
import './PlansSection.scss';

const PlansSection = () => {
  return (
    <section
      className='module-online-plans'
      style={{ backgroundImage: `url('/assets/img/online/back.png')` }}
    >
      <CoverShadow />
      <div className='module-online-plans-content max-block'>
        <div className='module-online-plans-content-text'>
          <h2 className='light'>Conoce nuestros </h2>
          <h2 className='black'>PLANES Y SERVICIOS ONLINE</h2>
          <hr className='hr' />
          <Link href={whatsAppLink} target='_blank'>
            <Button>Selecciona tu plan</Button>
          </Link>
        </div>
        <div>
          <PlanCard header='INTEGRAL DELUXE' footer='$290.000 / Mensual'>
            <div className='module-online-plans-content-card'>
              <p>5 clases/semana-20 clases al mes</p>
              <p>Nutrición específica, club de beneficios ONLINE.</p>
              <p>
                Clases x zoom 3 a la semana 2 live por cta priv en Instagram con
                el equipo de ALMAFitness.
              </p>
            </div>
          </PlanCard>
          <p className='module-online-plans-content-p small'>
            HORARIOS: Clases ZOOM (dirigidas x nuestro fabuloso equipo ALMA)
            MARTES-MIERCOLES-VIERNES 5:00 am 6:05 am 7:15 am 8:30 am 5:30 pm
            Puedes ingresar a la hora que deseas y puedas. LIVE Privados
            (entrenando juntos) Lunes y Jueves 6:00 am Siempre Quedan Grabados
            En el Instagram @almafitnessonline
          </p>
        </div>
        <div>
          <PlanCard header='INTEGRAL DELUXE' footer='$150.000 / Mensual'>
            <div className='module-online-plans-content-card'>
              <p>3 clases/semana-12 clases al mes.</p>
              <p>Clases por zoom 2a la semana</p>
              <p>1 live público Equipo ALMAFitness.</p>
            </div>
          </PlanCard>
          <p className='module-online-plans-content-p small'>
            HORARIOS: Clases ZOOM (dirigidas x nuestro fabuloso equipo ALMA)
            MARTES-VIERNES 5:00 am 6:05 am 7:15 am 8:30 am 5:30 pm Puedes
            ingresar a la hora que deseas y puedas. LIVE Públicos (entrenando
            juntos) Sábado 9:00 am Siempre Quedan Grabados En el Instagram
            @almafitnessentrenamiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
