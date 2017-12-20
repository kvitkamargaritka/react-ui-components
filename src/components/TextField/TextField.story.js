import React from 'react';
import { storiesOf, action } from '@storybook/react';
import TextField from './TextField';

const container = {
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
};

const defaultProps = {
  label: 'email',
  type: 'email',
  name: 'email',
  onChange: action('input changed'),
  onFocus: action('input is focused')
};

const errorProps = Object.assign({}, defaultProps, { error: true });
const errorTextProps = Object.assign({}, defaultProps, { error: true, errorText: 'Invalid email address'  });

storiesOf('TextField', module)
  .add('default', () => (
    <div style={container}>
      <TextField {...defaultProps} />
    </div>
  ))
  .add('error', () => (
    <div style={container}>
      <TextField {...errorProps} />
      <TextField {...errorTextProps} />
    </div>
  ));

