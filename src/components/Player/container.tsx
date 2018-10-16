import * as React from 'react';

import PlayerComponent from './component';

class Player extends React.Component {
  private audio = React.createRef<HTMLAudioElement>();

  public handlePlay = (): void => {
    // TODO
  }

  public handlePause = (): void => {
    // TODO
  }
  
  public handleForward = (): void => {
    // TODO
  }

  public handleBackward = (): void => {
    // TODO
  }

  public render() {
    return (
      <PlayerComponent 
        audio={this.audio}
        handlePlay={this.handlePlay}
        handlePause={this.handlePause}
        handleForward={this.handleForward}
        handleBackward={this.handleBackward}
      />
    );
  }
}

export default Player;
