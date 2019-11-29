import * as React from 'react';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

interface IProps {
  active: boolean
  description: string
  onClick: VoidFunction
}

const Description: React.FC<IProps> = ({ active, description, onClick }) => (
  <Segment basic inverted color='black' style={{ margin: 0 }}>
    <Accordion>
      <Accordion.Title
        style={{ color: 'white' }}
        index={0}
        active={active}
        onClick={onClick}
      >
        <Icon name='dropdown' />
        Playlist Description
      </Accordion.Title>
      <Accordion.Content active={active}>
        <Segment basic color='black' inverted padded={false}>
          {description}
        </Segment>
      </Accordion.Content>
    </Accordion>
  </Segment>
);

export default Description;
