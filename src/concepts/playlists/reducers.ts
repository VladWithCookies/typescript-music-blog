import { Reducer } from 'redux';

import { IPlaylist } from 'src/types';
import initialState from 'src/data/playlists';

export interface IPlaylistsState {
  [index: number]: IPlaylist;
}

const playlistsReducer: Reducer<IPlaylistsState> = (state = initialState) => state;

export default playlistsReducer;
