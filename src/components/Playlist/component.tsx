import * as React from 'react';
import { Card, List } from 'semantic-ui-react'

import Player from 'src/components/Player/container';
import { IPlaylist } from 'src/types';
import Track from './Track/container';

const Playlist = ({ tracks, title, coverUrl }: IPlaylist) => (
  <Card fluid={true}>
    <div
      className="playlist-cover"
      style={{ backgroundImage: `url('${coverUrl}')` }}
    >
      <Player />
    </div>
    <div className="playlist-tracks">
      <List divided={true} relaxed={true} selection={true} verticalAlign="middle">
        {tracks.map((track, index) =>
          <Track
            key={track.id}
            index={index}
            {...track}
          />
        )}
      </List>
    </div>
  </Card>
);

export default Playlist;
