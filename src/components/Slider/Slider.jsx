import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from 'react-slick';

class Slider extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    slides: PropTypes.array
  };

  static defaultProps = {
    className: '',
    slides: []
  };

  getLink = (slide) => {
    return (
      <a href={slide.href} className='slide__link'>
        <img src={slide.img} alt={slide.img} className='slide__img'/>
      </a>
    )
  };

  getImg = (slide) => {
    return (
      <div className='slide'>
        <img src={slide.img} alt={slide.img} className='slide__img'/>
      </div>
    )
  };

  getSlides = (slides) => {
    return slides.map((slide, index) => {
      return (
        <div key={index} className='slide'>
          {slide.href ? this.getLink(slide) : this.getImg(slide)}
        </div>

      )
    })
  };

  render() {
    const { className, slides } = this.props;
    const sliderSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoPlay: true,
      speed: 500,
      slidesToShow: 1
    };

    return (
      <div className={`slider ${className}`}>
        <Slick {...sliderSettings}>
          {this.getSlides(slides)}
        </Slick>
      </div>
    )
  }

}

export default Slider;