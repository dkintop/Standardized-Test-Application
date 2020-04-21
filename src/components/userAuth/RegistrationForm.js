import React, { Component } from "react";
import { registerUser, login } from "../../actions/index.js";
import { connect } from "react-redux";
export class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      discipline: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="text-input"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <input
          className="text-input"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={this.handleChange}
        ></input>{" "}
        <br></br>
        <input
          className="text-input"
          type="text"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <label>
          Select Discipline:<br></br>
          PT/PTA:
          <input
            type="radio"
            name="discipline"
            value="PT"
            onChange={this.handleChange}
          ></input>
          <br></br>
          OT/COTA:{" "}
          <input
            type="radio"
            name="discipline"
            value="OT"
            onChange={this.handleChange}
          ></input>
          <br></br>
          ST:{" "}
          <input
            type="radio"
            name="discipline"
            value="ST"
            onChange={this.handleChange}
          ></input>
        </label>
        <br></br>
        <input type="submit"></input>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
    login: (data) => dispatch(login(data)),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
