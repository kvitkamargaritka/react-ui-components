import React from 'react';
import { storiesOf } from '@storybook/react';
import Time from './Time';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'center'
};

storiesOf('Time', module)
  .add('default', () => (
    <div>
      <Time/>
    </div>
  ));