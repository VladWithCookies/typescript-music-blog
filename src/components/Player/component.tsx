import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react'
import { ITrack } from '../../types';

interface IProps {
  audio: any; // FIXME
  track: ITrack,
  isPlaying: Boolean;
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
    handlePlay,
    handlePause,
    handleForward,
    handleBackward,
  }: IProps
) => (
  <Container textAlign="center">
    <Icon onClick={handleBackward} name="backward" size="huge" inverted={true} />
    {isPlaying
      ? <Icon onClick={handlePause} name="pause" size="massive" inverted={true} />
      : <Icon onClick={handlePlay} name="play" size="massive" inverted={true} />
    }
    <Icon onClick={handleForward} name="forward" size="huge" inverted={true} />
    <Header as="h1" inverted={true}>
      {track.artist} - {track.title}
    </Header>
    <audio ref={audio} src={track.trackUrl} />
  </Container>
);

export default Player;
