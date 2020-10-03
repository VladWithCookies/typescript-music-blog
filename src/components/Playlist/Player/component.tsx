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
      data-testid="backward-button"
      disabled={currentTrack === 0}
    />
    {isPlaying ? (
      <Icon
        link
        inverted
        size="huge"
        name="pause"
        onClick={handlePause}
        className="player__control"
        data-testid="pause-button"
      />
    ) : (
      <Icon
        link
        inverted
        name="play"
        size="huge"
        onClick={handlePlay}
        className="player__control"
        data-testid="play-button"
      />
    )}
    <Icon
      inverted
      size="huge"
      name="forward"
      onClick={handleForward}
      link={currentTrack !== playlistLength - 1}
      disabled={currentTrack === playlistLength - 1}
      className="player__control"
      data-testid="forward-button"
    />
    <Header
      as="h3"
      inverted
      data-testid="track-title"
    >
      {track.artist} - {track.title}
    </Header>
    <audio ref={audio} src={`../${track.trackUrl}`} />
  </Container>
);

export default Player;
