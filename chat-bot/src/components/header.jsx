import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
export default props => (
  <Container maxWidth="sm">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ChatBot</Typography>
      </Toolbar>
    </AppBar>
  </Container>
);
