import "../styles/About.scss";
import React from "react";
import nodeIMG from "../images/nodejs.png";
import jsIMG from "../images/javascript.png";
import reactIMG from "../images/react.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
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
              <Fade left>
                <h3 className="ethic__text__header">
                  MOTIVATED TO PRODUCE RESULTS
                </h3>
              </Fade>
              <p className="ethic__text">
                As a tenacious self-taught programmer, I use continuous
                iteration to produce results quickly and continuously improve
                products.
              </p>
            </div>
            <div className="col-sm-12">
              <Fade left>
                <h3 className="ethic__text__header">
                  ALWAYS WILLING TO LEARN NEW THINGS
                </h3>
              </Fade>
              <p className="ethic__text">
                I'm always looking to improve my current skill set, as well as
                learn new skills that can be added to my Web Developer toolbelt.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="skill__image__container">
              <Slide left>
                <img alt="node js" src={nodeIMG} />
              </Slide>
              <img alt="react" src={jsIMG} />
              <Slide right>
                <img alt="js" src={reactIMG} />
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
