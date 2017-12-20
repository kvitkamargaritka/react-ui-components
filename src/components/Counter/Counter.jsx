import React, { Component } from 'react';
import './Counter.css';

import Button from './../Button/Button'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count += 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count -= 1
    });
  };

  render() {

    return (

      <div>
        <Button status='danger' icon='minus' onClick={this.decrement} />
        <span>{this.state.count}</span>
        <Button status='success' icon='plus' onClick={this.increment} />
      </div>

    );
  }
}

export default Counter;
