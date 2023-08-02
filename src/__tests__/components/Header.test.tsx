import { render } from '@testing-library/react';
import Header from '@/infrastructure/components/Header/Hearder';

describe('Header should have link to home page', () => {});

test('Header should have link to home page', async () => {
  const header = render(<Header />);
  const link = header.getByTestId('homelink') as HTMLAnchorElement;
  expect(link).toBeInTheDocument();
  expect(link).toHaveProperty('href');
  expect(link.href).toContain('/');
  header.unmount();
});
