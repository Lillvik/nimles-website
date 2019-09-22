import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonProps } from '../src/components';

const ButtonStory = (props: ButtonProps) =>
  <div style={{display: 'flex'}}>
    <div style={{padding: 10}}><Button {...props}>{props.children}</Button></div> //themes is on props.
    <div style={{padding: 10}}><Button border {...props}>{props.children} with Border</Button></div>
    <div style={{padding: 10}}><Button raised {...props}>Raised {props.children}</Button></div>
  </div>;

storiesOf('Button', module)
  .add('Default', () => <ButtonStory>Default</ButtonStory>)
  .add('Primary', () => <ButtonStory primary>Primary</ButtonStory>) 
  .add('Secondary', () => <ButtonStory secondary>Secondary</ButtonStory>);

