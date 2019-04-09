import React, { Component } from "react";
import Typing from "react-typing-animation";
import paperimg from "../img/paper.png";
import stoneimg from "../img/stone.png";
import scissors from "../img/scissors.png";
import { ScrollTo } from "react-scroll-to";
import avatarimg from "../img/avatar.png";
import { Delay } from "react-delay";
import Dev from "./Dev";
import {
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  Avatar,
  Paper,
  Fab
} from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
class Main extends Component {
  state = {
    name: "",
    compscore: 0,
    playerscore: 0,
    nameset: "",
    userchoice: "",
    userchoiceNO: "",
    userchoicename: "",
    compchoice: "",
    compchoiceNO: "",
    compchoicename: "",
    timer: "",
    timeRemainingInSeconds: "",
    result: "",
    block: 1,
    display: 1
  };
  setPlayer = c => {
    if (c === 1) {
      this.setState({ userchoice: require("../img/stone.png") });
      this.setState({ userchoicename: "Stone" });
      this.setState({ userchoiceNO: 1 });
    } else if (c == 2) {
      this.setState({ userchoice: require("../img/paper.png") });
      this.setState({ userchoicename: "Paper" });
      this.setState({ userchoiceNO: 2 });
    } else if (c === 3) {
      this.setState({ userchoice: require("../img/scissors.png") });
      this.setState({ userchoicename: "Scissor" });
      this.setState({ userchoiceNO: 3 });
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    this.setState({ nameset: 1 });
  };
  go = () => {
    this.setState({ timeRemainingInSeconds: 3 });
    this.state.timer = setInterval(() => {
      this.decrementTimeRemaining();
    }, 1000);

    // setTimeout(
    //   function() {
    //     this.setState({ timer: this.state.timer - 1 });
    //   }.bind(this),
    //   1000
    // );
  };
  decrementTimeRemaining = () => {
    if (this.state.timeRemainingInSeconds > 0) {
      this.setState({
        timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
      });
    } else {
      clearInterval(this.state.timer);
      this.generateCompChoice();
    }
  };
  generateCompChoice = () => {
    var c = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(c);
    if (c === 1) {
      this.setState({ compchoice: require("../img/stone.png") });
      this.setState({ compchoicename: "Stone" });
      this.setState({ compchoiceNO: 1 });
    } else if (c === 2) {
      this.setState({ compchoice: require("../img/paper.png") });
      this.setState({ compchoicename: "Paper" });
      this.setState({ compchoiceNO: 2 });
    } else if (c === 3) {
      this.setState({ compchoice: require("../img/scissors.png") });
      this.setState({ compchoicename: "Scissor" });
      this.setState({ compchoiceNO: 3 });
    }
    //   this.showResult.bind(this);
    // };
    // showResult = () => {
    this.setState({ block: "" });
    var p = this.state.userchoiceNO;
    var c = this.state.compchoiceNO;
    var w = "You Win ,YAY!!";
    var l = "You Lose , Let's Try Again ";
    console.log(p + "" + c);
    if (p !== c) {
      if (p === 1) {
        if (c === 2) {
          this.setState({ compscore: this.state.compscore + 1 });
          this.setState({ result: l });
        } else if (c === 3) {
          this.setState({ playerscore: this.state.playerscore + 1 });
          this.setState({ result: w });
        }
      } else if (p === 2) {
        if (c === 3) {
          this.setState({ compscore: this.state.compscore + 1 });
          this.setState({ result: l });
        } else if (c === 1) {
          this.setState({ playerscore: this.state.playerscore + 1 });
          this.setState({ result: w });
        }
      } else if (p === 3) {
        if (c === 1) {
          this.setState({ compscore: this.state.compscore + 1 });
          this.setState({ result: l });
        } else if (c === 2) {
          this.setState({ playerscore: this.state.playerscore + 1 });
          this.setState({ result: w });
        }
      }
    } else {
      this.setState({ result: "oops, Tie" });
    }
  };
  clearAll() {
    this.setState({ userchoice: "" });
    this.setState({ compchoice: "" });
    this.setState({ result: "" });
    this.setState({ block: 1 });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#C2185B", height: "1500px" }}>
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
              {""}

              {/* <Typing loop speed={170}>
                <span> </span>
                <Typing.Reset count={1} delay={50} />

                <span>Hey There!! </span>

                <Typing.Backspace count={12} />
              </Typing>
              <Typing loop speed={170}>
                <span> </span>
                <Typing.Reset count={1} delay={50} />
                <span>Welcome </span>
                <Typing.Backspace count={8} />
              </Typing> */}
              <Typing loop speed={170}>
                <span> </span>
                <Typing.Reset count={1} delay={50} />
                <span>Let's Play</span>
                <Typing.Backspace count={10} />
              </Typing>
            </Typography>
          </Grid>
          <Grid item md={12} style={{ height: "100px" }}>
            {}
          </Grid>
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
                  <a onClick={() => scrollTo({ y: 760, smooth: true })}>
                    Let's Go!
                  </a>
                )}
              </ScrollTo>
            </Button>
          </Grid>
          <Grid item md={12} style={{ height: "50px" }}>
            {}
          </Grid>
        </Grid>
        {this.state.nameset ? (
          <div>
            <div style={{ backgroundColor: "#F48FB1" }}>
              <Grid container justify="center">
                {/* <Grid item md={4} /> */}
                <Grid item md={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    Score
                  </Typography>
                </Grid>
                <Grid item md={12} />
                <Grid item md={6}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    {this.state.name}:{this.state.playerscore}
                  </Typography>
                </Grid>

                <Grid item md={6}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "center", paddingRight: "160px" }}
                  >
                    Computer:{this.state.compscore}
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <Grid container>
              <Grid item md={12} style={{ height: "60px" }}>
                {}
              </Grid>
              <Grid item md={2} />
              <Grid item md={3}>
                <Paper
                  elevation={1}
                  style={{ height: "300px", width: "300px" }}
                >
                  {this.state.userchoice ? (
                    <div>
                      <Typography
                        variant="button"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        Player Choice
                      </Typography>
                      <img
                        src={this.state.userchoice}
                        alt=""
                        style={{ paddingLeft: "50px" }}
                      />
                      <Typography
                        variant="button"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        {this.state.userchoicename}
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        Choose
                      </Typography>
                      <br />
                      <br />
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        Your Turn first
                      </Typography>
                    </div>
                  )}
                </Paper>
              </Grid>
              <Grid item md={2}>
                {this.state.userchoice && this.state.block ? (
                  <Fab
                    variant="extended"
                    aria-label="Delete"
                    style={{
                      position: "relative",
                      left: "50px",
                      top: "150px"
                    }}
                    onClick={this.go.bind(this)}
                  >
                    Let's Play
                  </Fab>
                ) : null}
              </Grid>

              <Grid item md={3}>
                <Paper
                  elevation={1}
                  style={{ height: "300px", width: "300px" }}
                >
                  {this.state.compchoice ? (
                    <div>
                      <Typography
                        variant="button"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        Computer Choice
                      </Typography>
                      <img
                        src={this.state.compchoice}
                        alt=""
                        style={{ paddingLeft: "50px" }}
                      />
                      <Typography
                        variant="button"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        {this.state.compchoicename}
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <div style={{ height: "50px" }} />

                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        Waiting For You
                      </Typography>
                      <br />
                      <Typography
                        component="h2"
                        variant="display3"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        {this.state.timeRemainingInSeconds}
                      </Typography>
                    </div>
                  )}
                </Paper>
              </Grid>
              <Grid item md={2} />
              <Grid item md={12} style={{ height: "30px" }}>
                {}
              </Grid>
              <Grid item md={2} />
              <Grid item md={3}>
                {this.state.block == 1 ? (
                  <div>
                    <Button
                      variant="outlined"
                      color="inherit"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "20px"
                      }}
                      onClick={this.setPlayer.bind(this, 1)}
                    >
                      Stone
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={this.setPlayer.bind(this, 2)}
                      style={{
                        color: "white",
                        position: "relative",
                        left: "30px"
                      }}
                    >
                      Paper
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      style={{
                        color: "white",
                        position: "relative",
                        left: "40px"
                      }}
                      onClick={this.setPlayer.bind(this, 3)}
                    >
                      Scissor
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outlined"
                    color="inherit"
                    style={{ color: "white", width: "300px" }}
                  >
                    User
                  </Button>
                )}
              </Grid>
              <Grid item md={2} />
              <Grid item md={3}>
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{ color: "white", width: "300px" }}
                >
                  Computer
                </Button>
              </Grid>
              <Grid item md={2} />
              <Grid item md={12} style={{ height: "50px" }}>
                <Typography
                  component="h2"
                  variant="display3"
                  gutterBottom
                  style={{ textAlign: "center", paddingRight: "100px" }}
                >
                  {this.state.result}
                  <span> </span>
                </Typography>
              </Grid>
              <Grid item md={5} />
              <Grid item md={4} style={{ height: "50px", paddingTop: "30px" }}>
                {this.state.result ? (
                  <Button
                    variant="outlined"
                    color="inherit"
                    style={{
                      color: "white",
                      position: "relative",
                      left: "20px"
                    }}
                    onClick={this.clearAll.bind(this)}
                  >
                    Try ,Again
                  </Button>
                ) : (
                  <div>{}</div>
                )}
              </Grid>
              <Grid item md={12}>
                <Dev />
              </Grid>
            </Grid>
          </div>
        ) : (
          <h5 style={{ textAlign: "center", color: "white" }}>
            Enter Your Name To Play Game
          </h5>
        )}
      </div>
    );
  }
}

export default Main;
