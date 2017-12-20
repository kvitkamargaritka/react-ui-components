import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SocialIcons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SocialIcons extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icons: PropTypes.array
  };

  static defaultProps = {
    className: '',
    icons: []
  };

  getIcons = (icons) => {
    return icons.map((icon, index) => {
      return (
        <li className='social__el' key={index}>
          <a className='social__link' href={icon.href}>
            <img src={icon.img} alt={icon.alt}/>
          </a>
        </li>
      )
    })
  };

  render() {
    const { className, icons} = this.props;

    return (
      <ul className={`social ${className}`}>
        {icons.length ? this.getIcons(icons) : false}
      </ul>
    )
  }

}

export default SocialIcons;