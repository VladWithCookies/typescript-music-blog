import { connect } from 'react-redux';

import { IPlaylist } from 'src/types';
import { IApplicationState } from 'src/store';
import { playlistSelector } from 'src/concepts/playlists/selectors';
import PlaylistComponent from './component';

interface IProps {
  match: {
    params: {
      year: string
    }
  }
}

const mapStateToProps = (state: IApplicationState, props: IProps): IPlaylist | undefined => (
  playlistSelector(state, props.match.params.year)
);

export default connect(mapStateToProps)(PlaylistComponent);
