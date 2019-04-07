import Typing from "react-typing-animation";
import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <Typing>
        <span>This span will get typed.</span>
        <Typing.Backspace count={20} />
      </Typing>
    );
  }
}

export default Content;
// const AnimatedTypingComponent = () => (

// );
