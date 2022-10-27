import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    secondName: '',
    licence: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', secondName: '' });
  };

  handleLicenseChange=e=>{
    console.log(e.currentTarget.checked);
    this.setState({licence: e.currentTarget.checked })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Second Name
          <input
            type="text"
            name="secondName"
            value={this.state.secondName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handleLicenseChange}/>
            agree with license
        </label>
        <button type="submit" disabled={!this.state.licence}>Send</button>
      </form>
    );
  }
}

export default Form;
