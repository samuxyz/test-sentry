import React from 'react';

export default (componentName) => {
  class AsyncComponent extends React.Component {
    constructor (props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount () {
      const { Component } = this.state;
      if (!Component) {
        import(`components/${componentName}`)
        .then(module => module.default)
        .then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        })
        .catch((err) => console.error(err));
      }
    }

    render () {
      const { Component } = this.state;
      return Component ? <Component { ...this.props } /> : null;
    }
  }

  AsyncComponent.displayName = componentName;
  return AsyncComponent;
};
