import React, { Component } from "react";
import { connect } from "react-redux";

import "./Login.css";
import Button from "../../../components/Button";
import { userLoginAPI } from "../../../configs/redux/action";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const res = await this.props.userLoginAPI({ email, password });
    if (res) {
      // console.log("success login : ", res);
      localStorage.setItem("userData", JSON.stringify(res));
      this.setState({
        email: "",
        password: ""
      });
      history.push("/");
    } else {
      // console.log("login failed : ", res);
      history.push("/login");
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
              onClick={this.handleLoginSubmit}
              title="Masuk"
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
  userLoginAPI: data => dispatch(userLoginAPI(data))
});

export default connect(
  reduxState,
  reduxDispatch
)(Login);
