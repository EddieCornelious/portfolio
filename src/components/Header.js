import "../styles/Header.scss";
import React from "react";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <h1>EC</h1>
      </div>
      <div className="header__content">
        <Roll left cascade>
          <h1 className="header__name">EDDIE CORNELIOUS</h1>
        </Roll>
        <Slide right>
          <em className="header__career">FRONT END ENGINEER</em>
        </Slide>
        <Slide bottom>
          <a href="#projects" className="header__btn">
            SEE PROJECTS
          </a>
        </Slide>
      </div>
    </section>
  );
};

export default Header;
