import React, { Component } from 'react';
import RefDemo from './demos/ref/index';
import ComponentDemo from './demos/forward-ref/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h3>createRef</h3>
            <RefDemo />
          </p>

          <p>
            <h3>ForwardRef</h3>
            <ComponentDemo />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
