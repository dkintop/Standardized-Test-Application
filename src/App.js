import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { checkLoginStatus } from "./helpers/checkLoginStatus.js";
import { persistLogin } from "./actions/index.js";
import { connect } from "react-redux";
import RegistrationForm from "./components/RegistrationForm";
import Logout from "./components/Logout.js";

export class App extends Component {
  componentDidMount() {
    let user = checkLoginStatus();
    this.props.persistLogin(user);
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
        <RegistrationForm />
        <Logout />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    persistLogin: (data) => dispatch(persistLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
