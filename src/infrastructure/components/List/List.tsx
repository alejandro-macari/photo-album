import styles from './List.module.css';
import { Photo } from '@/domain/models/photo.model';
import Row from './Row';

interface Props {
  photos: Photo[];
}

const List = ({ photos }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Photos: {photos.length}</h3>
      <div className={styles.wrapper}>
        <table className={styles.list}>
          <thead>
            <tr className={styles.header}>
              <th>Photo</th>
              <th>Title</th>
              <th>Photo Id</th>
              <th>Album Id</th>
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {photos.map((photo) => (
              <Row key={photo.id} photo={photo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
