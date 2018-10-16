import { Reducer } from 'redux';

import * as types from './types';

export interface IPlayerState {
  isPlaying: boolean;
  currentTrack?: string;
};

const initialState: IPlayerState = {
  isPlaying: false,
  currentTrack: undefined,  
};

const playerReducer: Reducer<IPlayerState> = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAY:
      return { ...state, isPlaying: true };
    case types.PAUSE:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export default playerReducer;
