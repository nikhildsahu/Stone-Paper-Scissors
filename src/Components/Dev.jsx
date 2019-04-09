import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
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
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dev;
