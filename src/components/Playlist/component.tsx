import * as React from 'react';
import { Card, Container, List } from 'semantic-ui-react'

import Player from 'src/components/Player/container';
import { IPlaylist } from 'src/types';
import Track from './Track/container';

const Playlist = ({ tracks, title, coverUrl }: IPlaylist) => (
  <Container>
    <Card fluid={true}>
      <div
        className="playlist-cover"
        style={{ backgroundImage: `url('${coverUrl}')` }}
      >
        <Player />
      </div>
      <List divided={true} relaxed={true} selection={true} verticalAlign="middle">
        {tracks.map((track, index) =>
          <Track
            key={track.id}
            index={index}
            {...track}
          />
        )}
      </List>
    </Card>
  </Container>
);

export default Playlist;
