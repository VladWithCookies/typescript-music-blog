import * as React from 'react';
import { Grid, Card, List } from 'semantic-ui-react';

import { IPlaylist } from 'src/types';
import Player from './Player';
import Track from './Track';
import Description from './Description';

const Playlist = ({ tracks, coverUrl, description }: IPlaylist) => (
  <Grid centered stackable columns={2}>
    <Grid.Column>
      <Card fluid className='playlist'>
        <div
          className="playlist__cover"
          style={{ backgroundImage: `url('../${coverUrl}')` }}
        >
          <Player />
        </div>
        <Description description={description} />
        <div className="playlist__tracks">
          <List divided relaxed selection verticalAlign="middle">
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
