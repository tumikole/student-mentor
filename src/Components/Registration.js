import React from "react";
import TopNav from "../Components/TopNav";
// import { FormErrors } from './FormErrors';

const Registration = (props) => {
  console.log('tumi', props)
  return (
    <div>
      <TopNav />
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
        
        </div>
        <div className={`form-group ${props.errorClass(props.newState.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={props.email}
            onChange={props.handleUserInput}  />
        </div>
        <div className={`form-group ${props.errorClass(props.newState.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={props.password}
            onChange={props.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={props.formValid}>Sign up</button>
      </form>
    </div>
  );
};
export default Registration;
