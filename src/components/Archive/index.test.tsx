import * as React from 'react';

import { render } from '../../lib/testUtils';
import Archive from '.';

describe('Archive component', () => {
  const { container } = render(<Archive />);

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
