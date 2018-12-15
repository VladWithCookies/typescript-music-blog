import * as React from 'react';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';

import { play, pause, backward, forward } from 'src/concepts/player/actions';
import { IApplicationState } from 'src/store';
import { ITrack } from '../../types';
import PlayerComponent from './component';

interface IProps {
  track: ITrack;
  play: Function;
  pause: Function;
  forward: Function;
  backward: Function;
  isPlaying: Boolean;
}

class Player extends React.Component<IProps> {
  private audio = React.createRef<HTMLAudioElement>();

  componentDidUpdate(nextProps: IProps) {
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

const mapStateToProps = (state: IApplicationState) => ({
  track: state.playlists[0].tracks[state.player.currentTrack], //FIXME
  isPlaying: state.player.isPlaying
});

const mapDispatchToProps = {
  play,
  pause,
  forward,
  backward,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
