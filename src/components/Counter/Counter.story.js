import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'center'
};

storiesOf('Counter', module)
  .add('default', () => (
    <div>
      <Counter/>
    </div>
  ));