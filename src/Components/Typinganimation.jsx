import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";
class Typinganimation extends Component {
  state = {};
  render() {
    return (
      <div>
        <Typography
          component="h4"
          variant="display1"
          gutterBottom
          style={{ textAlign: "center", color: "white" }}
        >
          <Typing loop speed={170}>
            <span> </span>
            <Typing.Reset count={1} delay={50} />

            <span>Hey There!! </span>

            <Typing.Backspace count={12} />

            <span> </span>
            <Typing.Reset count={1} delay={50} />
            <span>Welcome </span>
            <Typing.Backspace count={8} />

            <span> </span>
            <Typing.Reset count={1} delay={50} />
            <span>Let's Play</span>
            <Typing.Backspace count={10} />
          </Typing>
        </Typography>
      </div>
    );
  }
}

export default Typinganimation;
