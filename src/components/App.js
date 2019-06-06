import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import Skills from "./Skills.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Skills />
      </React.Fragment>
    );
  }
}

export default App;
