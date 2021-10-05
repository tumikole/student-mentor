import React, { Component } from "react";
import Logo from "../logo/Logo.png";
import "../App.css";
import { Link } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <div class="topnav">
        <img src={Logo} alt="" />
        <div className="navSide2">
          <Link class="active" to="/registration">
            Register
          </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

export default TopNav;
