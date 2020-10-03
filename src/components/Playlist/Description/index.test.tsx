import { render, fireEvent, screen } from 'src/lib/testUtils';
import Description from '.';

describe('Description component', () => {
  const props = {
    description: 'description of the playlist',
  };

  beforeEach(() => {
    render(Description, { props });
  });

  it('toggles description', () => {
    fireEvent.click(screen.getByTestId('description-title'));

    expect(screen.getByTestId('description')).toHaveClass('active');

    fireEvent.click(screen.getByTestId('description-title'));

    expect(screen.getByTestId('description')).not.toHaveClass('active');
  });
});
