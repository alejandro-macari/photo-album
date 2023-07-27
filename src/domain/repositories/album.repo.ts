import { Album } from '../models/album.model';

export interface AlbumRepository {
  get: () => Promise<Album[]>;
  getById: (albumId: number) => Promise<Album>;
}
