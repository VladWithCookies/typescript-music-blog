import { render, fireEvent, screen } from 'src/lib/testUtils';
import Player from '.';

describe('Player component', () => {
  beforeEach(() => {
    render(Player, { route: '/playlist/2018', path: '/playlist/:year' });
  });

  it('plays track', () => {
    fireEvent.click(screen.getByTestId('play-button'));

    expect(screen.getByTestId('pause-button')).toBeInTheDocument();
  });

  it('pauses track', () => {
    fireEvent.click(screen.getByTestId('play-button'));
    fireEvent.click(screen.getByTestId('pause-button'));

    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });

  it('plays next track', () => {
    fireEvent.click(screen.getByTestId('forward-button'));

    expect(screen.getByTestId('track-title')).toHaveTextContent('Sergio Mendes & Brasil \'66 - Mas Que Nada');
  });

  it('plays prev track', () => {
    fireEvent.click(screen.getByTestId('forward-button'));
    fireEvent.click(screen.getByTestId('backward-button'));

    expect(screen.getByTestId('track-title')).toHaveTextContent('TOKiMONSTA - Rouge');
  });
});
