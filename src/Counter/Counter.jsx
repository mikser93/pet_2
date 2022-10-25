import React, { Component } from 'react';
import { Container } from './Counter.styled';
import Controls from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDicrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <span>{this.state.value}</span>
        <Controls
          OnIncrement={this.handleIncrement}
          OnDicrement={this.handleDicrement}
        />
      </Container>
    );
  }
}

export default Counter;