import * as React from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

interface IProps {
  active: boolean
  description: string
  onClick: VoidFunction
}

const Description: React.FC<IProps> = ({ active, description, onClick }) => (
  <Accordion >
    <Accordion.Title
      index={0}
      active={active}
      onClick={onClick}
    >
      <Icon name='dropdown' />
      Toggle playlist description
    </Accordion.Title>
    <Accordion.Content active={active}>
      <Segment basic>
        {description}
      </Segment>
    </Accordion.Content>
  </Accordion>
)

export default Description
