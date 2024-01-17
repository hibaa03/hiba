import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "OurSpace": {
        title: "OurSpace",
        desc:
          "A full-stack web application. ",
        techStack: "Node.js, Express.js, React.js, MongoDB, Redux",
        link: "https://github.com/hibaa03/OurSpace",
        image: "/assets/ourspace.jpeg"
      },
      Truth: {
        title: "Earth",
        desc:
          "A three.js simulation of the Earth",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/hibaa03/earthanimation",
        open: "https://earthanimation3js.netlify.app",
        image: "/assets/earth.jpeg"
      },
    };
    
    const projects = {
      "LegisPedia": {
        desc:
          "An application that harnesses the power of artificial intelligence to parse, comprehend, and extract insights from complex legal documents.",
        techStack: "Python, OpenAI, LangChain, Streamlit",
        link: "https://github.com/hibaa03/LegisPedia",
      },
      "JavaLocCache": {
        desc:
          "Engineered a Java-based memory caching system leveraging locality-aware allocation, achieving a 50% performance improvement",
        techStack: "Java",
        link:
          "https://github.com/hibaa03/text-to-binary"
      },
      "Diabetes Predictor": {
        desc:
          "Developed a Python-based diabetes prediction model utilizing scikit-learn, NumPy, and pandas, trained on a Kaggle Dataset.",
        techStack: "Python",
        link: "https://github.com/hibaa03/diabetes-predictor",
      },
      "ChitChat": {
        desc:
          "Real-time messaging app in React with Google authentication and Firebase as backend.",
        techStack: "React.js",
        link: "https://github.com/hibaa03/chitchat",
      },
      "News App": {
        desc:
          "A voice functioned news app.",
        techStack: "React.js, AlanAI, News API",
        link: "https://github.com/hibaa03/news-app",
      },
      "Path Finding Robot": {
        desc:
          "A path finding robot programmed in python to navigate using color based vision detection. ",
        techStack: "Python",
        link: "https://github.com/hibaa03/path-finding-robot",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ personal projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
