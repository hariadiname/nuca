import React, { Component } from "react";
import { connect } from "react-redux";
import { userRegisterAPI } from "../../../configs/redux/action";

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

  handleRegisterSubmit = async () => {
    const { email, password } = this.state;
    console.log("Email : ", email);
    console.log("Password : ", password);

    const res = await this.props.userRegisterAPI({ email, password });

    if (res) {
      this.setState({
        email: "",
        password: ""
      });
    }
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
            <Button
              onClick={this.handleRegisterSubmit}
              title="Daftar"
              loading={this.props.isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

const reduxState = state => ({
  isLoading: state.isLoading
});

const reduxDispatch = dispatch => ({
  userRegisterAPI: data => dispatch(userRegisterAPI(data))
});

export default connect(
  reduxState,
  reduxDispatch
)(Register);
