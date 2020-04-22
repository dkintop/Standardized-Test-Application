import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/userAuth/LoginForm.js";
import Logout from "./userAuth/Logout.js";
import AuthorizationContainer from "./userAuth/AuthorizationContainer";
export class Home extends Component {
  userDependentComponent() {
    if (this.props.currentUser) {
      return (
        <div>
          {this.props.currentUser.name}
          <Logout />
          //this will be user dashboard eventually.
        </div>
      );
    } else {
      return (
        <>
          <div className="home-flex 1" id="info-box">
            <div id="info">
              General Information about the app and features will go here as
              well as additional decorative elements on this page.
            </div>
          </div>
          <AuthorizationContainer />
        </>
      );
    }
  }

  render() {
    return <div id="home-container">{this.userDependentComponent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
