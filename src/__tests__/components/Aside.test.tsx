import { render } from '@testing-library/react';
import { mockAlbum } from '../__mocks__/mock';
import Aside from '@/infrastructure/components/Aside/Aside';

test('Aside should render correct information', () => {
  const aside = render(<Aside album={mockAlbum} />);

  const title = aside.getByText(`Album title: ${mockAlbum.title}`);
  const subtitle = aside.getByText(`Album id: ${mockAlbum.id}`);
  const image = aside.getByAltText(`${mockAlbum.title} cover`);

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(image.src).toContain(encodeURIComponent(mockAlbum.cover));
  aside.unmount();
});
