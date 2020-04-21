import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegistrationVSLoginToggle: "Login",
    };
  }

  registrationVSLogin() {
    if (this.state.RegistrationVSLoginToggle === "Login") {
      return <LoginForm />;
    } else {
      return <RegistrationForm />;
    }
  }

  toggleRvL = () => {
    if (this.state.RegistrationVSLoginToggle === "Login") {
      this.setState({
        ...this.state,
        RegistrationVSLoginToggle: "Registration",
      });
    } else {
      this.setState({
        ...this.state,
        RegistrationVSLoginToggle: "Login",
      });
    }
  };

  toggleButtonText = () => {
    if (this.state.RegistrationVSLoginToggle === "Login") {
      return "Register New Account";
    } else {
      return "Login";
    }
  };

  render() {
    return (
      <div id="auth-container">
        {this.registrationVSLogin()}
        <button id="rvl-toggle-btn" onClick={this.toggleRvL}>
          {this.toggleButtonText()}
        </button>
      </div>
    );
  }
}

//
