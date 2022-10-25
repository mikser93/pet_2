import { Component } from 'react';

export class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  
  handleDicrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by +1
        </button>
        <button type="button" onClick={this.handleDicrement}>
          Decrement by +1
        </button>
      </div>
    );
  }
}
