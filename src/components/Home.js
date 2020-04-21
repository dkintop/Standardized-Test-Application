import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/userAuth/LoginForm.js";
import Logout from "./userAuth/Logout.js";
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
      return <AuthorizationContainer />;
    }
  }

  render() {
    return this.userDependentComponent();
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
