import React, { Component } from "react";
// import Unisa from '../logo/unisa.png'
import Secret from "../logo/secret.jpg";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homeBody">
        <h1 style={{ color: "orange", textAlign: "center" }}>
          Education is a key to <span style={{ color: "black" }}>success</span>
        </h1>
      </div>
    );
  }
}

export default Home;
