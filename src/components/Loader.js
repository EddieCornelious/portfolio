import "../styles/Loader.scss";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>
    </div>
  );
};

export default Loader;
