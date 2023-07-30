import Link from 'next/link';
import Image from 'next/image';

import { Album } from '@/domain/models/album.model';

import styles from './Card.module.css';

const Card = ({ album }: { album: Album }) => {
  return (
    <Link data-cy="card" href={`/album/${album.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={album.coverThumbnail as string}
            width={150}
            height={150}
            alt={`${album.title} cover`}
          />
        </div>
        <div className={styles.content}>
          <h2>Title: {album.title}</h2>
          <p>Album Id: {album.id}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
