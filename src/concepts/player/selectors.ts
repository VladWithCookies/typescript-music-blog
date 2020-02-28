import { find } from 'lodash';

import { IApplicationState } from 'src/store';
import { ITrack } from 'src/types';

export const cuurentTrackSelector = (state: IApplicationState, year: string): ITrack | undefined => {
  const playlist = find(state.playlists, { year });
  const index = state.player.currentTrack;

  return playlist && playlist.tracks[index];
}
