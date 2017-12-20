import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './Slider';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around'
};

const slidesList = [
  { href: '',
    img: 'http://www.fubiz.net/wp-content/uploads/2015/09/starwarsiconsawakens-14.png',
    alt: 'starwars-icon'
  },
  {
    img: 'http://www.fubiz.net/wp-content/uploads/2015/09/starwarsiconsawakens-16.png',
    alt: 'starwars-icon'
  },
  {
    href: '#',
    img: 'http://www.fubiz.net/wp-content/uploads/2015/09/starwarsiconsawakens-10.png',
    alt: 'starwars-icon'
  },
  {
    img: 'http://www.fubiz.net/wp-content/uploads/2015/09/starwarsiconsawakens-3.png',
    alt: 'starwars-icon'
  },
  {
    href: '#',
    img: 'http://www.fubiz.net/wp-content/uploads/2015/09/starwarsiconsawakens-7.png',
    alt: 'starwars-icon'
  }
];


storiesOf('Slider', module)
  .add('default', () => (
    <div>
      <Slider slides={slidesList} />
    </div>
  ));
