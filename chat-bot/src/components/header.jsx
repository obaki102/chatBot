import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Avatar
} from "@material-ui/core";

export default props => (
  <Container maxWidth="md">
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">TPXBot</Typography>
      </Toolbar>
    </AppBar>
  </Container>
);
