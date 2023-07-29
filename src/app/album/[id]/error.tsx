'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function Error() {
  return (
    <div className={styles.error_container}>
      <h2>Oops! We had a problem with the album you are looking</h2>
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
}
