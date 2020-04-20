import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/index.js";
export class Logout extends Component {
  handleLogOut = () => {
    window.localStorage.removeItem("ST_APP");
    this.props.logout();
    console.log("clicked");
  };

  render() {
    return <button onClick={this.handleLogOut}>Log Out</button>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
