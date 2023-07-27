import { http } from './http.service';
import { photoService } from './photo.service';

import { Album } from '@/domain/models/album.model';
import { Photo } from '@/domain/models/photo.model';
import { AlbumRepository } from '@/domain/repositories/album.repo';

const _BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

const get = async (): Promise<Album[]> => {
  const albums = (await http.get(_BASE_URL)) as Album[];
  const albumIds = albums.map((album) => album.id);
  const covers = (await photoService.getById(albumIds)) as Photo[];
  for (let i = 0; i < albums.length; i++) {
    const { url, thumbnailUrl } = covers[i];
    albums[i].cover = url;
    albums[i].coverThumbnail = thumbnailUrl;
  }
  return albums;
};

const getById = async (albumId: number) => {
  const album = (await http.get(`${_BASE_URL}/${albumId}`)) as Album;
  const photo = await photoService.getAlbumCover(albumId);
  return {
    ...album,
    cover: photo.url,
    coverThumbnail: photo.thumbnailUrl,
  } as Album;
};

export const albumService = {
  get,
  getById,
} as AlbumRepository;
