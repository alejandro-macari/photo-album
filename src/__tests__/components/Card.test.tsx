import { render } from '@testing-library/react';
import { mockAlbum } from '../__mocks__/mock';
import Card from '@/infrastructure/components/Card/Card';

test('Card should render correct information', () => {
  const card = render(<Card album={mockAlbum} />);

  const link = card.getByRole('link');
  const title = card.getByText(`Title: ${mockAlbum.title}`);
  const subtitle = card.getByText(`Album Id: ${mockAlbum.id}`);
  const image = card.getByAltText(`${mockAlbum.title} cover`);

  expect(link.href).toContain(`/album/${mockAlbum.id}`);
  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  card.unmount();
});
