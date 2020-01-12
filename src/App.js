import React, { Component } from "react";
import RefDemo from "./demos/ref/index";
import ComponentDemo from "./demos/forward-ref/index";
import ContextDemo from "./demos/context/index";
import HooksDemo from "./demos/hooks/index";
import ChildrenDemo from "./demos/children/index";
import SuspenseDemo from "./demos/suspense/demo2/index";
import Suspense1Demo from "./demos/suspense/demo1/index";
import UseMemoDemo from "./demos/useMemo/useMemo";
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

          <h3>HooksDemo</h3>
          <p>
            <HooksDemo />
          </p>

          <h3>ChildrenDemo</h3>
          <p>
            <ChildrenDemo />
          </p>

          <h3>SuspenseDemo</h3>
          <p>
            <SuspenseDemo />
            <Suspense1Demo />
          </p>

          <h3>UseMemoDemo</h3>
          <p>
            <UseMemoDemo />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
