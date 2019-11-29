import * as React from 'react';
import { connect } from 'react-redux';

import { ITrack } from 'src/types';
import { IApplicationState } from 'src/store';
import { selectTrack } from 'src/concepts/player/actions';
import TrackComponent from './component';

interface IProps extends ITrack {
  index: number
  selectTrack: Function
  currentTrack: number
}

class Track extends React.Component<IProps> {
  public handleSelectTrack = (): void => {
    this.props.selectTrack(this.props.index);
  }

  render() {
    return (
      <TrackComponent
        {...this.props}
        handleSelectTrack={this.handleSelectTrack}
      />
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  currentTrack: state.player.currentTrack
});

const mapDispatchToProps = {
  selectTrack,
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
