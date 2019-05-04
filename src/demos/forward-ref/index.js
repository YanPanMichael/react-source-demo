import React, { Component } from "react";
import PropTypes from "prop-types";

const InputComp = React.forwardRef((props, ref) => (
  <input type="text" {...props} ref={ref} />
));

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.objRef = React.createRef();
  }

  componentDidMount() {
    this.objRef.current.placeholder = "new changeds";
    this.objRef.current.value = "Try delete this content";
    console.log(this.objRef.current.getBoundingClientRect().left);
  }

  render() {
    return <InputComp ref={this.objRef} />;
  }
}

ComponentDemo.propTypes = {};

export default ComponentDemo;
