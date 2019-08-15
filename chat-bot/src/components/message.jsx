import React from "react";
import { Grid, Paper, Avatar, ListItemText } from "@material-ui/core";
import Image from "../tpx.png";

const Message = ({ message }) => {
  const isRobot = message.isRobot;
  let avatar;
  if (isRobot) {
    avatar = (
      <Avatar src={Image} style={{ margin: 10, width: 60, height: 60 }} />
    );
  } else {
    avatar = (
      <Avatar
        style={{ backgroundColor: "green", margin: 10, width: 40, height: 40 }}
      >
        You
      </Avatar>
    );
  }

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing="9">
        <Grid item xs={1}>
          {avatar}
        </Grid>
        <Grid item xs={11}>
          <Paper
            style={{
              padding: "10px",
              width: 700
            }}
          >
            {message.response.map(res => (
              <ListItemText
                key={res.id}
                style={{ padding: "10px" }}
                primary={res.topic}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Message;
