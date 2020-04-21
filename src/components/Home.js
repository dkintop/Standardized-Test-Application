import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/userAuth/LoginForm.js";
import Logout from "./userAuth/Logout.js";
export class Home extends Component {
  logInStateDependentComponent() {
    if (this.props.currentUser) {
      return (
        <div>
          {this.props.currentUser.name}
          <Logout />
        </div>
      );
    } else {
      return <LoginForm />;
    }
  }

  render() {
    return this.logInStateDependentComponent();
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};
export default connect(mapStateToProps)(Home);
