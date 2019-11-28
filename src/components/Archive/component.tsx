import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import ArchiveItem from './ArchiveItem'
import playlists from '../../data/playlists'

const Archive = () => (
  <Container className="archive" textAlign="left">
    <h1 className="archive__header">
      12 Tracks of Year Project
    </h1>
    <p>
      The project was created at March, 2018. The main idea is to create playlists from 12 handpicked songs each year.
      I pick one song each mounth starting from March and ending with February. Each song is my favorite songs of the mounth.
      This song can be a fresh release of the mounth or hidden by decades treasure which was a music discovery of the mounth for me.
      Mostly playlist contains songs in such genres as Downtempo, Hip-Hop, House but not only.
    </p>
    <h2 className="archive__header">
      Archive
    </h2>
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
