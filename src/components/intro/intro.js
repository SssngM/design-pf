import React from "react";
import "./intro.css";
import Background from "../../imges/background.jpg";
// import Intromc from "../../imges/intromc.svg";

function Intro(props) {
  return (
    <div className="i">
        <div className="i">
        <img src={Background} className="intro-img" />
        </div>
      <div className="i-left">
        <div className="i-left-wrapper">
        {/* <div className="i-hello">Hello! I am </div> */}
          <h2 className="i-name"> Seung Yoo</h2>
          <div className="i-title">
            <div className="title-item">Hello, I'm a Frontend Engineer </div>
            <div className="title-item">based in San Francisco. </div>
            <div className="title-item">Recently finished working at GitLab,</div>
              <div> <a href="https://design.gitlab.com/">Slippers(Pajamas)</a>UI Design System.</div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Intro;
