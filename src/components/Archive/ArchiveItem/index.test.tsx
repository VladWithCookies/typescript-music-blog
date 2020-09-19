import * as React from 'react';

import { render, fireEvent, screen } from '../../../lib/testUtils';
import ArchiveItem from '.';

describe('ArchiveItem component', () => {
  const props = {
    year: '2018',
    coverUrl: 'playlist 2018.jpg',
  };

  beforeEach(() => {
    render(<ArchiveItem {...props} />);
  });

  it('becomes active', () => {
    fireEvent.mouseEnter(screen.getByTestId('archive-item'));

    expect(screen.getByTestId('archive-item')).not.toHaveClass('dimmed');
  });

  it('becomes inactive', () => {
    fireEvent.mouseLeave(screen.getByTestId('archive-item'));

    expect(screen.getByTestId('archive-item')).toHaveClass('dimmed');
  });
});
