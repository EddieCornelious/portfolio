import "../styles/Header.scss";
import React from "react";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <h1>EC</h1>
      </div>
      <div className="header__content">
        <Roll left cascade delay={1000}>
          <h1 className="header__name">EDDIE CORNELIOUS</h1>
        </Roll>
        <Slide right>
          <em className="header__career">Software Developer</em>
        </Slide>
        <Fade bottom delay={1500}>
          <a href="#projects" className="header__btn">
            SEE PROJECTS
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Header;
