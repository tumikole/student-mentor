import React, { Component } from "react";
import Logo from "../logo/Logo.png";
import Home from "../icons/home-solid.svg";

import "../App.css";
import { Link } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <div class="topnav">
        <img src={Logo} alt="" />
      </div>
    );
  }
}

export default TopNav;
