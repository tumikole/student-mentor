import React, { Component } from "react";
import TopNav from "../Components/TopNav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <TopNav />

        <h1 style={{ fontSize: "100px" }}>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
