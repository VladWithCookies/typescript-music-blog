import * as React from 'react'

import ArchiveItemComponent from './component'

interface IProps {
  year: string
  coverUrl: string
}

interface IState {
  active: boolean
}

class ArchiveItem extends React.Component<IProps, IState> {
  state = {
    active: true
  }

  handleMouseEnter = () => {
    this.setState({ active: false })
  }

  handleMouseLeave = () => {
    this.setState({ active: true })
  }

  render() {
    const { year, coverUrl } = this.props

    return (
      <ArchiveItemComponent
        year={year}
        coverUrl={coverUrl}
        active={this.state.active}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

export default ArchiveItem
