import React, { Component } from "react";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MessageForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          style={{ width: 700 }}
          multiline
        />
        <div style={{ float: "right", padding: "30px" }}>
          <Button variant="contained" color="primary">
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
