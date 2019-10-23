import { find } from 'lodash'

import { IApplicationState } from 'src/store';
import { IPlaylist } from 'src/types';

export const playlistSelector = (state: IApplicationState, year: string): IPlaylist | undefined =>
  find(state.playlists, { year });
