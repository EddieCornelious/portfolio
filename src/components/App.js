import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import Skills from "./Skills.js";
import skillsData from "./skills_data.js";
import Projects from "./Projects.js";
import projectsData from "./project_data.js";

class App extends React.Component {
  state = {
    loadedHero: false
  };
  renderLoadedApp() {
    this.setState({
      loadedHero: true
    });
  }
  showProject(project) {
    console.log(project);
  }

  render() {
    if (!this.state.loadedHero) {
      setTimeout(() => {
        this.renderLoadedApp();
      }, 3000);
      return null;
    }

    return (
      <React.Fragment>
        <Header />
        <About />
        <Skills data={skillsData} />
        <Projects
          showProject={this.showProject.bind(this)}
          data={projectsData}
        />
      </React.Fragment>
    );
  }
}

export default App;
