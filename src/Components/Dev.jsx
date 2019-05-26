import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import GitHubButton from "react-github-btn";
class Dev extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid
            item
            md={12}
            style={{
              paddingRight: "90px",
              paddingTop: "30px"
            }}
          >
            <Typography
              variant="button"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Nikhil S (@stanleeniko)
              <br />
              <br />
              <GitHubButton
                href="https://github.com/stanleeniko"
                aria-label="Follow @stanleeniko on GitHub"
              >
                Follow @stanleeniko
              </GitHubButton>
              <span> </span>
              <GitHubButton
                href="https://github.com/stanleeniko/Stone-Paper-Scissors"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star stanleeniko/Stone-Paper-Scissors on GitHub"
              >
                Star
              </GitHubButton>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dev;
