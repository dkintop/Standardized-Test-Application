import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/index.js";
export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="form">
        <div>Welcome, Please Login</div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input onChange={this.handleChange} type="text" name="email"></input>
          <br></br>
          <label>Password:</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
          ></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
