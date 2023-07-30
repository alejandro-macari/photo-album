import { http } from './http.service';
import { photoService } from './photo.service';

import { Album } from '@/domain/models/album.model';
import { Photo } from '@/domain/models/photo.model';
import { AlbumRepository } from '@/domain/repositories/album.repo';

const _BASE_URL = 'https://jsonplaceholder.typicode.com/albums';
const _ALBUMS_KEY = "albums"

const headers = {
  'Content-Type': 'application/json',
  'next': {
    'revalidate': 24 * 60 * 60
  }
}

interface Cache {
    data: { [id: string]: Album },
    timestamp: number
}

const getDataFromStorage = (): Cache | null => {
  const storage = localStorage.getItem(_ALBUMS_KEY);
  if (storage) {
    return JSON.parse(storage) as Cache
  }
  return null
}

const setDataToStorage = (albums: Album[]) => {
  localStorage.setItem(_ALBUMS_KEY, JSON.stringify({
    data: albums.reduce((prev, curr) => ({...prev, [curr.id]: curr }), {}),
    timestamp: new Date().getTime()
  }))
}

const get = async (): Promise<Album[]> => {
  const cache = getDataFromStorage();
  const now = new Date().getTime()

  if (!cache || Object.values(cache.data).length < 100 || now - cache.timestamp > 24 * 60 * 60 * 1000) {
    console.log("fetchin")
    const albums = (await http.get(_BASE_URL)) as Album[];
    const albumIds = albums.map((album) => album.id);
    const covers = (await photoService.getById(albumIds)) as Photo[];
    for (let i = 0; i < albums.length; i++) {
      const { url, thumbnailUrl } = covers[i];
      albums[i].cover = url;
      albums[i].coverThumbnail = thumbnailUrl;
    }
    setDataToStorage(albums)
    return albums;
  }
  
  return Object.values(cache.data);
};

const getById = async (albumId: number) => {
  const album = (await http.get(`${_BASE_URL}/${albumId}`, headers)) as Album;
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
