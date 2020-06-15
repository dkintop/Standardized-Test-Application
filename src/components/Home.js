import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/userAuth/LoginForm.js";
import Logout from "./userAuth/Logout.js";
import AuthorizationContainer from "./userAuth/AuthorizationContainer";
import clipboard from "../images/clipboard-svgrepo-com (1).svg";
import Dashboard from "./Dashboard";
export class Home extends Component {
  userDependentComponent() {
    if (this.props.currentUser) {
      return (
        <div>
          <Dashboard />
        </div>
      );
    } else {
      return (
        <>
          <div className="home-flex 1" id="info-box">
            <div id="info">
              <p>
                General Information about the app and features will go here as
                well as additional decorative elements on this page.
              </p>
              <div className="img-container">
                <img src={clipboard}></img>
              </div>
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
