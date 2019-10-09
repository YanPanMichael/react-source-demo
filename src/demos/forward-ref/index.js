import React, { Component } from "react";
import PropTypes from "prop-types";

const InputComp = React.forwardRef((props, ref) => (
  <div>
    <input
      type="text"
      {...props}
      ref={ref}
      onChange={e => props.changeText(e.target.value)}
    />
    <p>{props.text}</p>
  </div>
));

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.objRef = React.createRef();
    this.state = {
      text: ""
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    this.objRef.current.placeholder = "new changeds";
    // this.objRef.current.value = "Try delete this content";
    console.log(this.objRef.current.getBoundingClientRect().left);
  }

  changeText(newText) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <InputComp
        ref={this.objRef}
        changeText={this.changeText}
        text={this.state.text}
      />
    );
  }
}

ComponentDemo.propTypes = {};

export default ComponentDemo;
