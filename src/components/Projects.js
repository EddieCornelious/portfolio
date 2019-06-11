import "../styles/Projects.scss";
import React from "react";

const ProjectCard = ({ project, show }) => {
  return (
    <div className="small-margin col-md-4">
      <div onClick={() => show(project)} className="project__card">
        <div className="project__card__top">
          <img alt={project.title} src={project.img_src} />
        </div>

        <div className="project__card__bottom">
          <h3>{project.title}</h3>
          <p>{project.info}</p>
          <a target="_blank" href={project.github}>
            <span>GITHUB </span>
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};
const Projects = ({ data, showProject }) => {
  return (
    <section className="projects__section">
      <div className="section__header">
        <h2>
          <span className="section__header__top__text">PROJECT PORTFOLIO</span>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <ProjectCard show={showProject} project={data["1"]} />
          <ProjectCard show={showProject} project={data["2"]} />
          <ProjectCard show={showProject} project={data["3"]} />
          <ProjectCard show={showProject} project={data["4"]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
