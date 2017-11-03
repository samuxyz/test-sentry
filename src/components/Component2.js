import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Component2 extends Component {
  static propTypes = {
      name: PropTypes.bool,
  }

  render () {
    return (
      <div>
        <h2>I am the second component!</h2>
      </div>
    );
  }
};
