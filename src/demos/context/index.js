import React, { Component } from "react";
import PropTypes from "prop-types";

const { Provider, Consumer } = React.createContext("default");

class Parent extends Component {
  state = {
    newContext: ""
  };

  render() {
    return (
      <>
        <label>newContext:</label>
        <input
          type="text"
          value={this.state.newContext}
          onChange={input => this.setState({ newContext: input.target.value })}
        />
        <Provider value={this.state.newContext}>{this.props.children}</Provider>
      </>
    );
  }
}

const Child = props => (
  <Consumer>{value => <p>Child new context: {value}</p>}</Consumer>
);

const Child2 = props => (
  <Consumer>{value => <p>Child two context: {value}</p>}</Consumer>
);

Parent.propTypes = {};

export default () => (
  <Parent>
    <div>
      <Child />
      <Child2 />
    </div>
  </Parent>
);
