import React from "react";
import TpxLogo from "../tpxlogo.png";
import { AppBar, Toolbar, Grid, Container, Avatar } from "@material-ui/core";

export default props => (
  <Container maxWidth="md">
    <AppBar position="static" color="primary">
      <Grid item xs={12} alignContent="center">
        <Avatar
          src={TpxLogo}
          style={{
            margin: 10,
            width: 100,
            height: 100
          }}
        />
      </Grid>
    </AppBar>
  </Container>
);
