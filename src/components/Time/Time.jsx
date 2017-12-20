import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Time.css';

class Time extends Component {
  static propTypes = {
    date: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  componentWillMount() {
    this.startTime();
    console.log('start timer')
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('stop timer')
  };

  time = () => {
    const currentTime = new Date().toLocaleTimeString('en-GB');
    this.setState({
      date: currentTime
    });
  };

  startTime = () => {
    this.timer = setInterval(this.time, 1000);
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        {date}
      </div>
    );
  }
}


export default Time;