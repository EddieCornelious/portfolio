import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import Skills from "./Skills.js";
import skillsData from "./skills_data.js";
import Projects from "./Projects.js";
import projectsData from "./project_data.js";
import ProjectDemo from "./ProjectDemo.js";
import Footer from "./Footer.js";
import Loader from "./Loader.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedHero: false,
      shouldShowDemo: false,
      currentDemo: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderLoadedApp();
    }, 3000);
  }

  renderLoadedApp() {
    this.setState({
      loadedHero: true
    });
  }

  showProject(project) {
    this.setState({
      shouldShowDemo: true,
      currentDemo: project.demo
    });
  }

  hideProject() {
    this.setState({
      shouldShowDemo: false,
      currentDemo: null
    });
  }

  render() {
    if (!this.state.loadedHero) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <ProjectDemo
          currentDemo={this.state.currentDemo}
          shouldShowDemo={this.state.shouldShowDemo}
          closeProject={this.hideProject.bind(this)}
        />
        <Header />
        <About />
        <Skills data={skillsData} />
        <Projects
          showProject={this.showProject.bind(this)}
          data={projectsData}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
