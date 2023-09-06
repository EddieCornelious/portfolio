import "../styles/Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div id = "footer" className="footer">
      <div className="logo__footer">
        <div className="footer__top">
          <h3>EC</h3>
        </div>
        <div className="footer__bottom">
          <div className="contact__container">
            <div className="social__contact">
              <h3>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/EddieCornelious/"
                >
                  Github
                </a>
              </h3>
              <h3>
                {" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/eddie-cornelious-669817143/"
                >
                  Linkedin
                </a>
              </h3>
              <h3>
                <a
                  rel="noopener noreferrer"
                  href="#footer"
                >
                  Resume
                </a>
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
