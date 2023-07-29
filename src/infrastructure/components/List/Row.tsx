'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Photo } from '@/domain/models/photo.model';
import styles from './List.module.css';

import Modal from '../Modal/Modal';

const Row = ({ photo }: { photo: Photo }) => {
  const [isOpen, setOpen] = useState(false);

  const close = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <tr onClick={() => setOpen(true)} className={styles.cell}>
      <td>
        <Image
          className={styles.image}
          src={photo.thumbnailUrl}
          alt={photo.title}
          height={90}
          width={90}
        />
      </td>
      <td>{photo.title}</td>
      <td>{photo.id}</td>
      <td>{photo.albumId}</td>
      {isOpen ? (
        <Modal close={() => setOpen(false)}>
          <Image src={photo.url} alt={photo.title} width={600} height={600} />
          <button onClick={close}>Close</button>
        </Modal>
      ) : null}
    </tr>
  );
};

export default Row;
