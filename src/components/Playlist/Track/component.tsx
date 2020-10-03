import * as React from 'react';
import { Image, List } from 'semantic-ui-react';

import { ITrack } from 'src/types';

export interface IProps extends ITrack {
  index: number
  currentTrack: number
  handleSelectTrack: VoidFunction
}

const Track = ({
  index,
  title,
  artist,
  coverUrl,
  currentTrack,
  handleSelectTrack,
}: IProps) => (
  <List.Item
    data-testid="track"
    onClick={handleSelectTrack}
    active={currentTrack === index}
  >
    <Image src={`../${coverUrl}`} className="track-cover" />
    <List.Content>
      <List.Header as="h3">
        {index + 1}. {title}
      </List.Header>
      <List.Description>
        by {artist}
      </List.Description>
    </List.Content>
  </List.Item>
);

export default Track;
