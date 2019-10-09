import React, { Component } from "react";
import PropTypes from "prop-types";

const { Provider, Consumer } = React.createContext("default");
const OuterContext = React.createContext({
  name: "User"
});

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
        <OuterContext.Provider value={{ name: "User" }}>
          <Provider value={this.state.newContext}>
            {this.props.children}
          </Provider>
        </OuterContext.Provider>
      </>
    );
  }
}

const Child = props => (
  <Consumer>{value => <p>Child new context: {value}</p>}</Consumer>
);

const Child2 = props => (
  <OuterContext.Consumer>
    {user => (
      <Consumer>
        {value => (
          <>
            <p>Users name: {user.name}</p>
            <p>Child two context: {value}</p>
          </>
        )}
      </Consumer>
    )}
  </OuterContext.Consumer>
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
