import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around'
};

const listItems = [
  {
    text: 'test 1',
    bgColor: 'red'
  },
  {
    text: 'test 2',
    bgColor: 'green'
  },
  {
    text: 'test 3',
    bgColor: 'orange'
  },
  {
    text: 'test 4',
    bgColor: 'blue'
  }
];

storiesOf('List', module)
  .add('default', () => (
    <div>
      <List items={listItems} element='div' />
    </div>
  ));
