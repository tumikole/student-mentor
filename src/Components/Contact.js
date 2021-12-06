import React from "react";
import Contacts from "../icons/phone.png";
import Whatsapp from "../icons/WhatsApp.svg.png";
import Facebook from "../icons/facebook-f-brands.svg";

import "../App.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footerContainer">
          <div className="contactSection">
            <h2>Contact Info</h2>
            <div className="contactTags">
              <a href="tel:079 719 6877">
                <img className="contactInfo" src={Contacts} alt="" /> Contact Us
              </a>{" "}
              <a href="https://wa.me/0797196877" target="_blank">
                <img className="contactInfo1" src={Whatsapp} alt="" /> Whatsapp
                Us
              </a>
            </div>
          </div>
          <div>
            <h5>Available from Monday's to Saturday's</h5>
          </div>
        </div>
        <div className="footerText">
          <h5 class="footerText">STUDENTMENTOR&#9400;2020 - 2022</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
