import * as React from 'react';
import { isEqual, flow } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { play, pause, backward, forward } from 'src/concepts/player/actions';
import { cuurentTrackSelector } from 'src/concepts/player/selectors';
import { playlistLengthSelector } from 'src/concepts/playlists/selectors';
import { IApplicationState } from 'src/store';
import PlayerComponent from './component';

class Player extends React.Component<any> {
  private audio = React.createRef<HTMLAudioElement>();

  componentDidMount() {
    const node = this.audio.current;

    if (node) {
      node.onended = () => {
        this.props.forward();
      }
    }
  }

  componentDidUpdate(nextProps: any) {
    const node = this.audio.current;

    if (node) {
      if (!isEqual(this.props.track, nextProps.track)) {
        node.load();
      }

      if (!isEqual(this.props, nextProps) && this.props.isPlaying) {
        node.play();
      }
    }
  }

  public handlePlay = (): void => {
    this.props.play();
  }

  public handlePause = (): void => {
    const node = this.audio.current;

    this.props.pause();

    if (node) {
      node.pause()
    }
  }

  public handleForward = (): void => {
    this.props.forward();
  }

  public handleBackward = (): void => {
    this.props.backward();
  }

  public render() {
    return (
      <PlayerComponent
        {...this.props}
        audio={this.audio}
        handlePlay={this.handlePlay}
        handlePause={this.handlePause}
        handleForward={this.handleForward}
        handleBackward={this.handleBackward}
      />
    );
  }
}

const mapStateToProps = (state: IApplicationState, props: any) => ({
  isPlaying: state.player.isPlaying,
  currentTrack: state.player.currentTrack,
  track: cuurentTrackSelector(state, props.match.params.year),
  playlistLength: playlistLengthSelector(state, props.match.params.year),
});

const mapDispatchToProps = {
  play,
  pause,
  forward,
  backward,
};

export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Player);
