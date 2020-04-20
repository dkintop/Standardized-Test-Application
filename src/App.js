import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { checkLoginStatus } from "./helpers/checkLoginStatus.js";
class App extends Component {
  componentDidMount() {
    let user = checkLoginStatus();
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
