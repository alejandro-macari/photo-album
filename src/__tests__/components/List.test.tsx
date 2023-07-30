import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { mockPhotoList, mockPhoto } from '../__mocks__/mock';
import List from '@/infrastructure/components/List/List';
import Row from '@/infrastructure/components/List/Row';

test('List should render all photos', () => {
  const list = render(<List photos={mockPhotoList} />);

  const table = list.getByTestId('table-body');

  expect(table.childElementCount).toBe(1);
  list.unmount();
});

test('Row should render photo information', () => {
  const row = render(
    <table>
      <tbody>
        <Row photo={mockPhoto} />
      </tbody>
    </table>,
  );

  const image = row.getByRole('img');
  const title = row.getByText(mockPhoto.title);
  const photoId = row.getByTestId('photo-id');
  const albumId = row.getByTestId('album-id');

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(photoId).toBeInTheDocument();
  expect(albumId).toBeInTheDocument();
  row.unmount();
});

test('Row should display modal when clicked', async () => {
  const row = render(
    <div id="modal">
      <table>
        <tbody>
          <Row photo={mockPhoto} />
        </tbody>
      </table>
    </div>,
  );

  const internalRow = row.getByTestId('row');
  await userEvent.click(internalRow);
  const modal = screen.getByTestId('modal');
  expect(modal).toBeInTheDocument();
  row.unmount();
});
