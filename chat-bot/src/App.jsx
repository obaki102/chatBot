import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./components/header";
import MessageList from "./components/messageList";
import MessageForm from "./components/messageForm";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <MessageList />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
