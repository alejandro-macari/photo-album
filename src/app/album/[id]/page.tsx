import List from '@/infrastructure/components/List/List';
import Aside from '@/infrastructure/components/Aside/Aside';

import { albumService } from '@/infrastructure/services/album.service';
import { photoService } from '@/infrastructure/services/photo.service';

import styles from './page.module.css';

interface Props {
  params: {
    id: string;
  };
}

export default async function AlbumDetail({ params }: Props) {
  const album = await albumService.getById(parseInt(params.id));
  const photos = await photoService.getByAlbum(parseInt(params.id));

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <Aside album={album} />
      </div>
      <div className={styles.list}>
        <List photos={photos} />
      </div>
    </div>
  );
}
