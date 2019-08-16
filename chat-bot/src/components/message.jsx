import React, { Component } from "react";
import {
  Grid,
  Paper,
  Avatar,
  ListItemText,
  Tooltip,
  Chip,
  Button
} from "@material-ui/core";
import Error from "@material-ui/icons/ErrorRounded";
import Image from "../tpx.png";
import UserImage from "../user.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSubtopic } from "../actions/postActions";
import CreateDialog from "../createDialog";

class Message extends Component {
  constructor() {
    super();
  }

  handleClick = subtopic => {
    this.props.fetchSubtopic(subtopic);
  };
  openTab = () => {
    window.open("https://dash.tpx.com");
  };
  render() {
    const { message } = this.props;
    const isRobot = message.isRobot;
    const isError = message.isError;
    console.log("isError", isError);

    let avatar;
    if (isRobot) {
      avatar = (
        <Tooltip title={new Date().toLocaleString()}>
          <Avatar src={Image} style={{ margin: 10, width: 60, height: 60 }} />
        </Tooltip>
      );
    } else {
      avatar = (
        <Tooltip title={new Date().toLocaleString()}>
          <Avatar
            src={UserImage}
            style={{
              margin: 10,
              width: 60,
              height: 60
            }}
          />
        </Tooltip>
      );
    }

    let showMessage;
    if (isError) {
      showMessage = message.response.map(res => (
        <Grid item xs={12} key={res.id}>
          <span
            key={res.id}
            className="MuiTypography-root MuiListItemText-primary MuiTypography-body1"
          >
            <Error style={{ padding: "5px" }} />
            {res.topic}
          </span>
          <span>
            Do you want to open an ITSDT tciket?&nbsp;&nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={this.openTab.bind(this, res.topic)}
            >
              Yes
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
              No
            </Button>
          </span>
        </Grid>
      ));
    } else {
      showMessage = message.response.map(res => {
        switch (res.type) {
          case "topic":
            return (
              <Paper
                style={{
                  padding: "10px",
                  width: 700
                }}
                key={res.id}
              >
                <Grid item xs={12} key={res.id}>
                  <Grid container justify="center" spacing={1}>
                    <Grid item xs={9}>
                      <ListItemText key={res.id} primary={res.topic} />
                    </Grid>
                    <Grid item xs={3}>
                      <Chip
                        onClick={this.handleClick.bind(this, res.topic)}
                        size="small"
                        label="open this topic..."
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );
          case "secured":
            return (
              <Paper
                style={{
                  padding: "10px",
                  width: 700
                }}
                key={res.id}
              >
                <Grid item xs={12} key={res.id}>
                  <Grid container justify="center" spacing={1}>
                    <Grid item xs={10}>
                      <Error style={{ padding: "5px" }} />
                      <span style={{ color: "#d9534f" }}>
                        This is a secured data/record. Please provide your
                        credential for validation.
                      </span>
                      <ListItemText key={res.id} primary={res.topic} />
                    </Grid>
                    <Grid item xs={2}>
                      <CreateDialog topic={res.topic} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );

          default:
            return (
              <Paper
                style={{
                  padding: "10px",
                  width: 700
                }}
                key={res.id}
              >
                <Grid item xs={12} key={res.id}>
                  <Grid container justify="center" spacing={1}>
                    <Grid item xs={12}>
                      <ListItemText key={res.id} primary={res.topic} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );
        }
      });
    }

    return (
      <Grid item xs={12}>
        <Grid container justify="center" spacing={9}>
          <Grid item xs={1}>
            {avatar}
          </Grid>
          <Grid item xs={11}>
            {showMessage}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Message.propTypes = {
  fetchSubtopic: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  subtopic: state.posts.subtopic
});

export default connect(
  mapStateToProps,
  { fetchSubtopic }
)(Message);
