import { http } from './http.service';
import { Photo } from '@/domain/models/photo.model';
import { PhotoRepository } from '@/domain/repositories/photo.repo';

const _BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

const headers = {
  'Content-Type': 'application/json',
  next: {
    revalidate: 24 * 60 * 60,
  },
};

const getById = async (
  photoId: number | number[],
): Promise<Photo | Photo[]> => {
  if (Array.isArray(photoId)) {
    const query = photoId.map((id) => `id=${id}`).join('&');
    return (await http.get(`${_BASE_URL}?${query}`, headers)) as Photo[];
  }
  return (await http.get(`${_BASE_URL}/${photoId}`, headers)) as Photo;
};

const getByAlbum = async (albumId: number): Promise<Photo[]> => {
  return (await http.get(
    `${_BASE_URL}?albumId=${albumId}`,
    headers,
  )) as Photo[];
};

const getAlbumCover = async (albumId: number): Promise<Photo> => {
  // Note: this calculation is only possible as all albums have 50 photos
  // in a non-standard case we would have to query all the albums photos and take the first one
  const photoId = (albumId - 1) * 50 + 1;
  return (await http.get(`${_BASE_URL}/${photoId}`, headers)) as Photo;
};

export const photoService = {
  getById,
  getByAlbum,
  getAlbumCover,
} as PhotoRepository;
