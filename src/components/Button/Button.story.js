import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from './Button';

const container = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-around'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonIsLoading: true
    }
  }

  changeState = () => {
    this.setState({
      buttonIsLoading: !this.state.buttonIsLoading
    })
  };

  render() {
    const { buttonIsLoading } = this.state;

    return (
      <div>
        <Button loading={buttonIsLoading} onClick={this.changeState}>Text</Button>
      </div>
    )
  };
}

storiesOf('Button', module)
  .add('Types', () => (
    <div>
      <Button onClick={action('click on button default')}>default</Button>
      <Button status='success'>success</Button>
      <Button status='danger'>danger</Button>
    </div>
  ))
  .add('States', () => (
    <div>
      <Button disabled={true}>disabled</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button size='small'>small</Button>
      <Button>default</Button>
      <Button size='large'>large</Button>
    </div>
  ))
  .add('With icons', () => (
    <div>
      <Button icon='trash'>with icon</Button>
    </div>
  ))
  .add('Only icons', () => (
    <div>
      <Button icon='bath'/>
    </div>
  ))
  .add('With loading', () => (
    <div>
      <span>Click on Button for change state: </span>
      <App />
    </div>
  ));

