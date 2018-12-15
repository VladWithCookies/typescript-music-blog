import { Reducer } from 'redux';

import playlists from 'src/data/playlists.js';
import * as types from './types';

export interface IPlayerState {
  isPlaying: boolean;
  currentTrack: number;
};

const initialState: IPlayerState = {
  isPlaying: false,
  currentTrack: 0,
};

const playerReducer: Reducer<IPlayerState> = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAY:
      return { ...state, isPlaying: true };
    case types.PAUSE:
      return { ...state, isPlaying: false };
    case types.BACKWARD:
      const prevTrack: number = state.currentTrack - 1;

      return {
        ...state,
        currentTrack: prevTrack <= 0 ? 0 : prevTrack
      }
    case types.FORWARD:
      const tracklistLength: number = playlists[0].tracks.length; // FIXME
      const nextTrack: number = state.currentTrack + 1;

      return {
        ...state,
        currentTrack: nextTrack >= tracklistLength ? state.currentTrack : nextTrack
      }
    case types.SELECT:
      return {
        ...state,
        isPlaying: true,
        currentTrack: action.payload
      }
    default:
      return state;
  }
};

export default playerReducer;
