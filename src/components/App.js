import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.scss";

import React from "react";
import Loader from "./Loader.js";
import skillsData from "./skills_data.js";
import projectsData from "./project_data.js";

const Header = React.lazy(() => import("./Header.js"));
const About = React.lazy(() => import("./About.js"));
const Skills = React.lazy(() => import("./Skills.js"));
const Projects = React.lazy(() => import("./Projects.js"));
const Footer = React.lazy(() => import("./Footer.js"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedHero: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderLoadedApp();
    }, 500);
  }

  renderLoadedApp() {
    this.setState({
      loadedHero: true
    });
  }

  render() {
    if (!this.state.loadedHero) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Header />
        </React.Suspense>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <About />
        </React.Suspense>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Skills data={skillsData} />
        </React.Suspense>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Projects data={projectsData} />
        </React.Suspense>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Footer />
        </React.Suspense>
      </React.Fragment>
    );
  }
}

export default App;
