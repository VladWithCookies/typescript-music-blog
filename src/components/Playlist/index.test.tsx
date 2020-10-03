import { render } from 'src/lib/testUtils';
import Playlist from '.';

describe('Playlist component', () => {
  const { container } = render(Playlist, { route: '/playlist/2018', path: '/playlist/:year' });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
