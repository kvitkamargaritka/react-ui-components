import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './List.css';


class List extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array
  };

  static defgaultProps = {
    items: []
  };

  render() {
    const { items, className } = this.props;

    return (
      <ul className={`list ${className}`}>
        {items.length ? items.map((item, index) => {
          const bgEl = {backgroundColor:item.bgColor};
          return (
            <li key={index} style={bgEl}>{item.text}</li>
          );
        }) : false }
      </ul>
    )
  }

}

export default List;

// (params) => {}
// const name = (params) => {
//   params += 1;
//   console.log(params);
// };
//
// name(5);

