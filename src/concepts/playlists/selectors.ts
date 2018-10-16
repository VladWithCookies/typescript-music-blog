import { IApplicationState } from 'src/store';
import { IPlaylist } from 'src/types';

export const playlistSelector = (state: IApplicationState): IPlaylist => state.playlists[0];
