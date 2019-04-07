import React, { Component } from "react";
import Typing from "react-typing-animation";
import paperimg from "../img/paper.png";
import stoneimg from "../img/stone.png";
import scissors from "../img/scissors.png";
import { ScrollTo } from "react-scroll-to";
import {
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  Avatar
} from "@material-ui/core";
class Main extends Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#C2185B", height: "1050px" }}>
        {/* <h1>jdgdgg</h1> */}
        <Grid container justify="center">
          <Grid item md={6}>
            <Typography
              variant="h3"
              gutterBottom
              style={{ textAlign: "center", color: "white" }}
            >
              Stone Paper Scissor Game
            </Typography>
            <Typography
              component="h4"
              variant="display1"
              gutterBottom
              style={{ textAlign: "center", color: "white" }}
            >
              <Typing loop speed={150}>
                <span>Hey There!!</span>

                <Typing.Backspace count={12} />
                <span>Welcome</span>
                <Typing.Backspace count={8} />
                <span>Let's Play</span>
                <Typing.Backspace count={11} />
              </Typing>
            </Typography>
          </Grid>
          <Grid item md={12} />
          <Grid item md={4} style={{ alignContent: "center", height: "300px" }}>
            <img
              src={stoneimg}
              style={{
                height: "100px",
                width: "100px",
                paddingTop: "50px",
                paddingLeft: "300px"
              }}
              alt=""
            />
            <br />
            <Typography
              variant="h6"
              gutterBottom
              style={{ paddingLeft: "320px", color: "white" }}
            >
              Stone
            </Typography>
          </Grid>
          <Grid item md={4} style={{ alignContent: "center", height: "300px" }}>
            <img
              src={paperimg}
              style={{
                height: "100px",
                width: "100px",
                paddingTop: "50px",
                paddingLeft: "190px"
              }}
              alt=""
            />
            <br />
            <Typography
              variant="h6"
              gutterBottom
              style={{ paddingLeft: "220px", color: "white" }}
            >
              Paper
            </Typography>
          </Grid>
          <Grid item md={4} style={{ alignContent: "center", height: "300px" }}>
            <img
              src={scissors}
              style={{
                height: "100px",
                width: "100px",
                paddingTop: "50px",
                paddingLeft: "120px"
              }}
              alt=""
            />
            <br />
            <Typography
              variant="h6"
              gutterBottom
              style={{ paddingLeft: "130px", color: "white" }}
            >
              Scissor
            </Typography>
          </Grid>
          <Grid item md={4} />
          <Grid item md={6}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "white", paddingTop: "20px" }}
            >
              Enter Your Name
            </Typography>
            <br />
            <TextField
              id="outlined-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="dense"
              variant="outlined"
              style={{ width: "240px", backgroundColor: "white" }}
            />
          </Grid>
          <Grid item md={5}>
            {}
          </Grid>
          <Grid item md={6} style={{ paddingTop: "10px" }}>
            <Button
              variant="outlined"
              color="inherit"
              style={{ color: "white" }}
            >
              <ScrollTo>
                {({ scrollTo }) => (
                  <a onClick={() => scrollTo({ y: 600, smooth: true })}>
                    Let's Go!
                  </a>
                )}
              </ScrollTo>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
