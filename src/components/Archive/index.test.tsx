import { render } from 'src/lib/testUtils';
import Archive from '.';

describe('Archive component', () => {
  const { container } = render(Archive);

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
