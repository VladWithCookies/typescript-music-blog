import * as React from 'react';
import { Grid, Card, List, Sticky } from 'semantic-ui-react'

import Player from 'src/components/Player/container';
import { IPlaylist } from 'src/types';
import Track from './Track/container';

const Playlist = ({ tracks, coverUrl }: IPlaylist) => (
  <Grid centered stackable columns={2}>
    <Grid.Column>
      <Card fluid={true}>
        <Sticky>
          <div
            className="playlist-cover"
            style={{ backgroundImage: `url('${coverUrl}')` }}
          >
            <Player />
          </div>
        </Sticky>
        <div>
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
    </Grid.Column>
  </Grid>
);

export default Playlist;
