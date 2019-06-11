import "../styles/Projects.scss";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="col-sm-4">
      <div className="project__card">
        <div className="project__card__top">&nbsp;</div>

        <div className="project__card__bottom">&nbsp;</div>
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <section className="projects__section">
      <div className="section__header">
        <h2>
          <span className="section__header__top__text">PROJECT PORTFOLIO</span>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
