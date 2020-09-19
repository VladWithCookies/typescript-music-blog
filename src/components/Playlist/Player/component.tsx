import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

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
  }: any
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
      : <Icon onClick={handlePlay} className="player__control" name="play" size="huge" inverted link />
    }
    <Icon
      inverted
      size="huge"
      name="forward"
      onClick={handleForward}
      link={currentTrack !== playlistLength - 1}
      disabled={currentTrack === playlistLength - 1}
      className="player__control"
    />
    <Header as="h3" inverted>
      {track.artist} - {track.title}
    </Header>
    <audio ref={audio} src={`../${track.trackUrl}`} />
  </Container>
);

export default Player;
