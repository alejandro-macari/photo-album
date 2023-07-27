import { Photo } from '../models/photo.model';

export interface PhotoRepository {
  getById: (photoId: number | number[]) => Promise<Photo | Photo[]>;
  getByAlbum: (albumId: number) => Promise<Photo[]>;
  getAlbumCover: (albumId: number) => Promise<Photo>;
}
