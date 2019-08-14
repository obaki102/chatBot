import React from "react";
import { Paper, Avatar, ListItemText } from "@material-ui/core";
const Message = ({ message }) => {
  return (
    <Paper
      style={{
        padding: "10px",
        width: 900
      }}
    >
      <Avatar style={{ backgroundColor: message.isRobot ? "red" : "green" }}>
        {message.isRobot ? "CB" : "You"}
      </Avatar>
      <ListItemText style={{ padding: "10px" }} primary={message.message} />
    </Paper>
  );
};

export default Message;
