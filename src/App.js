import React, { Component } from 'react';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css';
import './App.css';

// import Button from './components/Button/Button'

/**
 * Navigation
 * Navigation must be generated from array of objects
 * Create component
 */


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
