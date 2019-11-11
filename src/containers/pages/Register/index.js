import React, { Component } from "react";

import "./Register.css";
import Button from "../../../components/Button";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleRegisterSubmit = () => {
    console.log("Email : ", this.state.email);
    console.log("Password : ", this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <div className="form-group">
            <p className="label-input">email</p>
            <input
              type="text"
              id="email"
              placeholder="name@example.com"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <div className="garis-input"></div>
          </div>
          <div className="form-group">
            <p className="label-input">password</p>
            <input
              type="password"
              id="password"
              placeholder="********"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <div className="garis-input"></div>
          </div>
          <div className="form-group">
            <Button onClick={this.handleRegisterSubmit} title="Daftar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
