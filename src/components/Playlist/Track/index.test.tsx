import { render, fireEvent, screen } from 'src/lib/testUtils';
import Track from '.';

describe('Track component', () => {
  beforeEach(() => {
    render(Track);
  });

  it('plays track', () => {
    fireEvent.click(screen.getByTestId('track'));

    expect(screen.getByTestId('track')).toHaveClass('active');
  });
});
