import React, { Component } from "react";
import Logout from "./userAuth/Logout";
import { connect } from "react-redux";
export class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard-container">
        <div className="user-name">{this.props.currentUser.name}</div>
        <p>This is the Dashboard. Alot of work will be done here</p>
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
