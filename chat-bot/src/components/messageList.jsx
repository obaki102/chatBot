import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import { deepPurple } from "@material-ui/core/colors";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import MessageForm from "../components/messageForm";
import Message from "../components/message";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchResponse } from "../actions/postActions";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
}));

const useStyles2 = makeStyles({
  avatar: {
    margin: 10
  },

  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff"
  }
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dense: false,
      secondary: false
    };
  }

  sendPost = () => {
    this.props.fetchResponse();
  };

  render() {
    const { dense, secondary } = this.state;
    const message = [
      { id: 1, message: "Hi there!? How can I assist you?", isRobot: true },
      { id: 2, message: "test1", isRobot: false },
      { id: 3, message: "test2", isRobot: false }
    ];
    return (
      <Container maxWidth="md" style={{ height: 200 }}>
        <div className={useStyles.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div className={useStyles.demo}>
                <List dense={secondary}>
                  {message.map(msg => (
                    <ListItem key={msg.id}>
                      <Message message={msg} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            style={{ width: 700 }}
            multiline
          />
          <div style={{ float: "right", padding: "30px" }}>
            <Button variant="contained" color="primary" onClick={this.sendPost}>
              Send
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

MessageList.propTypes = {
  fetchResponse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.posts.messages
});

export default connect(
  mapStateToProps,
  { fetchResponse }
)(MessageList);
