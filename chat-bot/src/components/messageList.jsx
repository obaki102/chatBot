import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { deepPurple } from "@material-ui/core/colors";

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
  render() {
    const { dense, secondary } = this.state;
    return (
      <Container maxWidth="sm" style={{ height: 200 }}>
        <div className={useStyles.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={useStyles.demo}>
                <List dense={secondary}>
                  <ListItem>
                    <Avatar className={useStyles2.purpleAvatar}>CB</Avatar>
                    <ListItemText
                      primary="Hi there!?"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default MessageList;
