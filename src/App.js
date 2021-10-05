import React, { Component } from "react";
import Registration from "./Components/Registration";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import { FormErrors } from "./Components/FormErrors";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/registration">
              <Registration
                newState={this.state}
                handleUserInput={this.handleUserInput}
                validateField={this.validateField}
                validateForm={this.validateForm}
                 errorClass={this.errorClass} 
              />
            </Route>

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
