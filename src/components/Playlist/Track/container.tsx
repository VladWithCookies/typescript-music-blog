import * as React from 'react';
import { connect } from 'react-redux';

import { ITrack } from 'src/types';
import { selectTrack } from 'src/concepts/player/actions';
import TrackComponent from './component';

interface IProps extends ITrack {
  index: number;
  selectTrack: Function;
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

const mapDispatchToProps = {
  selectTrack,
};

export default connect(null, mapDispatchToProps)(Track);
