import Image from 'next/image';
import { Album } from '@/domain/models/album.model';
import styles from './Aside.module.css';

interface AsideProps {
  album: Album;
}

function Aside({ album }: AsideProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          height={600}
          width={600}
          src={album?.cover as string}
          alt={`${album?.title} cover`}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Album title: {album?.title}</h1>
        <p className={styles.subtitle}>Album id: {album?.id}</p>
      </div>
    </div>
  );
}

export default Aside;
