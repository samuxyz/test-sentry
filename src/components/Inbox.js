import React, { Component } from 'react';
import Component2 from 'components/Component2';
import Raven from 'raven-js';

/* function handleRouteError(err) {
  Raven.captureException(err);
  Raven.showReportDialog();
};*/

export default class Inbox extends Component {
  constructor (props) {
    super(props);
    this.state = { show: false };
  }

  handleClick = () => {
    // try {
    this.setState({ show: true });
    // } catch (e) {
    //  handleRouteError(e);
    // }
  }

  render () {
    return (
      <div>
        <button id="btn-click" onClick={this.handleClick}>Click</button>
        {this.state.show && <Component2 name="Sam" />}
      </div>
    );
  }
};
