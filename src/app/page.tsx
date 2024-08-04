// Components
import { Header, Footer } from '@/components';
// Assets
// Styles
import './page.scss';

export default function Home() {
  return (
    <main className='home'>
      <Header />

      <section
        className='home-first max-block'
        style={{ backgroundImage: `url('/assets/img/home_first.png')` }}
      >
        <div className='home-first-content'>
          <h1>
            ¡ELEVAREMOS TODO TU
            <br />
            <span className='home-first-title-big'>POTENCIAL!</span>
          </h1>
          <h3 className='font-border pink'>CONTIANZA, SEGURIDAD Y SALUD</h3>
        </div>
      </section>

      <Footer />
    </main>
  );
}
