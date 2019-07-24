import "../styles/Projects.scss";
import React from "react";
import Fade from "react-reveal/Slide";
import LazyLoad from "react-lazyload";

const ProjectCard = ({ project, show }) => {
  return (
    <div className="small-margin col-md-6 col-lg-4">
      <Fade bottom>
        <div onClick={() => show(project)} className="project__card">
          <div className="project__card__top">
            <div className="project__card__top__overlay">
              <a
                className="project__card__top__btn"
                onClick={() => show(project)}
                href="#projects"
              >
                VIEW DEMO
              </a>
            </div>
            <LazyLoad>
              <img alt={project.title} src={project.img_src} />
            </LazyLoad>
          </div>

          <div className="project__card__bottom">
            <h3>{project.title}</h3>
            <p>{project.info}</p>
            <a rel="noopener noreferrer" target="_blank" href={project.github}>
              <span>GITHUB </span>
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};
const Projects = ({ data, showProject }) => {
  return (
    <section id="projects" className="projects__section">
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
