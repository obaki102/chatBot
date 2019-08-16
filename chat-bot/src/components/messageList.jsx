import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import { Badge } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import MessageForm from "../components/messageForm";
import Message from "../components/message";
import Divider from "@material-ui/core/Divider";
import { TextField, Avatar } from "@material-ui/core";

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
    color: "#fff"
  }
}));

const useStyles2 = makeStyles({
  avatar: {
    margin: 10
  },

  purpleAvatar: {
    margin: 10,
    color: "#fff"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff"
  }
});

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dense: false,
      secondary: false,
      messageForm: "",
      message: [
        {
          id: 1,
          response: [{ id: 1, topic: "Hi there!? How can I assist you?" }],
          isRobot: true,
          isError: false
        }
      ],
      isTopicOpen: false
    };
  }

  sendPost = () => {
    this.setState({ isTopicOpen: true });
    const userMessage = this.state.messageForm;
    const maxVal = Math.max(...this.state.message.map(i => i.id), 0);
    if (userMessage != "") {
      let keyword = userMessage
        .trim()
        .match(/[^ ,]+/g)
        .join(",");
      keyword = keyword.replace(/[&\/\\#+()$~%.'":*?<>{}]/g, "");
      this.props.fetchResponse(keyword);

      this.setState({
        message: [
          ...this.state.message,
          {
            id: maxVal + 1,
            response: [{ id: maxVal + 1, topic: userMessage }],
            isRobot: false,
            isError: false
          }
        ],
        messageForm: ""
      });
    } else {
      this.setState({
        message: [
          ...this.state.message,
          {
            id: maxVal + 1,
            response: [
              {
                id: maxVal + 1,
                topic: "Sorry you entered a blank query. Please try again."
              }
            ],
            isRobot: true,
            isError: true
          }
        ],
        messageForm: ""
      });
    }
    const textFieldinput = document.getElementById("textArea");
    textFieldinput.value = "";
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.sendPost();
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    const maxVal = Math.max(...this.state.message.map(i => i.id), 0);
    if (nextProps.messages) {
      if (Object.keys(nextProps.messages.data).length === 0) {
        this.setState({
          message: [
            ...this.state.message,
            {
              id: maxVal + 1,
              response: [
                {
                  id: maxVal + 1,
                  topic: "Sorry no related record found."
                }
              ],
              isRobot: true,
              isError: true
            }
          ]
        });
      } else {
        this.setState({
          message: [
            ...this.state.message,
            {
              id: maxVal + 1,
              response: nextProps.messages.data,
              isRobot: true,
              isError: false
            }
          ]
        });
      }
      this.setState({ isTopicOpen: false });
    }
  }

  render() {
    const { dense, secondary } = this.state;
    const { message } = this.state;
    return (
      <Container maxWidth="md" style={{ height: 200 }}>
        <div className={useStyles.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
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

        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={9}>
              <TextField
                id="textArea"
                variant="outlined"
                margin="normal"
                style={{ width: 700 }}
                onChange={this.handleChange("messageForm")}
                onKeyDown={this.handleKeyDown}
              />
            </Grid>
            <Grid item xs={3} style={{ padding: "40px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.sendPost}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
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
