import "../styles/Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo__footer">
        <div className="footer__top">
          <h3>EC</h3>
        </div>
        <div className="footer__bottom">
          <div className="contact__container">
            <div className="social__contact">
              <h3>
                <a href="https://github.com/EddieCornelious/">Github</a>
              </h3>
              <h3>
                {" "}
                <a href="https://www.linkedin.com/in/eddie-cornelious-669817143/">
                  Linkedin
                </a>
              </h3>
              <h3>
                <a>Resume</a>
              </h3>
            </div>
            <div className="creator__info">CREATED by Eddie Cornelious</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
