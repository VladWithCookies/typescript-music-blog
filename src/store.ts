import { createStore, combineReducers } from 'redux';

import reducers, {
  IPlayerState,
  IPlaylistsState,
} from './concepts';

const rootReducer = combineReducers(reducers);

export interface IApplicationState {
  player: IPlayerState;
  playlists: IPlaylistsState;
};

export default createStore(rootReducer);
