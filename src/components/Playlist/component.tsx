import * as React from 'react'
import { Grid, Card, List, Sticky } from 'semantic-ui-react'

import Player from 'src/components/Player/container'
import { IPlaylist } from 'src/types'
import Track from './Track/container'
import Description from './Description'

const Playlist = ({ tracks, coverUrl, description }: IPlaylist) => (
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
        <Description description={description} />
        <div>
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
