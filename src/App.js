import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/userAuth/LoginForm";
import { checkLoginStatus } from "./helpers/checkLoginStatus.js";
import { persistLogin } from "./actions/index.js";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
export class App extends Component {
  componentDidMount() {
    let user = checkLoginStatus();
    if (user) {
      this.props.persistLogin(user);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    persistLogin: (data) => dispatch(persistLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
