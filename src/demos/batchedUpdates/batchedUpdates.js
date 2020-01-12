import React from "react";
import { unstable_batchedUpdates as batchedUpdates } from "react-dom";

export default class BatchedUpdatesDemo extends React.Component {
  state = {
    number: 0
  };

  handleClick = () => {
    // 主动batchedUpdates
    // setTimeout(() => {
    //   batchedUpdates(() => this.counterNumber());
    // }, 0); // 0, 0, 0

    // setTimeout中没有‘batchedUpdates’
    // setTimeout(() => {
    //   this.counterNumber();
    // }, 0); // 1, 2, 3

    // // 直接setState, react事件处理函数自带‘batchedUpdates’
    this.counterNumber(); // 0, 0, 0
  };

  counterNumber() {
    const num = this.state.number;
    this.setState({
      number: num + 1
    }, () => {console.log(this.state.number+' after')});
    console.log(this.state.number);
    this.setState({
      number: num + 2
    }, () => {console.log(this.state.number+' after')});
    console.log(this.state.number);
    this.setState({
      number: num + 3
    }, () => {console.log(this.state.number+' after')});
    console.log(this.state.number);
  }

  render() {
    return <button onClick={this.handleClick}>Num: {this.state.number}</button>;
  }
}
