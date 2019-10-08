import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.objRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = "ref 1";
      this.pRef.textContent = "ref 2";
      this.objRef.current.textContent = "ref 3"; // {current: null}
    }, 1000);
  }
  
  render() {
    return (
      <>
        <p ref="stringRef">1</p>
        <p ref={elem => this.pRef = elem}>2</p>
        <p ref={this.objRef}>3</p>
      </>
    );
  }
}

RefDemo.propTypes = {};

export default RefDemo;
