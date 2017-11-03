import React, { Component } from 'react';
import Component2 from 'components/Component2';

export default class Inbox extends Component {
  constructor (props) {
    super(props);
    this.state = { show: false };
  }

  handleClick = () => this.setState({ show: true });

  render () {
    return (
      <div>
        <button id="btn-click" onClick={this.handleClick}>Click</button>
        {this.state.show && <Component2 name="Sam" />}
      </div>
    );
  }
};
