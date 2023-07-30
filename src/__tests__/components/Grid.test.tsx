import { render } from '@testing-library/react';
import Grid from '@/infrastructure/components/Grid/Grid';

test('Grid should display childs', () => {
  const grid = render(
    <Grid>
      <div data-testid="children">test</div>
    </Grid>,
  );

  const child = grid.getByTestId('children');

  expect(child.innerHTML).toBe('test');
  grid.unmount();
});
