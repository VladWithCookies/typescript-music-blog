import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dimmer, Image } from 'semantic-ui-react'

interface IProps {
  year: string
  active: boolean
  coverUrl: string
  onMouseEnter: VoidFunction
  onMouseLeave: VoidFunction
}

const ArchiveItem: React.FC<IProps> = ({
  year,
  active,
  coverUrl,
  onMouseEnter,
  onMouseLeave,
}) => (
  <Dimmer.Dimmable
    src={coverUrl}
    dimmed={active}
    className='archive-item'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={`playlist/${year}`}>
      <Image src={coverUrl} className='archive-item__image' />
    </Link>
    <Dimmer content={year} active={active} />
  </Dimmer.Dimmable>
)

export default ArchiveItem
