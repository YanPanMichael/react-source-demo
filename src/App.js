import React, { Component } from "react";
import RefDemo from "./demos/ref/index";
import ComponentDemo from "./demos/forward-ref/index";
import ContextDemo from "./demos/context/index";
import ChildrenDemo from "./demos/children/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>createRef</h3>
          <p>
            <RefDemo />
          </p>

          <h3>ForwardRef</h3>
          <p>
            <ComponentDemo />
          </p>

          <h3>ContextRef</h3>
          <p>
            <ContextDemo />
          </p>

          <h3>ChildrenDemo</h3>
          <p>
            <ChildrenDemo />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
