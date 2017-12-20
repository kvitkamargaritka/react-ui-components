import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around'
};

const list = [{
  id: 1,
  name: 'Home',
  href: '#'
}, {
  id: 2,
  name: 'Services',
  href: '#'
}, {
  id: 3,
  name: 'About us',
  href: '#'
}, {
  id: 4,
  name: 'Contact us',
  href: '#'
}];

storiesOf('Navigation', module)
  .add('default', () => (
    <div>
      <Navigation list={list}/>
    </div>
  ));
