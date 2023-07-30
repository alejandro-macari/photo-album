import { albumService } from '@/infrastructure/services/album.service';
import { mockAlbum, mockAlbumList } from '../__mocks__/mock';

test('Should return a list of albums', async () => {
  jest.spyOn(albumService, 'get').mockResolvedValue(mockAlbumList);
  const albums = await albumService.get();
  expect(albums).toBe(mockAlbumList);
});

test('Should return am album', async () => {
  jest.spyOn(albumService, 'getById').mockResolvedValue(mockAlbum);
  const album = await albumService.getById(1);
  expect(album).toBe(mockAlbum);
});
