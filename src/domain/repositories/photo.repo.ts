import { Photo } from '../models/photo.model';

export interface PhotoRepository {
  getById: (photoId: number) => Promise<Photo>;
  getByAlbum: (albumId: number) => Promise<Photo[]>;
  getAlbumCover: (albumId: number) => Promise<Photo>;
}
