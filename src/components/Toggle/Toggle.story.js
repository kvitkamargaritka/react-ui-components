import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Toggle from './Toggle';
// import { action } from '@storybook/addon-actions';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'center'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    }
  }

  toggleCheckbox = () => {
    this.setState({
      checked: !this.state.checked
    })
  };

  render() {
    const { checked } = this.state;

    return (
      <div>
        <Toggle onChange={this.toggleCheckbox} checked={checked} />
        <Toggle onChange={this.toggleCheckbox} checked={!checked} />
      </div>
    )
  };
}

storiesOf('Toggle', module)
  .add('default', () => (
    <div>
      <App />
    </div>
  ));