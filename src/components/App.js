import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import Skills from "./Skills.js";
import skillsData from "./skills_data.js";
import Projects from "./Projects.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Skills data={skillsData} />
        <Projects />
      </React.Fragment>
    );
  }
}

export default App;
