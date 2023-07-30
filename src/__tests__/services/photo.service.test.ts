import { photoService } from '@/infrastructure/services/photo.service';
import { mockPhoto, mockPhotoList } from '../__mocks__/mock';

test('Should return a list of photos', async () => {
  jest.spyOn(photoService, 'getByAlbum').mockResolvedValue(mockPhotoList);
  const albums = await photoService.getByAlbum(1);
  expect(albums).toBe(mockPhotoList);
});

test('Should return a list of photos', async () => {
  jest.spyOn(photoService, 'getAlbumCover').mockResolvedValue(mockPhoto);
  const albums = await photoService.getAlbumCover(1);
  expect(albums).toBe(mockPhoto);
});

test('Should return a list of photos', async () => {
  jest.spyOn(photoService, 'getById').mockResolvedValue(mockPhoto);
  const albums = await photoService.getById(1);
  expect(albums).toBe(mockPhoto);
});
