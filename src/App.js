import React, { Component } from "react";
// import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TopNav from "./Components/TopNav";
class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
