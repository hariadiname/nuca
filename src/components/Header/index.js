import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logonuca from "../../assets/img/logo/Logo-nuca.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="">
        <img src={logonuca} alt="logo" className="logo" />
      </Link>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="menu">
        <Link to="/">Home</Link>
        <Link to="/login">Masuk</Link>
        <Link to="/register">Daftar</Link>
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times"></i>
        </label>
      </ul>
    </div>
  );
};

export default Header;
