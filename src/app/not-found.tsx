import Link from 'next/link';
// Components
import { Button } from '@components/index';
// Styles
import './not-found.scss';

export default function NotFound() {
  return (
    <section
      className='p-not-found'
      style={{ backgroundImage: `url('/assets/img/404/404.png')` }}
    >
      <h1 className='fade-in'>404</h1>
      <h2>Página no encontrada</h2>
      <p className='large'>
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Link href='/'>
        <Button>Ir al início</Button>
      </Link>
    </section>
  );
}
