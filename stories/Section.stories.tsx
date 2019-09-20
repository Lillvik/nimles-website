import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Section } from '../src/components';

storiesOf('Section', module)
  .add('Default', () => <Section>Default Section</Section>);