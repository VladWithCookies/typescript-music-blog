import playerReducers, { IPlayerState } from './player';
import playlistsReducers, { IPlaylistsState } from './playlists';

export default {
  player: playerReducers,
  playlists: playlistsReducers,
};

export { 
  IPlayerState, 
  IPlaylistsState,
};
