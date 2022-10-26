import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          type="button"
          onClick={this.toggle}
          className="Dropdown__toggle"
        >
          {visible ? 'Close' : 'Open'}
        </button>
        {visible && <div className="Dropdown__menu">Backdrop menu</div>}
      </div>
    );
  }
}

export default Dropdown;
