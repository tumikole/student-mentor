import React, { Component } from "react";
// import Logo from '../logo/Logo.png'
import TopNav from "../Components/TopNav";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homeBody">
        <TopNav />
        <br />
        {/* <img src="https://freesvg.org/img/1527134288.png" alt="Student" /> */}
        {/* <img style={{width:"49.4%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Books-aj.svg_aj_ashton_01.svg/1155px-Books-aj.svg_aj_ashton_01.svg.png" alt="Books"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Big_Book.svg" alt="" /> */}
      </div>
    );
  }
}

export default Home;
