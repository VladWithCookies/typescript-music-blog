import { action } from 'typesafe-actions'

import * as types from './types';

export const play = () => action(types.PLAY);
export const pause = () => action(types.PAUSE);
export const forward = () => action(types.FORWARD);
export const backward = () => action(types.BACKWARD);

export const selectTrack = (payload: number) =>
  action(types.SELECT, payload);
