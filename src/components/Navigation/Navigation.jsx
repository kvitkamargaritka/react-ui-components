import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends PureComponent {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;

    return (
      <div>
        <nav>
          <ul>
            {list.length ? list.map(el => {

              return (
                <li key={el.id}>
                  <a href={el.href}>
                    {el.name}
                  </a>
                </li>
              );
            }) : false}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;