import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
  I am in my final year as a <b>BSc Computer Science student</b> at the <a href="https://www.herts.ac.uk">University of Hertfordshire</a>. My experience in this field has been a journey of learning and practical application, driving my passion for technology and innovation. As I approach the completion of my undergraduate studies, I'm excited to explore the opportunities and challenges that lie ahead.
</p>
    );
    const two = (
      <p>
       Outside of my studies, I focus on coding projects and stay updated with the latest tech trends, and a gaming enthusiast.
      </p>
    );

    const tech_stack = [
      "Java",
      "Python",
      "React.js",
      "TypeScript",
      "Javascript ES6+",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Hiba" src={"/assets/pic.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;