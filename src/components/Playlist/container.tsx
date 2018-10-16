import { connect } from 'react-redux';

import { IPlaylist } from 'src/types';
import { IApplicationState } from 'src/store';
import { playlistSelector } from 'src/concepts/playlists/selectors';
import PlaylistComponent from './component';

const mapStateToProps = (state: IApplicationState): IPlaylist => (
  playlistSelector(state)  
);

export default connect(mapStateToProps)(PlaylistComponent);
