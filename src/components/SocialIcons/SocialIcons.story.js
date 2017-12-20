import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialIcons from './SocialIcons';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around'
};

const socialList = [
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145802.svg',
    alt: 'ico-facebook'
  },
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145812.svg',
    alt: 'ico-twitter'
  },
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145805.svg',
    alt: 'ico-instagram'
  },
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145799.svg',
    alt: 'ico-behance'
  },
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145807.svg',
    alt: 'ico-in'
  },
  {
    href: '#',
    img: 'https://image.flaticon.com/icons/svg/145/145804.svg',
    alt: 'ico-google-plus'
  }
];


storiesOf('SocialIcons', module)
  .add('default', () => (
    <div>
      <SocialIcons icons={socialList}/>
    </div>
  ));
