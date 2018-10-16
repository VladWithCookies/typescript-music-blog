import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react'

interface IProps {
  audio: any;
  handlePlay: VoidFunction;
  handlePause: VoidFunction;
  handleForward: VoidFunction;
  handleBackward: VoidFunction;
} 

const Player = (
  {
    audio,
    handlePlay,
    handlePause,
    handleForward,
    handleBackward 
  }: IProps
) => (
  <Container textAlign="center">
    <Icon onClick={handleBackward} name="backward" size="huge" inverted={true} />
    <Icon onClick={handlePlay} name="play" size="massive" inverted={true} />
    <Icon onClick={handleForward} name="forward" size="huge" inverted={true} />
    <Header as="h1" inverted={true}>
      Test - Test
    </Header>
    <audio ref={audio} />
  </Container>
);

export default Player;
