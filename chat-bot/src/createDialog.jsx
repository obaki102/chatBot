import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { fetchSubtopic } from "./actions/postActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class createDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, setOpen: false, firstName: "", password: "" };
  }

  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

  handleToggle = () => {
    this.setState({ setOpen: !this.state.setOpen });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ birthDate: date });
  };

  sendPost = () => {
    this.props.fetchSubtopic(this.props.topic);
    this.setState({ setOpen: !this.state.setOpen });
  };

  render() {
    const { firstName, password } = this.state;
    return (
      <React.Fragment>
        <Chip
          onClick={this.handleClickOpen}
          size="small"
          label="open this topic..."
          color="secondary"
        />
        <Dialog
          open={this.state.setOpen}
          onClose={this.handleToggle}
          TransitionComponent={Transition}
        >
          <DialogContent>
            <form>
              <List>
                <ListItem>
                  <TextField
                    id="standard-name"
                    label="User Name"
                    value={firstName}
                    onChange={this.handleChange("firstName")}
                    margin="normal"
                    style={{ width: 500 }}
                    placeholder="First Name"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    id="standard-name"
                    label="Password"
                    value={password}
                    onChange={this.handleChange("password")}
                    margin="normal"
                    style={{ width: 500 }}
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </ListItem>
              </List>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.sendPost} color="primary">
              Submit
            </Button>
            <Button onClick={this.handleToggle} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
createDialog.propTypes = {
  fetchSubtopic: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  subtopic: state.posts.subtopic
});

export default connect(
  mapStateToProps,
  { fetchSubtopic }
)(createDialog);
