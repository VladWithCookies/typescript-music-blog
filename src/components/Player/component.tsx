import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react'

import { ITrack } from '../../types';

interface IProps {
  audio: any; // FIXME
  track: ITrack,
  isPlaying: Boolean;
  currentTrack: number;
  playlistLength: number;
  handlePlay: VoidFunction;
  handlePause: VoidFunction;
  handleForward: VoidFunction;
  handleBackward: VoidFunction;
}

const Player = (
  {
    audio,
    track,
    isPlaying,
    currentTrack,
    playlistLength,
    handlePlay,
    handlePause,
    handleForward,
    handleBackward,
  }: IProps
) => (
  <Container textAlign="center" className="player">
    <Icon
      inverted
      size="huge"
      name="backward"
      onClick={handleBackward}
      link={currentTrack !== 0}
      disabled={currentTrack === 0}
    />
    {isPlaying
      ? <Icon onClick={handlePause} className="player__control" name="pause" size="huge" inverted link />
      : <Icon onClick={handlePlay}  className="player__control" name="play" size="huge" inverted link />
    }
    <Icon
      inverted
      size="huge"
      name="forward"
      onClick={handleForward}
      link={currentTrack !== playlistLength}
      disabled={currentTrack === playlistLength}
      className="player__control"
    />
    <Header as="h3" inverted>
      {track.artist} - {track.title}
    </Header>
    <audio ref={audio} src={track.trackUrl} />
  </Container>
);

export default Player;
