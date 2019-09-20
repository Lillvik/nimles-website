import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Container } from '../src/components';

storiesOf('Row', module)
  .add('Inside container', () => <Container style={{background: 'pink'}}><Row style={{background: 'white'}}>Row</Row></Container>);