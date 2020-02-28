import * as React from 'react';

import DescriptionComponent from './component';

interface IProps {
  description: string
}

interface IState {
  active: boolean
}

class Description extends React.Component<IProps, IState> {
  state = {
    active: false
  }

  handleClick = () => {
    this.setState((state) => ({ active: !state.active }))
  }

  render() {
    const { description } = this.props
    const { active } = this.state

    return (
      <DescriptionComponent
        active={active}
        description={description}
        onClick={this.handleClick}
      />
    );
  }
}

export default Description;
