import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import 'font-awesome/css/font-awesome.css';
import Icon from 'react-fontawesome';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    status: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    status: '',
    size: '',
    icon: '',
    disabled: false,
    loading: false,
    onClick: () => {}
  };

  getIcon = (icon) => <Icon className='btn__icon' name={icon} />;

  getLoader = () => <Icon name='spinner' spin={true} />;

  render() {
    const { children, className, status, disabled, size, icon, loading, onClick } = this.props;
    const isDisabled = disabled ? 'disabled' : '';
    const withoutChildren = children ? '' : 'no-children';
    const btnClass = `btn ${className} ${status} ${isDisabled} ${size} ${withoutChildren}`;

    return (
      <button onClick={onClick} className={btnClass}>
        { !loading && children }
        { icon && this.getIcon(icon) }
        { loading && this.getLoader() }
      </button>
    );
  }
}

export default Button;
