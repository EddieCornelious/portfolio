import "../styles/About.scss";
import React from "react";
import nodeIMG from "../images/nodejs.png";
import jsIMG from "../images/javascript.png";
import reactIMG from "../images/react.png";
const About = () => {
  return (
    <section className="about">
      <div className="section__header">
        <h2>
          <span className="section__header__top__text">FRONT END FOCUSED</span>
          <span className="section__header__bottom__text">
            WITH FULL STACK EXPERIENCE
          </span>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-12">
              <h3 className="ethic__text__header">
                MOTIVATED TO PRODUCE RESULTS
              </h3>
              <p className="ethic__text">
                As a tenacious self-taught programmer, I use continuous
                iteration to produce results quickly and continuously improve
                products.
              </p>
            </div>
            <div className="col-sm-12">
              <h3 className="ethic__text__header">
                MOTIVATED TO PRODUCE RESULTS
              </h3>
              <p className="ethic__text">
                As a tenacious self-taught programmer, I use continuous
                iteration to produce results quickly and continuously improve
                products.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="skill__image__container">
              <img alt="node js" src={nodeIMG} />
              <img alt="react" src={jsIMG} />
              <img alt="js" src={reactIMG} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
