import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Template } from '../src/components';

storiesOf('Template', module)
  .add('Default', () => <Template>Default Template</Template>);