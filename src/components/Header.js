import "../styles/Header.scss";
import React from "react";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <h1>EC</h1>
      </div>
      <div className="header__content">
        <h1 className="header__name">EDDIE CORNELIOUS</h1>
        <em className="header__career">FRONT END ENGINEER</em>
        <a href="#projects" className="header__btn">
          SEE PROJECTS
        </a>
      </div>
    </section>
  );
};

export default Header;
