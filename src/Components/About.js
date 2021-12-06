import React, { Component } from "react";
import Modal from "../Components/Modal";
import "../App.css";
import Registration from "./ContactForm";

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <br />
        <h1 style={{ textAlign: "center" }}>
          About <span style={{ color: "orange" }}>Student</span>{" "}
          <span style={{ color: "orange" }}>Mentor</span>
        </h1>
        <br />
        <p>
          <div className="studentOffers">
            <div className="side1">
              <div>
                <h2>Offer's...</h2>
              </div>
              <ul>
                <li>We do Assignments 100 % pass rate.</li>
                <li>Exam preparations (Face to face on your request.</li>
                <li>We do research</li>
                <li>Edit your work.</li>
                <li>Provide recording class.</li>
                <li>Provide online class.</li>
                <li>Improving your study skills.</li>
                <li>Unpackyour modules content.</li>{" "}
                <li>Help with old/previous question papers and memo.</li>
              </ul>
            </div>
            <div className="side2">
              <div>
                <h2>Courses...</h2>
              </div>
              <ul>
                <li>Law (LLB)</li>
                <li>Law (BA)</li>
                <li>Criminal Justice</li>
                <li>Project Management</li>
                <li>Tourism Management</li>
                <li>Business Studies</li>
                <li>Accounting Sciences</li>
                <li>Archives and Records Management</li>
                <li>Software Development/Computer Science</li>
                <li>etc...</li>
              </ul>
            </div>

          </div>
          <br />
          <h4>Click button below to send your documents for assistant...</h4>
          <br />
          <Modal />
        </p>
        
      </div>
    );
  }
}

export default About;