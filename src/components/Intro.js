import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"hiba"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Welcome to my digital space!</div>
          <div className="intro-desc">
          I am a student based in Islamabad, Pakistan. I'm deeply immersed in the vibrant world of technology. Here, I showcase my projects and share insights from my academic and tech explorations. Dive into my journey and discover the innovative ideas that drive me in this dynamic field of computer science.
          </div>
          <a
            href="mailto:hiba.asyed@outlook.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Reach Out!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;