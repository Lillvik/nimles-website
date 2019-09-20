import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Column, Container, Row } from '../src/components';

storiesOf('Column', module)
  .add('Inside row', () => <Container style={{background: 'pink'}}><Row style={{background: 'red'}}><Column style={{background: 'white'}}>Default Column</Column></Row></Container>);