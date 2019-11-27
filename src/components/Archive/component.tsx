import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import ArchiveItem from './ArchiveItem'
import playlists from '../../data/playlists'

const Archive = () => (
  <Container className="archive">
    <h1 className="archive__header">
      12 Tracks of Year
    </h1>
    <Grid
      stackable
      columns={3}
      textAlign='left'
    >
      <Grid.Row>
        {playlists.map(({ year, coverUrl  }) => (
          <Grid.Column key={year}>
            <ArchiveItem
              year={year}
              coverUrl={coverUrl}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Container>
)

export default Archive
