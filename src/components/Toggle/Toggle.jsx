import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

class Toggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defautProps = {
    checked: false,
    onChange: () => {}
  };

  render() {
    const { checked, onChange } = this.props;

    return (
      <div onChange={onChange}>
        <label className='label'>
          <input type='checkbox' className='checkbox' checked={checked}/>
          <span className='switch round' />
        </label>
      </div>
    );
  }
}

export default Toggle;
