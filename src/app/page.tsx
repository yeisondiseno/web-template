// Components
import { Button } from '@/components';
// Styles
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>First configuration</h1>
      <Button>Click</Button>
    </main>
  );
}
