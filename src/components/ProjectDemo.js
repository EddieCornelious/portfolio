import "../styles/ProjectDemo.scss";
import React from "react";

class ProjectDemo extends React.Component {
  state = {};

  render() {
    if (!this.props.shouldShowDemo) {
      return null;
    }
    return (
      <div className="project__overlay">
        <button
          onClick={() => this.props.closeProject()}
          className="close_demo"
        >
          X
        </button>

        <div className="project__demo">
          <video controls={true} loop={true} autoPlay={true}>
            <source src={this.props.currentDemo} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
export default ProjectDemo;
