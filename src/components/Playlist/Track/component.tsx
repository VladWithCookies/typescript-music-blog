import * as React from 'react';
import { Image, List } from 'semantic-ui-react';

import { ITrack } from 'src/types';

export interface IProps extends ITrack {
  index: number;
  handleSelectTrack: VoidFunction;
}

const Track = ({ title, artist, coverUrl, index, handleSelectTrack }: IProps) => (
  <List.Item onClick={handleSelectTrack}>
    <Image src={coverUrl} className="track-cover" />
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
