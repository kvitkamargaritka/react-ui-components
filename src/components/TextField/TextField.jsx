import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    focused: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    type: '',
    label: '',
    errorText: '',
    error: false,
    onChange: () => {},
    onFocus: () => {},
    onClick: () => {}
  };

  onChange = (event) => {
    const { onChange } = this.props;
    const value = event.target.value;

    this.setState({
      value
    }, );

    onChange(event);
  };

  render() {
    const { label, error, errorText, onFocus, onClick, className, type } = this.props;
    const { value } = this.state;
    const isError = error ? 'is-error' : '';
    const isValue = value ? 'with-value' : '';
    const textFieldClass = `text-field ${className} ${isError} ${isValue}`;

    return (
      <div className={textFieldClass}>
          <input type={type}
                 className='text-field__input'
                 onChange={(event) => this.onChange(event)}
                 onClick={onClick}
                 onFocus={onFocus}
                 value={value} />
        {label && (<label className='text-field__label'>{label}</label>)}
        {(error && errorText) && (<span className='text-field__error'>{errorText}</span>)}
      </div>
    );
  }
}

export default TextField;
