import "../styles/About.scss";
import React from "react";
import nodeIMG from "../images/nodejs.png";
import jsIMG from "../images/javascript.png";
import reactIMG from "../images/react.png";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

const AboutText = ({ text, header }) => {
  return (
    <React.Fragment>
      <Fade left>
        <h3 className="ethic__text__header">{header}</h3>
      </Fade>
      <p className="ethic__text">{text}</p>
    </React.Fragment>
  );
};

const AboutImage = ({ delay, imgSrc, alt }) => {
  return (
    <RubberBand delay={delay}>
      <img alt={alt} src={imgSrc} />
    </RubberBand>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="section__header">
        <h2 className="section__head">
          <span className="section__header__top__text">FRONT END FOCUSED</span>
          <span className="section__header__bottom__text">
            WITH FULL STACK EXPERIENCE
          </span>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-sm-12">
              <AboutText
                header="MOTIVATED TO PRODUCE RESULTS"
                text="As a tenacious self-taught programmer, I use continuous
             iteration to produce results quickly and continuously improve
             products."
              />
            </div>
            <div className="col-sm-12">
              <AboutText
                header="ALWAYS WILLING TO LEARN NEW THINGS"
                text="I'm always looking to improve my current skill set, as well as
                learn new skills that can be added to my Web Developer toolbelt."
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="skill__image__container">
              <AboutImage alt={"Node Image"} imgSrc={nodeIMG} delay={1000} />
              <AboutImage alt={"JS Image"} imgSrc={jsIMG} delay={2000} />
              <AboutImage alt={"React Image"} imgSrc={reactIMG} delay={3000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
