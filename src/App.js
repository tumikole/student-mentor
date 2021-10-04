import React, { Component } from "react";
import Registration from "./Components/Registration";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
